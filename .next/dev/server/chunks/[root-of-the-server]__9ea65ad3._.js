module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/posts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const element = searchParams.get('element');
    const slug = searchParams.get('slug');
    // Mock data - all 15 demo posts (3 per element)
    const mockPosts = [
        // Earth - 3 posts
        {
            _id: 'earth-1',
            title: 'Xây Dựng Cấu Trúc Pháp Lý Ngay Từ Ngày Đầu (Day 1 XCAP)',
            slug: {
                current: 'xay-dung-cau-truc-phap-ly'
            },
            excerpt: 'Không có kỹ thuật nào hiệu quả nếu thế đứng không vững. Cấu trúc pháp lý Holdings, SPV và mô hình kinh doanh chuẩn chỉnh là nền tảng bắt buộc.',
            category: 'earth',
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
                    level: 1,
                    text: 'Nguyên tắc cơ bản'
                },
                {
                    _type: 'block',
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
                    level: 2,
                    text: 'Day 1 XCAP'
                },
                {
                    _type: 'callout',
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
                }
            ]
        },
        {
            _id: 'earth-2',
            title: 'Nguyên Tắc Vững Chắc: Khi Pháp Lý Lỏng Lẻo, Doanh Nghiệp Sập Đổ',
            slug: {
                current: 'nguyen-tac-vung-chac'
            },
            excerpt: 'Lịch sử đã chứng minh: doanh nghiệp có cấu trúc pháp lý yếu kém sẽ sụp đổ khi quy mô tăng. Bài học từ những thất bại đắt giá.',
            category: 'earth',
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
        {
            _id: 'earth-3',
            title: 'Mô Hình Holdco-SPC: Chiến Lược Tối Ưu Cho Venture Studio',
            slug: {
                current: 'holdco-spc-chieu-luoc'
            },
            excerpt: 'Cách thiết kế cấu trúc công ty để bảo vệ nhà đầu tư, tối ưu thuế, và tạo điều kiện mở rộng linh hoạt cho từng vertical.',
            category: 'earth',
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
        // Water - 3 posts
        {
            _id: 'water-1',
            title: 'Tâm Chiến Binh Như Nước: Linh Hoạt, Phản Chiếu, Không Dính Mắc',
            slug: {
                current: 'tam-chien-binh-nhu-nuoc'
            },
            excerpt: 'Nước tùy vật mà định hình. Trong kinh doanh, khả năng thích nghi và xoay trục nhanh hơn đối thủ là chiến lược sống còn.',
            category: 'water',
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
                    level: 1,
                    text: 'Triết lý của nước'
                },
                {
                    _type: 'block',
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
                    level: 2,
                    text: 'Nguyên tắc linh hoạt'
                },
                {
                    _type: 'quote',
                    style: 'highlighted',
                    text: 'Tâm chiến binh phải như nước, phản chiếu tất cả nhưng không bị dính mắc.',
                    attribution: 'Nguyên tắc linh hoạt'
                }
            ]
        },
        {
            _id: 'water-2',
            title: 'Quản Trị Dòng Tiền Linh Hoạt Khi Thị Trường Đóng Băng',
            slug: {
                current: 'quan-tri-dong-tien-linh-hoat'
            },
            excerpt: 'Khi BĐS đóng băng, dòng vốn phải chảy. Chiến lược pivot từ bất động sản sang dịch vụ và sản xuất để duy trì cash flow.',
            category: 'water',
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
        {
            _id: 'water-3',
            title: 'Không Cố Chấp Với Một Phương Thức Kiếm Tiền',
            slug: {
                current: 'khong-co-chap-kiem-tien'
            },
            excerpt: 'Doanh nghiệp bền vững hiểu rằng kiếm tiền có nhiều cách. Đa dạng hóa nguồn thu và linh hoạt trong chiến lược doanh thu.',
            category: 'water',
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
        // Fire - 3 posts
        {
            _id: 'fire-1',
            title: 'Chiến Lược Chiếm Lĩnh Thị Trường: Go-to-Market Aggressive',
            slug: {
                current: 'go-to-market-aggressive'
            },
            excerpt: 'Tấn công vào điểm yếu của đối thủ. Sử dụng đòn bẩy marketing để bùng nổ doanh số và định vị thương hiệu ngay từ đầu (Day 2 XCAP).',
            category: 'fire',
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
                    level: 1,
                    text: 'Tư duy chiến đấu'
                },
                {
                    _type: 'block',
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
                    level: 2,
                    text: 'Chiến lược Go-to-market'
                },
                {
                    _type: 'quote',
                    style: 'highlighted',
                    text: 'Tấn công vào điểm yếu của đối thủ. Sử dụng các đòn bẩy marketing để bùng nổ doanh số và định vị thương hiệu.',
                    attribution: 'Chiến lược go-to-market'
                },
                {
                    _type: 'callout',
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
        {
            _id: 'fire-2',
            title: 'Tầm Nhìn Quyết Liệt: Khi Chiến Đấu Là Phải Thắng',
            slug: {
                current: 'tam-nhin-quyet-liet'
            },
            excerpt: 'Trong kinh doanh, quyết liệt không phải là hung hăng. Đó là sự dám ra quyết định khó, chấp nhận rủi ro tính toán để đạt mục tiêu.',
            category: 'fire',
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
        {
            _id: 'fire-3',
            title: 'Đòn Bẩy Marketing: Tối Ưu ROI Để Bùng Nổ Doanh Số',
            slug: {
                current: 'don-bay-marketing'
            },
            excerpt: 'Chiến thuật tạo hiệu ứng nổ đom đóm: bắt đầu nhỏ, tìm traction, scale nhanh. Quy trình bootstrapping marketing budget.',
            category: 'fire',
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
        // Air - 3 posts
        {
            _id: 'air-1',
            title: 'Hiểu Phong Cách Các Trường Phái Khác Để Khắc Chế',
            slug: {
                current: 'hieu-phong-cach-truong-phai'
            },
            excerpt: 'Biết phong cách của đối thủ để khắc chế. Đối thủ cồng kềnh chậm chạp thì dùng tốc độ; đối thủ nhanh hung hăng thì dùng chiều sâu.',
            category: 'air',
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
                    level: 1,
                    text: 'Tư duy cạnh tranh'
                },
                {
                    _type: 'block',
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
                    level: 2,
                    text: 'Phân tích đối thủ'
                },
                {
                    _type: 'quote',
                    style: 'highlighted',
                    text: 'Hiểu rõ điểm yếu của các đối thủ truyền thống (cồng kềnh, chậm chạp) để sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) mà thâu tóm hoặc vượt mặt.',
                    attribution: 'Chiến lược cạnh tranh'
                }
            ]
        },
        {
            _id: 'air-2',
            title: 'M&A Chiến Thuật: Thâu Tóm Hoặc Vượt Mặt Đối Thủ',
            slug: {
                current: 'ma-chien-thuat'
            },
            excerpt: 'Sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) để thâu tóm hoặc vượt mặt các đối thủ truyền thống.',
            category: 'air',
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
        {
            _id: 'air-3',
            title: 'Chiến Lược Khắc Chế: Tìm Điểm Yếu Của Đối Thủ',
            slug: {
                current: 'chien-luoc-kac-che'
            },
            excerpt: 'Mỗi đối thủ đều có điểm yếu. Phân tích thị trường, hiểu mô hình kinh doanh, và tấn công vào chỗ yếu nhất.',
            category: 'air',
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
        // Void - 3 posts
        {
            _id: 'void-1',
            title: 'Biết Cái Có Để Thấy Cái Không: Triết Lý Giá Trị',
            slug: {
                current: 'biet-cai-co-de-thay-cai-khong'
            },
            excerpt: 'Đỉnh cao là sự giác ngộ về bản chất vô tướng. Giá trị doanh nghiệp không nằm ở nhà xưởng hữu hình mà ở thương hiệu, dữ liệu, kỳ vọng.',
            category: 'void',
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
                    level: 1,
                    text: 'Triết lý vô hình'
                },
                {
                    _type: 'block',
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
                    level: 2,
                    text: 'Tài sản vô hình'
                },
                {
                    _type: 'quote',
                    style: 'highlighted',
                    text: 'Giá trị lớn nhất của doanh nghiệp không nằm ở nhà xưởng (Hữu hình) mà nằm ở Thương hiệu, Dữ liệu, và Kỳ vọng tương lai (Vô hình).',
                    attribution: 'Triết lý giá trị'
                }
            ]
        },
        {
            _id: 'void-2',
            title: 'Tài Sản Vô Hình: Khoảng Không Kiếm Tiền Của Nhà Tư Bản',
            slug: {
                current: 'tai-san-vo-hinh'
            },
            excerpt: 'Nhà tư bản kiếm tiền từ "Khoảng Không" thông qua P/E ratio, Goodwill. Tại sao Amazon đáng giá hơn nhiều tổng tài sản hữu hình?',
            category: 'void',
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
        {
            _id: 'void-3',
            title: 'P/E Ratio: Nghệ Thuật Tạo Giá Trị Từ Không',
            slug: {
                current: 'pe-ratio-nghe-thuat-gia-tri'
            },
            excerpt: 'Hiểu cách thị trường định giá doanh nghiệp. Chiến thuật tăng kỳ vọng tương lai để nâng P/E mà không cần tăng lợi nhuận thực tế ngay.',
            category: 'void',
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
    ];
    try {
        // If slug is provided, find specific post
        if (slug) {
            const post = mockPosts.find((p)=>p.slug?.current === slug);
            if (post) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    posts: [
                        post
                    ]
                });
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    posts: [],
                    error: 'Post not found'
                }, {
                    status: 404
                });
            }
        }
        // If element is provided, filter by element
        if (element && [
            'earth',
            'water',
            'fire',
            'air',
            'void'
        ].includes(element)) {
            const filteredPosts = mockPosts.filter((p)=>p.category === element);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                posts: filteredPosts
            });
        }
        // Return all posts
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            posts: mockPosts
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch posts'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9ea65ad3._.js.map