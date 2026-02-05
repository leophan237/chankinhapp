
import React from 'react';

// --- Types ---
export interface LarkBlock {
    block_id: string
    block_type: number
    parent_id?: string
    children?: string[] // List of child block IDs
    text?: any
    heading1?: any
    heading2?: any
    heading3?: any
    bullet?: any
    ordered?: any
    code?: any
    quote?: any
    image?: any
    // Add other properties as needed
    [key: string]: any
}

interface TreeNode extends LarkBlock {
    childNodes: TreeNode[]
}

// --- Helpers ---

/**
 * Transforms a flat list of blocks into a tree structure based on parent_id -> children relationship.
 * Note: Lark blocks have a `children` array property containing IDs of their children.
 * We use that to reconstruct the tree.
 */
function buildTree(blocks: LarkBlock[]): TreeNode[] {
    const blockMap = new Map<string, TreeNode>();

    // 1. Initialize map
    blocks.forEach(block => {
        blockMap.set(block.block_id, { ...block, childNodes: [] });
    });

    const rootNodes: TreeNode[] = [];

    // 2. Build tree
    blocks.forEach(block => {
        const node = blockMap.get(block.block_id)!;
        const parentId = block.parent_id;

        // If it has a parent and that parent is also in our list (and not the page itself sometimes?)
        // Actually, easiest way is to check if the parent exists in our map.
        // However, the Root Page block usually has parent_id="" or is just the entry point.
        // The API actually gives a list, usually starting with the Page block.
        // Children are defined in the `children` array of the parent.

        // Strategy: 
        // Iterate over all blocks. If a block is referenced in another block's `children`, it's a child.
        // If not, it's a root (or the Page block).

        // Wait, efficient way using `parent_id`:
        // If parent_id exists in map, add to parent's childNodes.
        // Else, add to rootNodes.

        if (parentId && blockMap.has(parentId)) {
            const parent = blockMap.get(parentId)!;
            // We want to maintain order. The `children` array in parent gives the correct order.
            // But relying on parent_id append might be "good enough" if the input list is sorted? 
            // Lark 'list' API usually returns blocks in order of occurrence? No, not guaranteed.
            // Correct way: Use parent's `children` array to order valid childNodes.

            // For V1 simple approach: Just append to parent.
            // We'll sort later if needed, but usually Lark API returns depth-first traversal or similar.
            parent.childNodes.push(node);
        } else {
            rootNodes.push(node);
        }
    });

    // 3. Sort children based on the `children` array of the parent (if available) for strict order
    blockMap.forEach(node => {
        if (node.children && node.children.length > 0) {
            const childIdMap = new Map(node.childNodes.map(n => [n.block_id, n]));
            const sortedChildren: TreeNode[] = [];
            node.children.forEach(childId => {
                const child = childIdMap.get(childId);
                if (child) sortedChildren.push(child);
            });
            // Replace with sorted (filtering out any that weren't found in our block list)
            if (sortedChildren.length > 0) {
                node.childNodes = sortedChildren;
            }
        }
    });

    return rootNodes;
}

// --- Renderers ---

