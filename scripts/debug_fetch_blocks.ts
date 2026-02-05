
import * as lark from '@larksuiteoapi/node-sdk'

const client = new lark.Client({
    appId: process.env.LARK_APP_ID || '',
    appSecret: process.env.LARK_APP_SECRET || '',
    domain: lark.Domain.Lark,
})

async function main() {
    try {
        const docId = 'KhhDdKJc3o45IFxbEDelKzXkgYf';
        console.log(`Fetching blocks for Document ID: ${docId}`);

        const response = await client.docx.documentBlock.list({
            path: {
                document_id: docId,
            },
            params: {
                page_size: 500,
            },
        })

        if (response.code === 0) {
            console.log(`Found ${response.data?.items?.length} blocks.`);
            // Print brief summary of block types
            response.data?.items?.forEach((b: any) => {
                console.log(`- ID: ${b.block_id}, Type: ${b.block_type}, Text: ${JSON.stringify(b.text?.elements?.map((e: any) => e.text_run?.content).join(''))}`);
            });

            // Dump full JSON for the first few blocks to analyze structure
            // console.log(JSON.stringify(response.data?.items?.slice(0, 5), null, 2));
        } else {
            console.error('Failed:', response.msg);
        }

    } catch (e) {
        console.error('ERROR:', e);
    }
}

main();
