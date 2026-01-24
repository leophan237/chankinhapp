(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/kinh-cac/[slug]/post-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Mock data for demo posts - all 15 posts
const mockPosts = {
    'xay-dung-cau-truc-phap-ly': {
        _id: 'earth-1',
        title: 'Xây Dựng Cấu Trúc Pháp Lý Ngay Từ Ngày Đầu (Day 1 XCAP)',
        slug: {
            current: 'xay-dung-cau-truc-phap-ly'
        },
        excerpt: 'Không có kỹ thuật nào hiệu quả nếu thế đứng không vững. Cấu trúc pháp lý Holdings, SPV và mô hình kinh doanh chuẩn chỉnh là nền tảng bắt buộc.',
        category: 'earth',
        element: 'earth',
        publishedAt: '2025-01-15T00:00:00Z',
        readTime: 8,
        tags: [
            'Day 1 XCAP',
            'Pháp lý',
            'Holdco',
            'SPV'
        ],
        content: [
            {
                _type: 'heading',
                _key: 'heading1',
                level: 1,
                text: 'Nguyên tắc cơ bản'
            },
            {
                _type: 'block',
                _key: 'intro',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Trong kinh doanh, có một nguyên tắc bất biến: nền tảng phải vững chắc. Nếu không có cấu trúc pháp lý chặt chẽ, mọi kỹ thuật kinh doanh, mọi chiến lược marketing, mọi tài năng nhân sự đều vô nghĩa.'
                    },
                    {
                        _type: 'span',
                        marks: [
                            'strong'
                        ],
                        text: ' Không có kỹ thuật nào hiệu quả nếu thế đứng không vững.'
                    }
                ]
            },
            {
                _type: 'heading',
                _key: 'heading2',
                level: 2,
                text: 'Day 1 XCAP'
            },
            {
                _type: 'block',
                _key: 'day1',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Day 1 của XCAP (Xây Dựng Chân Kinh) bắt đầu từ đây: thiết lập cấu trúc pháp lý đúng ngay từ ngày đầu tiên.'
                    }
                ]
            },
            {
                _type: 'callout',
                _key: 'callout1',
                tone: 'info',
                emoji: '📋',
                title: 'Ba thành phần pháp lý cốt lõi',
                content: [
                    {
                        _type: 'list',
                        style: 'bullet',
                        children: [
                            {
                                _type: 'listItem',
                                text: 'Holdings: Là công ty mẹ nắm giữ các đơn vị kinh doanh riêng biệt'
                            },
                            {
                                _type: 'listItem',
                                text: 'SPV (Special Purpose Vehicle): Công ty đặc mục đích cho từng dự án/vertical'
                            },
                            {
                                _type: 'listItem',
                                text: 'Mô hình kinh doanh chuẩn: SOPS, quy trình, hệ thống'
                            }
                        ]
                    }
                ]
            },
            {
                _type: 'callout',
                _key: 'warning',
                tone: 'warning',
                emoji: '⚠️',
                title: 'Lưu ý quan trọng',
                content: [
                    {
                        _type: 'block',
                        children: [
                            {
                                _type: 'span',
                                text: 'Nếu "Địa" không vững (pháp lý lỏng lẻo), doanh nghiệp sẽ sụp đổ khi quy mô tăng. Lịch sử đã chứng minh điều này nhiều lần.'
                            }
                        ]
                    }
                ]
            },
            {
                _type: 'heading',
                _key: 'heading3',
                level: 2,
                text: 'Kết luận'
            },
            {
                _type: 'quote',
                _key: 'quote1',
                style: 'highlighted',
                text: 'Cấu trúc pháp lý đúng là nền tảng để scale. Đừng tiếc thời gian và chi phí cho bước này.'
            }
        ]
    },
    'nguyen-tac-vung-chac': {
        _id: 'earth-2',
        title: 'Nguyên Tắc Vững Chắc: Khi Pháp Lý Lỏng Lẻo, Doanh Nghiệp Sập Đổ',
        slug: {
            current: 'nguyen-tac-vung-chac'
        },
        excerpt: 'Lịch sử đã chứng minh: doanh nghiệp có cấu trúc pháp lý yếu kém sẽ sụp đổ khi quy mô tăng. Bài học từ những thất bại đắt giá.',
        category: 'earth',
        element: 'earth',
        publishedAt: '2025-01-10T00:00:00Z',
        readTime: 7,
        tags: [
            'Pháp lý',
            'Cấu trúc doanh nghiệp'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'Cảnh báo từ thực tế'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Lịch sử đã chứng minh: doanh nghiệp có cấu trúc pháp lý yếu kém sẽ sụp đổ khi quy mô tăng. Bài học từ những thất bại đắt giá.'
                    }
                ]
            },
            {
                _type: 'callout',
                tone: 'warning',
                emoji: '⚠️',
                title: 'Bài học từ thất bại',
                content: [
                    {
                        _type: 'list',
                        style: 'bullet',
                        children: [
                            {
                                _type: 'listItem',
                                text: 'Cấu trúc pháp lý lỏng lẻo dẫn đến rủi ro cao khi scale'
                            },
                            {
                                _type: 'listItem',
                                text: 'Thiếu sự tách biệt giữa các vertical khiến rủi ro lan rộng'
                            },
                            {
                                _type: 'listItem',
                                text: 'Bảo vệ nhà đầu tư không đầy đủ'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'holdco-spc-chieu-luoc': {
        _id: 'earth-3',
        title: 'Mô Hình Holdco-SPC: Chiến Lược Tối Ưu Cho Venture Studio',
        slug: {
            current: 'holdco-spc-chieu-luoc'
        },
        excerpt: 'Cách thiết kế cấu trúc công ty để bảo vệ nhà đầu tư, tối ưu thuế, và tạo điều kiện mở rộng linh hoạt cho từng vertical.',
        category: 'earth',
        element: 'earth',
        publishedAt: '2025-01-05T00:00:00Z',
        readTime: 9,
        tags: [
            'Holdco',
            'SPV',
            'Venture Studio'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'Cấu trúc Holdco-SPV'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Cách thiết kế cấu trúc công ty để bảo vệ nhà đầu tư, tối ưu thuế, và tạo điều kiện mở rộng linh hoạt cho từng vertical.'
                    }
                ]
            },
            {
                _type: 'heading',
                level: 2,
                text: 'Lợi ích của mô hình'
            },
            {
                _type: 'list',
                style: 'bullet',
                children: [
                    {
                        _type: 'listItem',
                        text: 'Bảo vệ rủi ro: Mỗi SPV chịu trách nhiệm riêng'
                    },
                    {
                        _type: 'listItem',
                        text: 'Tối ưu thuế: Chuyển giá giữa các entity'
                    },
                    {
                        _type: 'listItem',
                        text: 'Dễ scale: Thêm SPV mới cho từng vertical'
                    }
                ]
            }
        ]
    },
    'tam-chien-binh-nhu-nuoc': {
        _id: 'water-1',
        title: 'Tâm Chiến Binh Như Nước: Linh Hoạt, Phản Chiếu, Không Dính Mắc',
        slug: {
            current: 'tam-chien-binh-nhu-nuoc'
        },
        excerpt: 'Nước tùy vật mà định hình. Trong kinh doanh, khả năng thích nghi và xoay trục nhanh hơn đối thủ là chiến lược sống còn.',
        category: 'water',
        element: 'water',
        publishedAt: '2025-01-18T00:00:00Z',
        readTime: 6,
        tags: [
            'Tâm chiến binh',
            'Linh hoạt',
            'Pivot'
        ],
        content: [
            {
                _type: 'heading',
                _key: 'heading1',
                level: 1,
                text: 'Triết lý của nước'
            },
            {
                _type: 'block',
                _key: 'intro',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Trong Tôn Tử nói về nước: '
                    },
                    {
                        _type: 'span',
                        marks: [
                            'em'
                        ],
                        text: '"Thượng thiện như nước."'
                    },
                    {
                        _type: 'span',
                        marks: [],
                        text: ' Nước là tấm gương hoàn hảo của linh hoạt trong kinh doanh.'
                    }
                ]
            },
            {
                _type: 'heading',
                _key: 'heading2',
                level: 2,
                text: 'Nguyên tắc linh hoạt'
            },
            {
                _type: 'quote',
                _key: 'quote1',
                style: 'highlighted',
                text: 'Tâm chiến binh phải như nước, phản chiếu tất cả nhưng không bị dính mắc.',
                attribution: 'Nguyên tắc linh hoạt'
            }
        ]
    },
    'quan-tri-dong-tien-linh-hoat': {
        _id: 'water-2',
        title: 'Quản Trị Dòng Tiền Linh Hoạt Khi Thị Trường Đóng Băng',
        slug: {
            current: 'quan-tri-dong-tien-linh-hoat'
        },
        excerpt: 'Khi BĐS đóng băng, dòng vốn phải chảy. Chiến lược pivot từ bất động sản sang dịch vụ và sản xuất để duy trì cash flow.',
        category: 'water',
        element: 'water',
        publishedAt: '2025-01-12T00:00:00Z',
        readTime: 8,
        tags: [
            'Dòng tiền',
            'Pivot',
            'Cash flow'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'Quản trị dòng tiền linh hoạt'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Khi BĐS đóng băng, dòng vốn phải chảy. Chiến lược pivot từ bất động sản sang dịch vụ và sản xuất để duy trì cash flow.'
                    }
                ]
            },
            {
                _type: 'callout',
                tone: 'info',
                emoji: '💰',
                title: 'Chiến lược dòng tiền',
                content: [
                    {
                        _type: 'list',
                        style: 'bullet',
                        children: [
                            {
                                _type: 'listItem',
                                text: 'Đa dạng hóa nguồn thu'
                            },
                            {
                                _type: 'listItem',
                                text: 'Tối ưu vòng quay vốn'
                            },
                            {
                                _type: 'listItem',
                                text: 'Giảm phụ thuộc vào single vertical'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'khong-co-chap-kiem-tien': {
        _id: 'water-3',
        title: 'Không Cố Chấp Với Một Phương Thức Kiếm Tiền',
        slug: {
            current: 'khong-co-chap-kiem-tien'
        },
        excerpt: 'Doanh nghiệp bền vững hiểu rằng kiếm tiền có nhiều cách. Đa dạng hóa nguồn thu và linh hoạt trong chiến lược doanh thu.',
        category: 'water',
        element: 'water',
        publishedAt: '2025-01-08T00:00:00Z',
        readTime: 5,
        tags: [
            'Doanh thu',
            'Đa dạng hóa'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'Đa dạng hóa doanh thu'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Doanh nghiệp bền vững hiểu rằng kiếm tiền có nhiều cách. Đa dạng hóa nguồn thu và linh hoạt trong chiến lược doanh thu.'
                    }
                ]
            },
            {
                _type: 'heading',
                level: 2,
                text: 'Các phương thức kiếm tiền'
            },
            {
                _type: 'list',
                style: 'bullet',
                children: [
                    {
                        _type: 'listItem',
                        text: 'Sản phẩm: Bán hàng vật lý/digital'
                    },
                    {
                        _type: 'listItem',
                        text: 'Dịch vụ: Tư vấn, triển khai'
                    },
                    {
                        _type: 'listItem',
                        text: 'Platform: Kết nối người mua người bán'
                    },
                    {
                        _type: 'listItem',
                        text: 'Data: Bán dữ liệu, insights'
                    }
                ]
            }
        ]
    },
    'go-to-market-aggressive': {
        _id: 'fire-1',
        title: 'Chiến Lược Chiếm Lĩnh Thị Trường: Go-to-Market Aggressive',
        slug: {
            current: 'go-to-market-aggressive'
        },
        excerpt: 'Tấn công vào điểm yếu của đối thủ. Sử dụng đòn bẩy marketing để bùng nổ doanh số và định vị thương hiệu ngay từ đầu (Day 2 XCAP).',
        category: 'fire',
        element: 'fire',
        publishedAt: '2025-01-20T00:00:00Z',
        readTime: 7,
        tags: [
            'Go-to-market',
            'Marketing',
            'Day 2 XCAP'
        ],
        content: [
            {
                _type: 'heading',
                _key: 'heading1',
                level: 1,
                text: 'Tư duy chiến đấu'
            },
            {
                _type: 'block',
                _key: 'intro',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Chiến đấu là phải thắng. Trong kinh doanh, điều đó có nghĩa là '
                    },
                    {
                        _type: 'span',
                        marks: [
                            'strong'
                        ],
                        text: 'chiếm lĩnh thị trường nhanh hơn đối thủ.'
                    }
                ]
            },
            {
                _type: 'heading',
                _key: 'heading2',
                level: 2,
                text: 'Chiến lược Go-to-market'
            },
            {
                _type: 'quote',
                _key: 'quote1',
                style: 'highlighted',
                text: 'Tấn công vào điểm yếu của đối thủ. Sử dụng các đòn bẩy marketing để bùng nổ doanh số và định vị thương hiệu.',
                attribution: 'Chiến lược go-to-market'
            },
            {
                _type: 'callout',
                _key: 'callout1',
                tone: 'important',
                emoji: '🎯',
                title: 'Day 2 XCAP',
                content: [
                    {
                        _type: 'block',
                        children: [
                            {
                                _type: 'span',
                                marks: [],
                                text: 'Sau khi xây dựng nền tảng pháp lý, ngay lập tức triển khai chiến lược chiếm lĩnh thị trường.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'tam-nhin-quyet-liet': {
        _id: 'fire-2',
        title: 'Tầm Nhìn Quyết Liệt: Khi Chiến Đấu Là Phải Thắng',
        slug: {
            current: 'tam-nhin-quyet-liet'
        },
        excerpt: 'Trong kinh doanh, quyết liệt không phải là hung hăng. Đó là sự dám ra quyết định khó, chấp nhận rủi ro tính toán để đạt mục tiêu.',
        category: 'fire',
        element: 'fire',
        publishedAt: '2025-01-16T00:00:00Z',
        readTime: 6,
        tags: [
            'Quyết liệt',
            'Ra quyết định'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'Tầm nhìn quyết liệt'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Trong kinh doanh, quyết liệt không phải là hung hăng. Đó là sự dám ra quyết định khó, chấp nhận rủi ro tính toán để đạt mục tiêu.'
                    }
                ]
            },
            {
                _type: 'heading',
                level: 2,
                text: 'Quyết định khó'
            },
            {
                _type: 'callout',
                tone: 'warning',
                emoji: '⚡',
                title: 'Ví dụ quyết định khó',
                content: [
                    {
                        _type: 'list',
                        style: 'bullet',
                        children: [
                            {
                                _type: 'listItem',
                                text: 'Từ bỏ direction không còn phù hợp'
                            },
                            {
                                _type: 'listItem',
                                text: 'Cắt lỗ khi thấy không có tương lai'
                            },
                            {
                                _type: 'listItem',
                                text: 'Chấp nhận mất ngắn hạn để thắng dài hạn'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'don-bay-marketing': {
        _id: 'fire-3',
        title: 'Đòn Bẩy Marketing: Tối Ưu ROI Để Bùng Nổ Doanh Số',
        slug: {
            current: 'don-bay-marketing'
        },
        excerpt: 'Chiến thuật tạo hiệu ứng nổ đom đóm: bắt đầu nhỏ, tìm traction, scale nhanh. Quy trình bootstrapping marketing budget.',
        category: 'fire',
        element: 'fire',
        publishedAt: '2025-01-11T00:00:00Z',
        readTime: 8,
        tags: [
            'Marketing',
            'ROI',
            'Scale'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'Đòn bẩy marketing'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Chiến thuật tạo hiệu ứng nổ đom đóm: bắt đầu nhỏ, tìm traction, scale nhanh. Quy trình bootstrapping marketing budget.'
                    }
                ]
            },
            {
                _type: 'heading',
                level: 2,
                text: 'Quy trình tối ưu ROI'
            },
            {
                _type: 'list',
                style: 'numbered',
                children: [
                    {
                        _type: 'listItem',
                        text: 'Bắt đầu nhỏ: Test MVP'
                    },
                    {
                        _type: 'listItem',
                        text: 'Tìm traction: Phân tích dữ liệu'
                    },
                    {
                        _type: 'listItem',
                        text: 'Scale nhanh: Tăng budget khi có kết quả'
                    }
                ]
            }
        ]
    },
    'hieu-phong-cach-truong-phai': {
        _id: 'air-1',
        title: 'Hiểu Phong Cách Các Trường Phái Khác Để Khắc Chế',
        slug: {
            current: 'hieu-phong-cach-truong-phai'
        },
        excerpt: 'Biết phong cách của đối thủ để khắc chế. Đối thủ cồng kềnh chậm chạp thì dùng tốc độ; đối thủ nhanh hung hăng thì dùng chiều sâu.',
        category: 'air',
        element: 'air',
        publishedAt: '2025-01-22T00:00:00Z',
        readTime: 9,
        tags: [
            'Cạnh tranh',
            'M&A',
            'Venture Studio'
        ],
        content: [
            {
                _type: 'heading',
                _key: 'heading1',
                level: 1,
                text: 'Tư duy cạnh tranh'
            },
            {
                _type: 'block',
                _key: 'intro',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Trong võ thuật, mỗi trường phái đều có phong cách riêng. Trong kinh doanh cũng vậy. '
                    },
                    {
                        _type: 'span',
                        marks: [
                            'strong'
                        ],
                        text: 'Hiểu phong cách đối thủ để biết cách khắc chế.'
                    }
                ]
            },
            {
                _type: 'heading',
                _key: 'heading2',
                level: 2,
                text: 'Phân tích đối thủ'
            },
            {
                _type: 'quote',
                _key: 'quote1',
                style: 'highlighted',
                text: 'Hiểu rõ điểm yếu của các đối thủ truyền thống (cồng kềnh, chậm chạp) để sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) mà thâu tóm hoặc vượt mặt.',
                attribution: 'Chiến lược cạnh tranh'
            }
        ]
    },
    'ma-chien-thuat': {
        _id: 'air-2',
        title: 'M&A Chiến Thuật: Thâu Tóm Hoặc Vượt Mặt Đối Thủ',
        slug: {
            current: 'ma-chien-thuat'
        },
        excerpt: 'Sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) để thâu tóm hoặc vượt mặt các đối thủ truyền thống.',
        category: 'air',
        element: 'air',
        publishedAt: '2025-01-19T00:00:00Z',
        readTime: 7,
        tags: [
            'M&A',
            'Thâu tóm',
            'Venture Studio'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'M&A chiến thuật'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) để thâu tóm hoặc vượt mặt các đối thủ truyền thống.'
                    }
                ]
            },
            {
                _type: 'heading',
                level: 2,
                text: 'Chiến thuật thâu tóm'
            },
            {
                _type: 'callout',
                tone: 'info',
                emoji: '🎯',
                title: 'Các chiến thuật',
                content: [
                    {
                        _type: 'list',
                        style: 'bullet',
                        children: [
                            {
                                _type: 'listItem',
                                text: 'Thâu tóm khi đối thủ suy yếu'
                            },
                            {
                                _type: 'listItem',
                                text: 'Vượt mặt bằng speed execution'
                            },
                            {
                                _type: 'listItem',
                                text: 'Tạo thị trường mới (blue ocean)'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'chien-luoc-kac-che': {
        _id: 'air-3',
        title: 'Chiến Lược Khắc Chế: Tìm Điểm Yếu Của Đối Thủ',
        slug: {
            current: 'chien-luoc-kac-che'
        },
        excerpt: 'Mỗi đối thủ đều có điểm yếu. Phân tích thị trường, hiểu mô hình kinh doanh, và tấn công vào chỗ yếu nhất.',
        category: 'air',
        element: 'air',
        publishedAt: '2025-01-14T00:00:00Z',
        readTime: 6,
        tags: [
            'Cạnh tranh',
            'Phân tích đối thủ'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'Tìm điểm yếu đối thủ'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Mỗi đối thủ đều có điểm yếu. Phân tích thị trường, hiểu mô hình kinh doanh, và tấn công vào chỗ yếu nhất.'
                    }
                ]
            },
            {
                _type: 'heading',
                level: 2,
                text: 'Cách phân tích'
            },
            {
                _type: 'list',
                style: 'bullet',
                children: [
                    {
                        _type: 'listItem',
                        text: 'Phân tích sản phẩm: Điểm mạnh/yếu'
                    },
                    {
                        _type: 'listItem',
                        text: 'Phân tích dịch vụ: Gap trong thị trường'
                    },
                    {
                        _type: 'listItem',
                        text: 'Phân tích tài chính: Điểm yếu trong cấu trúc'
                    }
                ]
            }
        ]
    },
    'biet-cai-co-de-thay-cai-khong': {
        _id: 'void-1',
        title: 'Biết Cái Có Để Thấy Cái Không: Triết Lý Giá Trị',
        slug: {
            current: 'biet-cai-co-de-thay-cai-khong'
        },
        excerpt: 'Đỉnh cao là sự giác ngộ về bản chất vô tướng. Giá trị doanh nghiệp không nằm ở nhà xưởng hữu hình mà ở thương hiệu, dữ liệu, kỳ vọng.',
        category: 'void',
        element: 'void',
        publishedAt: '2025-01-25T00:00:00Z',
        readTime: 10,
        tags: [
            'Giá trị',
            'Tài sản vô hình',
            'Triết lý'
        ],
        content: [
            {
                _type: 'heading',
                _key: 'heading1',
                level: 1,
                text: 'Triết lý vô hình'
            },
            {
                _type: 'block',
                _key: 'intro',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Trong Phật giáo có câu: '
                    },
                    {
                        _type: 'span',
                        marks: [
                            'em'
                        ],
                        text: '"Biết cái có để thấy cái không."'
                    },
                    {
                        _type: 'span',
                        marks: [],
                        text: ' Đỉnh cao của triết lý Chân Kinh là sự giác ngộ về bản chất vô tướng.'
                    }
                ]
            },
            {
                _type: 'heading',
                _key: 'heading2',
                level: 2,
                text: 'Tài sản vô hình'
            },
            {
                _type: 'quote',
                _key: 'quote1',
                style: 'highlighted',
                text: 'Giá trị lớn nhất của doanh nghiệp không nằm ở nhà xưởng (Hữu hình) mà nằm ở Thương hiệu, Dữ liệu, và Kỳ vọng tương lai (Vô hình).',
                attribution: 'Triết lý giá trị'
            }
        ]
    },
    'tai-san-vo-hinh': {
        _id: 'void-2',
        title: 'Tài Sản Vô Hình: Khoảng Không Kiếm Tiền Của Nhà Tư Bản',
        slug: {
            current: 'tai-san-vo-hinh'
        },
        excerpt: 'Nhà tư bản kiếm tiền từ "Khoảng Không" thông qua P/E ratio, Goodwill. Tại sao Amazon đáng giá hơn nhiều tổng tài sản hữu hình?',
        category: 'void',
        element: 'void',
        publishedAt: '2025-01-21T00:00:00Z',
        readTime: 8,
        tags: [
            'Tài sản vô hình',
            'P/E Ratio'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'Khoảng không kiếm tiền'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Nhà tư bản kiếm tiền từ "Khoảng Không" thông qua P/E ratio, Goodwill. Tại sao Amazon đáng giá hơn nhiều tổng tài sản hữu hình?'
                    }
                ]
            },
            {
                _type: 'heading',
                level: 2,
                text: 'Ví dụ thực tế'
            },
            {
                _type: 'callout',
                tone: 'info',
                emoji: '💰',
                title: 'Amazon vs Công ty sản xuất',
                content: [
                    {
                        _type: 'list',
                        style: 'bullet',
                        children: [
                            {
                                _type: 'listItem',
                                text: 'Amazon: P/E cao, giá trị chủ yếu từ brand & data'
                            },
                            {
                                _type: 'listItem',
                                text: 'Công ty sản xuất: P/E thấp, giá trị chủ yếu từ nhà xưởng & máy móc'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'pe-ratio-nghe-thuat-gia-tri': {
        _id: 'void-3',
        title: 'P/E Ratio: Nghệ Thuật Tạo Giá Trị Từ Không',
        slug: {
            current: 'pe-ratio-nghe-thuat-gia-tri'
        },
        excerpt: 'Hiểu cách thị trường định giá doanh nghiệp. Chiến thuật tăng kỳ vọng tương lai để nâng P/E mà không cần tăng lợi nhuận thực tế ngay.',
        category: 'void',
        element: 'void',
        publishedAt: '2025-01-17T00:00:00Z',
        readTime: 7,
        tags: [
            'P/E Ratio',
            'Định giá'
        ],
        content: [
            {
                _type: 'heading',
                level: 1,
                text: 'P/E Ratio: Định giá tương lai'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [
                    {
                        _type: 'span',
                        marks: [],
                        text: 'Hiểu cách thị trường định giá doanh nghiệp. Chiến thuật tăng kỳ vọng tương lai để nâng P/E mà không cần tăng lợi nhuận thực tế ngay.'
                    }
                ]
            },
            {
                _type: 'heading',
                level: 2,
                text: 'Cách tăng P/E'
            },
            {
                _type: 'list',
                style: 'bullet',
                children: [
                    {
                        _type: 'listItem',
                        text: 'Xây dựng brand equity'
                    },
                    {
                        _type: 'listItem',
                        text: 'Tạo story hấp dẫn cho investors'
                    },
                    {
                        _type: 'listItem',
                        text: 'Hiển thị traction & growth potential'
                    },
                    {
                        _type: 'listItem',
                        text: 'TAM, SAM, SOM market analysis'
                    }
                ]
            }
        ]
    }
};
const elementConfig = {
    earth: {
        name: 'Đất',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"],
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/20',
        hover: 'hover:bg-amber-500/15'
    },
    water: {
        name: 'Nước',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20',
        hover: 'hover:bg-cyan-500/15'
    },
    fire: {
        name: 'Lửa',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        color: 'text-red-500',
        bg: 'bg-red-500/10',
        border: 'border-red-500/20',
        hover: 'hover:bg-red-500/15'
    },
    air: {
        name: 'Khí',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"],
        color: 'text-slate-400',
        bg: 'bg-slate-500/10',
        border: 'border-slate-500/20',
        hover: 'hover:bg-slate-500/15'
    },
    void: {
        name: 'Không',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: 'text-violet-500',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
        hover: 'hover:bg-violet-500/15'
    }
};
function PostPageContent({ slug }) {
    _s();
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [readingProgress, setReadingProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeHeading, setActiveHeading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostPageContent.useEffect": ()=>{
            const fetchPost = {
                "PostPageContent.useEffect.fetchPost": async ()=>{
                    setLoading(true);
                    setError(null);
                    try {
                        const response = await fetch(`/api/posts?slug=${slug}`);
                        const data = await response.json();
                        if (data.posts && data.posts.length > 0) {
                            setPost(data.posts[0]);
                        } else {
                            const mockPost = mockPosts[slug];
                            if (mockPost) {
                                setPost(mockPost);
                            } else {
                                setError('Không tìm thấy bài viết.');
                            }
                        }
                    } catch (err) {
                        console.error('Error fetching post:', err);
                        const mockPost = mockPosts[slug];
                        if (mockPost) {
                            setPost(mockPost);
                        } else {
                            setError('Không thể tải bài viết.');
                        }
                    } finally{
                        setLoading(false);
                    }
                }
            }["PostPageContent.useEffect.fetchPost"];
            fetchPost();
        }
    }["PostPageContent.useEffect"], [
        slug
    ]);
    // Reading progress
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostPageContent.useEffect": ()=>{
            const handleScroll = {
                "PostPageContent.useEffect.handleScroll": ()=>{
                    if (!contentRef.current) return;
                    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrolled = winScroll / height * 100;
                    setReadingProgress(scrolled);
                }
            }["PostPageContent.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "PostPageContent.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["PostPageContent.useEffect"];
        }
    }["PostPageContent.useEffect"], []);
    // Track active heading
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostPageContent.useEffect": ()=>{
            const headings = contentRef.current?.querySelectorAll('h2, h3') || [];
            const observer = new IntersectionObserver({
                "PostPageContent.useEffect": (entries)=>{
                    entries.forEach({
                        "PostPageContent.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setActiveHeading(entry.target.id);
                            }
                        }
                    }["PostPageContent.useEffect"]);
                }
            }["PostPageContent.useEffect"], {
                rootMargin: '-20% 0% -80% 0%',
                threshold: 0
            });
            headings.forEach({
                "PostPageContent.useEffect": (heading)=>{
                    observer.observe(heading);
                }
            }["PostPageContent.useEffect"]);
            return ({
                "PostPageContent.useEffect": ()=>observer.disconnect()
            })["PostPageContent.useEffect"];
        }
    }["PostPageContent.useEffect"], [
        post
    ]);
    // Build table of contents
    const tableOfContents = post?.content?.filter((block)=>block._type === 'heading').map((block, index)=>({
            id: `heading-${index}`,
            text: block.text,
            level: block.level || 1
        })) || [];
    const scrollToHeading = (id)=>{
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 animate-spin border-t-gray-900"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                        lineNumber: 956,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-light",
                        children: "Đang tải..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                        lineNumber: 957,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                lineNumber: 955,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
            lineNumber: 954,
            columnNumber: 7
        }, this);
    }
    if (error || !post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {
                        className: "w-20 h-20 mx-auto mb-6 text-gray-300"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                        lineNumber: 967,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-semibold mb-4 text-gray-900",
                        children: "Không tìm thấy bài viết"
                    }, void 0, false, {
                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                        lineNumber: 968,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-light mb-8",
                        children: error || 'Bài viết này không tồn tại hoặc đã bị xóa.'
                    }, void 0, false, {
                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                        lineNumber: 971,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/kinh-cac",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors font-light text-gray-700",
                            children: "Quay lại thư viện"
                        }, void 0, false, {
                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                            lineNumber: 975,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                        lineNumber: 974,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                lineNumber: 966,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
            lineNumber: 965,
            columnNumber: 7
        }, this);
    }
    const config = elementConfig[post.category];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "h-full bg-gray-900",
                    style: {
                        width: `${readingProgress}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                    lineNumber: 990,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                lineNumber: 989,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/kinh-cac",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                x: -3
                                            },
                                            className: "flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-light text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1006,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Quay lại"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                            lineNumber: 1002,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300",
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-sm font-light",
                                        children: config.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                        lineNumber: 1011,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                lineNumber: 1000,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 rounded-lg hover:bg-gray-100 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            className: "w-4 h-4 text-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                        lineNumber: 1014,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-2 rounded-lg hover:bg-gray-100 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                            className: "w-4 h-4 text-gray-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                            lineNumber: 1018,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                lineNumber: 1013,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                        lineNumber: 999,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                    lineNumber: 998,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                lineNumber: 997,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-12",
                        children: [
                            tableOfContents.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "hidden lg:block w-64 flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4",
                                            children: "Nội dung"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                            lineNumber: 1032,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "space-y-1",
                                            children: tableOfContents.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>scrollToHeading(item.id),
                                                    className: `w-full text-left px-3 py-2 rounded-lg text-sm font-light transition-colors ${activeHeading === item.id ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'} ${item.level === 3 ? 'pl-6' : ''}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            activeHeading === item.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                lineNumber: 1048,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate",
                                                                children: item.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                lineNumber: 1050,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                        lineNumber: 1046,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item.id, false, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1037,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                lineNumber: 1030,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "flex-1 min-w-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: contentRef,
                                    className: "max-w-3xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.5
                                            },
                                            className: "mb-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm text-gray-400 mb-6 font-light",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/kinh-cac",
                                                            className: "hover:text-gray-600 transition-colors",
                                                            children: "Kinh Các"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1071,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1074,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: config.color,
                                                            children: config.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1075,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1070,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${config.bg} ${config.border}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(config.icon, {
                                                                    className: `w-4 h-4 ${config.color}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1081,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-sm font-semibold ${config.color}`,
                                                                    children: config.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1082,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1080,
                                                            columnNumber: 19
                                                        }, this),
                                                        post.tags && post.tags.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-3 py-1.5 rounded-full bg-gray-100 text-sm text-gray-600 font-light",
                                                                children: tag
                                                            }, i, false, {
                                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                lineNumber: 1085,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1079,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900",
                                                    children: post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1092,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-6 text-gray-500 text-sm font-light",
                                                    children: [
                                                        post.publishedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1100,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: new Date(post.publishedAt).toLocaleDateString('vi-VN', {
                                                                        year: 'numeric',
                                                                        month: 'long',
                                                                        day: 'numeric'
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1101,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1099,
                                                            columnNumber: 21
                                                        }, this),
                                                        post.readTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1112,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        post.readTime,
                                                                        " phút đọc"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1113,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1111,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1097,
                                                    columnNumber: 17
                                                }, this),
                                                post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        delay: 0.2,
                                                        duration: 0.5
                                                    },
                                                    className: "mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg text-gray-700 font-light leading-relaxed",
                                                        children: post.excerpt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                        lineNumber: 1126,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1120,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                            lineNumber: 1063,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.3
                                            },
                                            className: "prose prose-lg max-w-none",
                                            children: post.content && post.content.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: post.content.map((block, index)=>{
                                                    // Heading
                                                    if (block._type === 'heading') {
                                                        const headingId = `heading-${index}`;
                                                        const level = block.level || 2;
                                                        const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';
                                                        const baseClasses = level === 2 ? 'text-2xl font-bold text-gray-900 mt-12 mb-4' : 'text-xl font-semibold text-gray-900 mt-8 mb-3';
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                                                            id: headingId,
                                                            className: baseClasses,
                                                            children: block.text
                                                        }, index, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1153,
                                                            columnNumber: 27
                                                        }, this);
                                                    }
                                                    // Block
                                                    if (block._type === 'block') {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 font-light leading-relaxed text-base",
                                                            children: block.children?.map((child, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: child.marks?.includes('strong') ? 'font-semibold text-gray-900' : child.marks?.includes('em') ? 'italic text-gray-500' : '',
                                                                    children: child.text
                                                                }, i, false, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1168,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, index, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1166,
                                                            columnNumber: 27
                                                        }, this);
                                                    }
                                                    // Quote
                                                    if (block._type === 'quote') {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                            className: "my-8 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg text-gray-900 font-light leading-relaxed",
                                                                    children: [
                                                                        '"',
                                                                        block.text,
                                                                        '"'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1190,
                                                                    columnNumber: 29
                                                                }, this),
                                                                block.attribution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cite", {
                                                                    className: "block text-right text-gray-500 text-sm font-light mt-3",
                                                                    children: [
                                                                        "— ",
                                                                        block.attribution
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1194,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1186,
                                                            columnNumber: 27
                                                        }, this);
                                                    }
                                                    // Callout
                                                    if (block._type === 'callout') {
                                                        const toneColors = {
                                                            info: 'bg-blue-50 border-blue-200',
                                                            warning: 'bg-amber-50 border-amber-200',
                                                            important: 'bg-red-50 border-red-200',
                                                            success: 'bg-emerald-50 border-emerald-200'
                                                        };
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-5 rounded-xl border ${toneColors[block.tone] || toneColors.info}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl flex-shrink-0",
                                                                        children: block.emoji
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                        lineNumber: 1217,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            block.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-semibold text-gray-900 mb-2",
                                                                                children: block.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                                lineNumber: 1220,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2",
                                                                                children: block.content?.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            item._type === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                                className: item.style === 'numbered' ? 'list-decimal' : 'list-disc',
                                                                                                children: item.children?.map((listItem, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                        className: "mb-1 text-gray-700 font-light",
                                                                                                        children: listItem.text
                                                                                                    }, j, false, {
                                                                                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                                                        lineNumber: 1230,
                                                                                                        columnNumber: 45
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                                                lineNumber: 1228,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            item._type === 'block' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-gray-700 font-light",
                                                                                                children: item.children?.map((child, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: child.marks?.includes('strong') ? 'font-semibold text-gray-900' : '',
                                                                                                        children: child.text
                                                                                                    }, j, false, {
                                                                                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                                                        lineNumber: 1239,
                                                                                                        columnNumber: 45
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                                                lineNumber: 1237,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        ]
                                                                                    }, i, true, {
                                                                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                                        lineNumber: 1226,
                                                                                        columnNumber: 37
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                                lineNumber: 1224,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                        lineNumber: 1218,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                lineNumber: 1216,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, index, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1212,
                                                            columnNumber: 27
                                                        }, this);
                                                    }
                                                    // List
                                                    if (block._type === 'list') {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: block.style === 'numbered' ? 'list-decimal space-y-2' : 'list-disc space-y-2',
                                                            children: block.children?.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "text-gray-700 font-light",
                                                                    children: item.text
                                                                }, i, false, {
                                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                                    lineNumber: 1265,
                                                                    columnNumber: 31
                                                                }, this))
                                                        }, index, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1260,
                                                            columnNumber: 27
                                                        }, this);
                                                    }
                                                    return null;
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                lineNumber: 1141,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 font-light leading-relaxed",
                                                children: "Nội dung đang được cập nhật..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                lineNumber: 1277,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                            lineNumber: 1134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.4
                                            },
                                            className: "flex flex-wrap items-center gap-3 pt-8 mt-12 border-t border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-light text-sm text-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1291,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Thích"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1292,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1290,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-light text-sm text-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1295,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Lưu lại"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1296,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1294,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-light text-sm text-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1299,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Chia sẻ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                            lineNumber: 1300,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1298,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                            lineNumber: 1284,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                    lineNumber: 1061,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                lineNumber: 1060,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                        lineNumber: 1027,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.6
                        },
                        className: "mt-16 border-t border-gray-200 pt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 rounded-2xl bg-gray-50 border border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold mb-4 text-gray-900",
                                        children: "Thảo luận trên Đạo Tràng"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                        lineNumber: 1316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 font-light leading-relaxed mb-6",
                                        children: "Tham gia thảo luận về bài viết này cùng cộng đồng hành giả trên Đạo Tràng."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                        lineNumber: 1319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dao-trang",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors font-light",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1324,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Tham gia thảo luận"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                                    lineNumber: 1325,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                            lineNumber: 1323,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                        lineNumber: 1322,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                                lineNumber: 1315,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                            lineNumber: 1314,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                        lineNumber: 1308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
                lineNumber: 1026,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/kinh-cac/[slug]/post-content.tsx",
        lineNumber: 987,
        columnNumber: 5
    }, this);
}
_s(PostPageContent, "8HO78TNUCxQScfsiKeLP840jDIw=");
_c = PostPageContent;
var _c;
__turbopack_context__.k.register(_c, "PostPageContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/kinh-cac/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$kinh$2d$cac$2f5b$slug$5d2f$post$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/kinh-cac/[slug]/post-content.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function PostPage({ params }) {
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$kinh$2d$cac$2f5b$slug$5d2f$post$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        slug: slug
    }, void 0, false, {
        fileName: "[project]/src/app/kinh-cac/[slug]/page.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = PostPage;
var _c;
__turbopack_context__.k.register(_c, "PostPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_kinh-cac_%5Bslug%5D_c040df5e._.js.map