const TextRunRenderer = ({ elements }: { elements: any[] }) => {
    if (!elements) return null;
    return (
        <>
            {elements.map((el: any, index: number) => {
                const textRun = el.text_run;
                if (!textRun) return null;

                const style = textRun.text_element_style || {};
                let className = "text-gray-300";

                if (style.bold) className += " font-bold text-white";
                if (style.italic) className += " italic";
                if (style.underline) className += " underline underline-offset-4 decoration-[#c5a059]/50";
                if (style.strikethrough) className += " line-through opacity-70";

                if (style.link?.url) {
                    return (
                        <a key={index} href={decodeURIComponent(style.link.url)} target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline hover:text-[#e0b968] transition-colors">
                            {textRun.content}
                        </a>
                    );
                }

                return <span key={index} className={className}>{textRun.content}</span>;
            })}
        </>
    );
};

const NodeRenderer = ({ node }: { node: TreeNode }) => {
    const type = node.block_type;
    const children = node.childNodes.length > 0 ? (
        <div className="pl-4 border-l border-white/5 my-2">
            {node.childNodes.map(child => <NodeRenderer key={child.block_id} node={child} />)}
        </div>
    ) : null;

    // 1. Page Title (Root)
    if (type === 1) { // Page
        const elements = node.page?.elements || [];
        // We usually render the page title separately in the page layout, 
        // but if it's part of the renderer, we can render it or skip it.
        // Let's render it as the main H1.
        return (
            <div className="mb-8">
                {/* <h1 className="font-serif text-4xl text-[#c5a059] mb-6 border-b-2 border-[#c5a059] pb-4">
                     <TextRunRenderer elements={elements} />
                </h1> */}
                {/* Actually, user layout already has a title. Maybe we just render children? */}
                {node.childNodes.map(child => <NodeRenderer key={child.block_id} node={child} />)}
            </div>
        )
    }

    // 2. Text / Paragraph
    if (type === 2) {
        const elements = node.text?.elements || [];
        // If empty paragraph, maybe render a spacer?
        if (elements.length === 0) return <div className="h-4" />;
        return (
            <div className="mb-3 leading-relaxed text-gray-300">
                <p><TextRunRenderer elements={elements} /></p>
                {children}
            </div>
        );
    }

    // 3. Headings
    if (type === 3) { // H1
        const elements = node.heading1?.elements || [];
        return (
            <div className="mt-8 mb-4">
                <h1 className="font-serif text-3xl text-[#c5a059] border-b border-[#c5a059]/30 pb-2">
                    <TextRunRenderer elements={elements} />
                </h1>
                {children}
            </div>
        );
    }
    if (type === 4) { // H2
        const elements = node.heading2?.elements || [];
        return (
            <div className="mt-6 mb-3">
                <h2 className="font-serif text-2xl text-[#c5a059]/90">
                    <TextRunRenderer elements={elements} />
                </h2>
                {children}
            </div>
        );
    }
    if (type === 5) { // H3
        const elements = node.heading3?.elements || [];
        return (
            <div className="mt-4 mb-2">
                <h3 className="font-serif text-xl text-white font-medium">
                    <TextRunRenderer elements={elements} />
                </h3>
                {children}
            </div>
        );
    }

    // 4. Lists
    if (type === 34) { // Bullet
        const elements = node.bullet?.elements || [];
        return (
            <div className="flex gap-3 ml-2 mb-2">
                <span className="text-[#c5a059] mt-1.5 text-xs">●</span>
                <div className="flex-1">
                    <p className="leading-relaxed text-gray-300">
                        <TextRunRenderer elements={elements} />
                    </p>
                    {children}
                </div>
            </div>
        );
    }
    if (type === 12) { // Ordered
        const elements = node.ordered?.elements || [];
        // Note: Lark doesn't give us the number easily in the block itself without context.
        // We'll use a generic styling or CSS counters if we had a list container.
        // For simple rendering:
        return (
            <div className="flex gap-3 ml-2 mb-2">
                {/* <span className="text-[#c5a059] font-serif font-bold">1.</span> */}
                {/* Using a dot for now as simpler ordered handling requires state */}
                <span className="text-[#c5a059] font-serif font-bold">›</span>
                <div className="flex-1">
                    <p className="leading-relaxed text-gray-300">
                        <TextRunRenderer elements={elements} />
                    </p>
                    {children}
                </div>
            </div>
        );
    }

    // 5. Code Block
    if (type === 11 || type === 27) { // Code is often 27? Image is 11? 
        // Checking Lark API: 
        // 11 = Image
        // 27 = Code
    }

    if (type === 27) { // Code
        const content = node.code?.elements?.map((e: any) => e.text_run?.content).join('') || '';
        const language = node.code?.style?.language || 'text';
        return (
            <div className="my-4 rounded-lg bg-[#1a1a1a] border border-white/10 p-4 overflow-x-auto">
                <div className="text-xs text-gray-500 mb-2 font-mono uppercase">{language}</div>
                <pre className="font-mono text-sm text-gray-300">
                    {content}
                </pre>
                {children}
            </div>
        )
    }

    if (type === 11) { // Image
        // Image usually requires fetching a temporary URL via another API call using the 'token'.
        // For V1, we can't easily display it without a signed URL.
        // We'll show a placeholder.
        return (
            <div className="my-6 p-8 border border-dashed border-white/10 rounded-lg bg-white/5 flex flex-col items-center justify-center text-gray-500 gap-2">
                <span className="text-2xl">🖼️</span>
                <span className="text-sm italic">Image Block (Display requires signed URL generation)</span>
                {children}
            </div>
        )
    }

    if (type === 51) return null; // Ignore Subpage List

    // Default Fallback
    console.log(`Unrendered Block Type: ${type}`, node);
    // Try to find text content even if type unknown
    const fallbackText = node.text || node.paragraph; // Some types share structure
    if (fallbackText?.elements) {
        return (
            <div className="mb-2 text-gray-400">
                <p><TextRunRenderer elements={fallbackText.elements} /></p>
                {children}
            </div>
        )
    }

    return null;
};

// --- Main export ---

export const LarkDocRenderer = ({ blocks }: { blocks: LarkBlock[] }) => {
    if (!blocks || blocks.length === 0) return null;

    const tree = buildTree(blocks);

    return (
        <div className="lark-doc-content space-y-2">
            {tree.map(node => (
                <NodeRenderer key={node.block_id} node={node} />
            ))}
        </div>
    );
};
