module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/template.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/template.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/sanity/env.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId,
    "useCdn",
    ()=>useCdn
]);
const apiVersion = ("TURBOPACK compile-time value", "2024-01-24") || '2024-01-24';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "cshuamqt"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
const useCdn = false;
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
}),
"[project]/src/sanity/lib/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client,
    "token",
    ()=>token
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/env.ts [app-rsc] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiVersion"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dataset"],
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectId"],
    useCdn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCdn"],
    stega: {
        enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
        studioUrl: '/studio'
    }
});
const token = process.env.SANITY_API_READ_TOKEN;
}),
"[project]/src/sanity/lib/fetch.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanityFetch",
    ()=>sanityFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/client.ts [app-rsc] (ecmascript)");
;
;
;
;
async function sanityFetch({ query, params = {}, revalidate = 3600, tags = [] }) {
    const isDraftMode = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["draftMode"])()).isEnabled;
    if (isDraftMode && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["token"]) {
        throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.');
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectId"],
        dataset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dataset"],
        apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiVersion"],
        useCdn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCdn"],
        stega: {
            enabled: isDraftMode,
            studioUrl: '/studio'
        }
    });
    return client.fetch(query, params, {
        ...isDraftMode && {
            token: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["token"],
            perspective: 'previewDrafts'
        },
        next: {
            revalidate: isDraftMode ? 0 : revalidate,
            tags
        }
    });
}
}),
"[project]/src/components/feed/LibraryClientView.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/feed/LibraryClientView.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/feed/LibraryClientView.tsx <module evaluation>", "default");
}),
"[project]/src/components/feed/LibraryClientView.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/feed/LibraryClientView.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/feed/LibraryClientView.tsx", "default");
}),
"[project]/src/components/feed/LibraryClientView.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feed$2f$LibraryClientView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/feed/LibraryClientView.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feed$2f$LibraryClientView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/feed/LibraryClientView.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feed$2f$LibraryClientView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/mockData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_POSTS",
    ()=>MOCK_POSTS
]);
const MOCK_POSTS = [
    // --- EARTH (ĐẤT) ---
    {
        _id: 'earth-1',
        title: 'Cơ Chế Vận Hành SPV Trong Cấu Trúc Holdings',
        slug: {
            current: 'co-che-van-hanh-spv'
        },
        excerpt: 'Tìm hiểu cách thiết lập các công ty mục đích đặc biệt (SPV) để bảo vệ tài sản cốt lõi và tối ưu hóa dòng tiền trong hệ sinh thái doanh nghiệp.',
        description: 'Pháp lý là móng, vận hành là gạch. Một cấu trúc SPV chuẩn chỉnh giúp doanh nghiệp đứng vững trước mọi sóng gió thị trường.',
        element: 'earth',
        publishedAt: '2025-01-10T08:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Trong quản trị doanh nghiệp hiện đại, mô hình Holdings - SPV không còn là khái niệm xa lạ. Tuy nhiên, để vận hành nó hiệu quả như "Đất" - vững chãi và màu mỡ - cần một sự am hiểu sâu sắc về luật pháp và tài chính.'
                    }
                ]
            },
            {
                _key: '2',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Bước 1: Xác định mục tiêu của SPV. Bước 2: Thiết lập cơ chế kiểm soát từ công ty mẹ. Bước 3: Đảm bảo tính độc lập về pháp lý.'
                    }
                ]
            }
        ]
    },
    {
        _id: 'earth-2',
        title: 'Địa Vững: Tư Duy Xây Dựng Nền Tảng Nhân Sự',
        slug: {
            current: 'dia-vung-nhan-su'
        },
        excerpt: 'Nhân sự là gốc rễ của tổ chức. Làm thế nào để tuyển dụng và giữ chân những người có cùng hệ giá trị "tỉnh thức"?',
        description: 'Xây dựng đội ngũ không chỉ là trả lương, mà là nuôi dưỡng một môi trường nơi mỗi cá nhân đều cảm thấy mình là một phần của đại địa.',
        element: 'earth',
        publishedAt: '2025-01-12T09:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Một doanh nghiệp mạnh bắt đầu từ những cá nhân có nền tảng đạo đức và năng lực vững chắc. Tại Chân Kinh, chúng tôi tin rằng "tâm an thì trí sáng".'
                    }
                ]
            }
        ]
    },
    {
        _id: 'earth-3',
        title: 'Kỷ Luật Sắt: Quy Trình Vận Hành Tiêu Chuẩn (SOP)',
        slug: {
            current: 'ky-luat-sat-sop'
        },
        excerpt: 'Tự động hóa doanh nghiệp bắt đầu từ việc chuẩn hóa mọi quy trình. SOP chính là bản đồ để con tàu vận hành không cần thuyền trưởng.',
        description: 'Khi mọi thứ được đưa vào quy trình, doanh nghiệp sẽ vận hành ổn định như chuyển động của địa cầu.',
        element: 'earth',
        publishedAt: '2025-01-15T10:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Đừng để doanh nghiệp phụ thuộc vào sự xuất sắc của cá nhân. Hãy để nó phụ thuộc vào sự xuất sắc của quy trình.'
                    }
                ]
            }
        ]
    },
    // --- WATER (NƯỚC) ---
    {
        _id: 'water-1',
        title: 'Quản Trị Dòng Tiền: Hơi Thở Của Doanh Nghiệp',
        slug: {
            current: 'quan-tri-dong-tien'
        },
        excerpt: 'Tiền mặt là máu. Cách luân chuyển dòng vốn để doanh nghiệp luôn tươi trẻ và sẵn sàng cho các cơ hội đột phá.',
        description: 'Hãy để dòng tiền chảy như nước, không tắc nghẽn, không lãng phí, luôn hướng về đại dương thành công.',
        element: 'water',
        publishedAt: '2025-01-18T08:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Trong kinh doanh, lợi nhuận là ý kiến, nhưng tiền mặt là thực tế. Bài viết này hướng dẫn bạn cách tối ưu chu kỳ tiền mặt.'
                    }
                ]
            }
        ]
    },
    {
        _id: 'water-2',
        title: 'Thích Nghi: Nghệ Thuật Xoay Trục Trong Khủng Hoảng',
        slug: {
            current: 'thich-nghi-xoay-truc'
        },
        excerpt: 'Khi thị trường thay đổi, kẻ mạnh nhất không phải kẻ to nhất, mà là kẻ nhanh nhất và linh hoạt nhất.',
        description: 'Nước tùy vật mà định hình. Doanh nghiệp cần học cách thay đổi hình dạng để vượt qua mọi chướng ngại vật.',
        element: 'water',
        publishedAt: '2025-01-20T09:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Nhìn vào cách các tập đoàn lớn đã "thay da đổi thịt" để tồn tại qua các cuộc khủng hoảng kinh tế toàn cầu.'
                    }
                ]
            }
        ]
    },
    {
        _id: 'water-3',
        title: 'Văn Hóa Sẻ Chia: Xây Dựng Cộng Đồng Kết Nối',
        slug: {
            current: 'van-hoa-se-chia'
        },
        excerpt: 'Làm thế nào để tạo ra một dòng chảy tri thức xuyên suốt trong tổ chức, nơi mọi người đều sẵn lòng hỗ trợ lẫn nhau?',
        description: 'Kết nối là sức mạnh của nước. Những giọt nước li ti khi hợp lại sẽ tạo nên cơn sóng thần mãnh liệt.',
        element: 'water',
        publishedAt: '2025-01-22T10:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Văn hóa doanh nghiệp không phải là những khẩu hiệu treo trên tường, mà là cách chúng ta tương tác với nhau hàng ngày.'
                    }
                ]
            }
        ]
    },
    // --- FIRE (LỬA) ---
    {
        _id: 'fire-1',
        title: 'Branding Aggressive: Chiếm Lĩnh Tâm Trí Khách Hàng',
        slug: {
            current: 'branding-aggressive'
        },
        excerpt: 'Chiến lược marketing tấn công mạnh mẽ để xác lập vị thế dẫn đầu trong thời gian ngắn nhất.',
        description: 'Thương hiệu của bạn phải là ngọn đuốc cháy sáng nhất, dẫn đường cho khách hàng giữa rừng đối thủ.',
        element: 'fire',
        publishedAt: '2025-01-25T08:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Tấn công vào cảm xúc, thiết lập sự trung thành tuyệt đối. Lửa marketing cần được tiếp nhiên liệu bằng sự sáng tạo không ngừng.'
                    }
                ]
            }
        ]
    },
    {
        _id: 'fire-2',
        title: 'Đội Ngũ Bán Hàng: Những Chiến Binh Thực Thụ',
        slug: {
            current: 'chien-binh-sales'
        },
        excerpt: 'Cách truyền lửa và duy trì nhiệt huyết cho đội ngũ kinh doanh để đạt được những mục tiêu "không tưởng".',
        description: 'Biến mỗi nhân viên sales thành một ngọn lửa nhỏ, cùng nhau thiêu cháy mọi rào cản ngăn cách với doanh số.',
        element: 'fire',
        publishedAt: '2025-01-27T09:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Kỹ năng là quan trọng, nhưng thái độ và tinh thần chiến binh mới là yếu tố quyết định sự bùng nổ.'
                    }
                ]
            }
        ]
    },
    {
        _id: 'fire-3',
        title: 'Đột Phá Công Nghệ: Ánh Sáng Của Tương Lai',
        slug: {
            current: 'dot-pha-cong-nghe'
        },
        excerpt: 'Ứng dụng AI và chuyển đổi số để tạo ra lợi thế cạnh tranh mang tính hủy diệt đối với các mô hình cũ.',
        description: 'Công nghệ là ngọn lửa Prométhée giúp doanh nghiệp nâng tầm từ hữu hình lên vô tướng.',
        element: 'fire',
        publishedAt: '2025-01-29T10:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Nếu không tự mình "đốt" đi những mô hình cũ, bạn sẽ bị ngọn lửa của thị trường thiêu rụi.'
                    }
                ]
            }
        ]
    },
    // --- AIR (KHÍ) ---
    {
        _id: 'air-1',
        title: 'Tốc Độ Là Vũ Khí: Tối Ưu Hóa Thời Gian Phản Hồi',
        slug: {
            current: 'toc-do-vu-khi'
        },
        excerpt: 'Trong kỷ nguyên số, nhanh không phải là tất cả, nhưng chậm chắc chắn là cái chết.',
        description: 'Vận hành doanh nghiệp nhẹ nhàng như gió nhưng với tốc độ của cơn bão để thâu tóm cơ hội.',
        element: 'air',
        publishedAt: '2025-02-01T08:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Làm thế nào để loại bỏ các tầng nấc trung gian, giúp thông tin và quyết định luân chuyển không ma sát?'
                    }
                ]
            }
        ]
    },
    {
        _id: 'air-2',
        title: 'Nghệ Thuật Lắng Nghe Thị Trường (Social Listening)',
        slug: {
            current: 'lang-nghe-thi-truong'
        },
        excerpt: 'Hiểu thấu những gì khách hàng không nói ra thông qua việc phân tích hành vi và xu hướng thầm lặng.',
        description: 'Gió mang theo hơi thở của vạn vật. Nhà lãnh đạo thông thái là người biết nghe tiếng gió để đoán định tương lai.',
        element: 'air',
        publishedAt: '2025-02-03T09:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Dữ liệu không biết nói dối, nhưng chỉ những ai biết "lắng nghe" mới thấy được sự thật phía sau những con số.'
                    }
                ]
            }
        ]
    },
    {
        _id: 'air-3',
        title: 'Truyền Thông Chân Thật: Tiếng Nói Từ Tâm',
        slug: {
            current: 'truyen-thong-chan-that'
        },
        excerpt: 'Làm sao để thông điệp của bạn lan tỏa mà không cần dùng đến những chiêu trò hào nhoáng?',
        description: 'Sự thật có sức lan tỏa tự nhiên như không khí. Một khi bạn nói bằng tâm, cả thế giới sẽ lắng nghe.',
        element: 'air',
        publishedAt: '2025-02-05T10:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Khách hàng ngày nay rất nhạy bén. Họ sẽ cảm nhận được ngay lập tức nếu bạn thiếu sự chân thành.'
                    }
                ]
            }
        ]
    },
    // --- VOID (KHÔNG) ---
    {
        _id: 'void-1',
        title: 'Biết Cái Có Để Thấy Cái Không: Triết Lý Đạo Kinh',
        slug: {
            current: 'biet-co-thay-khong'
        },
        excerpt: 'Vượt lên trên những tài sản hữu hình để xây dựng giá trị vô hình trường tồn cho doanh nghiệp.',
        description: 'Đỉnh cao của sự trị vì là "vô vi". Khi mọi thứ hòa nhập vào cái Không, sức mạnh sẽ trở nên vô hạn.',
        element: 'void',
        publishedAt: '2025-02-08T08:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Cái nhà chỉ dùng được nhờ những khoảng không giữa các bức tường. Doanh nghiệp cũng vậy, giá trị lớn nhất nằm ở những gì không thể chạm tới.'
                    }
                ]
            }
        ]
    },
    {
        _id: 'void-2',
        title: 'Tâm Thế Lãnh Đạo Tỉnh Thức',
        slug: {
            current: 'lanh-dao-tinh-thuc'
        },
        excerpt: 'Rèn luyện khả năng quan sát mà không phán xét, hành động mà không bám víu vào kết quả.',
        description: 'Nhìn thấu bản chất của hư vô để đưa ra những quyết định sáng suốt nhất giữa muôn vàn hỗn độn.',
        element: 'void',
        publishedAt: '2025-02-10T09:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Lãnh đạo không phải là quyền lực, mà là sự hiện diện thuần khiết giúp mọi người xung quanh tỏa sáng.'
                    }
                ]
            }
        ]
    },
    {
        _id: 'void-3',
        title: 'Vô Tướng: Thương Hiệu Trong Tâm Tưởng',
        slug: {
            current: 'thuong-hieu-vo-tuong'
        },
        excerpt: 'Khi thương hiệu không còn là một cái tên, mà trở thành một hệ tư tưởng, một lối sống.',
        description: 'Cái Không chứa đựng tất cả. Một thương hiệu vô tướng là một thương hiệu hiện diện ở khắp mọi nơi.',
        element: 'void',
        publishedAt: '2025-02-12T10:00:00Z',
        content: [
            {
                _key: '1',
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Mục tiêu cuối cùng là sự giải thoát khỏi những khuôn mẫu định sẵn, để tự do sáng tạo và cống hiến.'
                    }
                ]
            }
        ]
    }
];
}),
"[project]/src/app/kinh-cac/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KinhCacPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sanity/lib/fetch.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__ = __turbopack_context__.i("[project]/node_modules/groq/lib/groq.js [app-rsc] (ecmascript) <export default as groq>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feed$2f$LibraryClientView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/feed/LibraryClientView.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockData.ts [app-rsc] (ecmascript)");
;
;
;
;
;
async function getPosts() {
    const query = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$groq$2f$lib$2f$groq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__groq$3e$__["groq"]`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    element,
    description,
    publishedAt,
    mainImage
  }`;
    try {
        const sanityData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sanity$2f$lib$2f$fetch$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanityFetch"])({
            query,
            tags: [
                'post'
            ]
        });
        return sanityData || [];
    } catch (error) {
        console.error("Failed to fetch posts from Sanity:", error);
        return [];
    }
}
async function KinhCacPage() {
    const sanityPosts = await getPosts();
    // Merge Sanity posts with Mock posts
    const allPosts = [
        ...sanityPosts || []
    ];
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_POSTS"].forEach((mock)=>{
        if (!allPosts.some((p)=>p._id === mock._id)) {
            allPosts.push(mock);
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$feed$2f$LibraryClientView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        initialPosts: allPosts
    }, void 0, false, {
        fileName: "[project]/src/app/kinh-cac/page.tsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/kinh-cac/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/kinh-cac/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ed1a9b11._.js.map