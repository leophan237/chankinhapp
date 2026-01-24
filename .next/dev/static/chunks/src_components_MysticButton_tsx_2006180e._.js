(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MysticButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MysticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function MysticButton({ children, onClick, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: onClick,
        className: `
        relative h-12 px-8 rounded-lg font-sans text-base
        flex items-center justify-center cursor-pointer
        text-silver/70
        transition-all duration-500
        bg-gradient-to-br from-card to-background
        border border-silver/20
        ${className}
      `,
        style: {
            boxShadow: '-1px -5px 15px rgba(148, 163, 184, 0.1), 5px 5px 15px rgba(148, 163, 184, 0.1), inset 5px 5px 10px rgba(0, 0, 0, 0.3), inset -5px -5px 10px rgba(0, 0, 0, 0.3)'
        },
        whileHover: {
            boxShadow: '1px 1px 13px rgba(0, 0, 0, 0.4), -1px -1px 13px rgba(148, 163, 184, 0.15)',
            color: 'rgba(214, 214, 214, 1)',
            transition: {
                duration: 0.5
            }
        },
        whileTap: {
            boxShadow: '1px 1px 13px rgba(0, 0, 0, 0.4), -1px -1px 33px rgba(148, 163, 184, 0.2)',
            color: 'rgba(214, 214, 214, 1)',
            transition: {
                duration: 0.1
            }
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/MysticButton.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = MysticButton;
var _c;
__turbopack_context__.k.register(_c, "MysticButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_MysticButton_tsx_2006180e._.js.map