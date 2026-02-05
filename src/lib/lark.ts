import * as lark from '@larksuiteoapi/node-sdk'

// Initialize Lark Client
const client = new lark.Client({
    appId: process.env.LARK_APP_ID || '',
    appSecret: process.env.LARK_APP_SECRET || '',
    appType: lark.AppType.SelfBuild,
    domain: lark.Domain.Lark,
})

export interface LarkBlock {
    block_id?: string
    block_type?: number
    parent_id?: string
    children?: string[]
    text?: any
    [key: string]: any
}

/**
 * Fetches the content blocks from a Lark document
 * @param documentId - The ID of the Lark document
 * @returns Array of document blocks
 */
export async function getLarkDocContent(documentId: string): Promise<LarkBlock[]> {
    try {
        const response = await client.docx.documentBlock.list({
            path: {
                document_id: documentId,
            },
            params: {
                page_size: 500, // Fetch up to 500 blocks at once
            },
        })

        if (response.code !== 0) {
            throw new Error(`Failed to fetch Lark document: ${response.msg}`)
        }

        return (response.data?.items || []) as LarkBlock[]
    } catch (error) {
        console.error('Error fetching Lark document content:', error)
        throw error
    }
}

/**
 * Get the Lark client instance for advanced operations
 */
export function getLarkClient() {
    return client
}
