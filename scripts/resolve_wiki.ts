
import * as lark from '@larksuiteoapi/node-sdk'

const client = new lark.Client({
    appId: process.env.LARK_APP_ID || '',
    appSecret: process.env.LARK_APP_SECRET || '',
    domain: lark.Domain.Lark,
})

async function main() {
    try {
        const token = 'QvvjwST9MigeKQkH7I3lyenRglh';
        console.log(`Resolving Wiki Token: ${token}`);

        // Direct API call to get_node
        // Endpoint: /open-apis/wiki/v2/spaces/get_node
        const res = await client.request({
            method: 'GET',
            url: `/open-apis/wiki/v2/spaces/get_node`,
            params: {
                token: token
            }
        });

        console.log("Response Code:", res.code); // Note: client.request returns slightly different structure? 
        // SDK request returns { code, msg, data, ... } usually

        // @ts-ignore
        if (res.code === 0) {
            // @ts-ignore
            const node = res.data?.node;
            console.log('SUCCESS!');
            console.log('OBJ TYPE:', node?.obj_type);
            console.log('OBJ TOKEN:', node?.obj_token);
        } else {
            // @ts-ignore
            console.error('FAILED:', res.msg, res.error);
            console.log(JSON.stringify(res, null, 2));
        }

    } catch (e) {
        console.error('ERROR:', e);
    }
}

main();
