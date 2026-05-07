
import { createClient } from '@sanity/client'
import { config } from 'dotenv'
import path from 'path'

// Load environment variables from .env file
config({ path: path.resolve(__dirname, '../.env') })

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: process.env.SANITY_API_TOKEN, // Needs a write token
    apiVersion: '2024-01-01',
    useCdn: false,
})

const posts = [
    // EARTH (Đất)
    {
        _id: 'earth-seed-1',
        _type: 'post',
        title: 'Xây Dựng Cấu Trúc Pháp Lý Ngay Từ Ngày Đầu (Day 1 Foodify)',
        slug: { _type: 'slug', current: 'xay-dung-cau-truc-phap-ly' },
        element: 'earth',
        excerpt: 'Không có kỹ thuật nào hiệu quả nếu thế đứng không vững. Cấu trúc pháp lý Holdings, SPV và mô hình kinh doanh chuẩn chỉnh là nền tảng bắt buộc.',
        description: 'Nền tảng của mọi doanh nghiệp bền vững. Hướng dẫn thiết lập Holdco và SPV để bảo vệ tài sản và tối ưu thuế.',
        publishedAt: '2025-01-15T00:00:00Z',
        readTime: '8',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trong kinh doanh, nền tảng pháp lý cũng giống như móng nhà. Nếu móng không vững, càng xây cao càng dễ sập.' }]
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Tại sao cần Holdco?' }]
            },
            {
                _type: 'block',
                style: 'blockquote',
                children: [{ _type: 'span', text: '"Đừng để trứng vào một giỏ." - Nguyên tắc này đúng cả trong cấu trúc doanh nghiệp.' }]
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Holding Company (Công ty mẹ) giúp tách biệt tài sản và rủi ro. Các SPV (Special Purpose Vehicle) sẽ chịu trách nhiệm cho từng dự án cụ thể.' }]
            }
        ]
    },
    {
        _id: 'earth-seed-2',
        _type: 'post',
        title: 'Nguyên Tắc Vững Chắc: Khi Pháp Lý Lỏng Lẻo, Doanh Nghiệp Sập Đổ',
        slug: { _type: 'slug', current: 'nguyen-tac-vung-chac' },
        element: 'earth',
        excerpt: 'Lịch sử đã chứng minh: doanh nghiệp có cấu trúc pháp lý yếu kém sẽ sụp đổ khi quy mô tăng. Bài học từ những thất bại đắt giá.',
        description: 'Phân tích các case study thất bại do coi thường pháp lý. Bài học xương máu cho founder.',
        publishedAt: '2025-01-10T00:00:00Z',
        readTime: '7',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Khi quy mô nhỏ, mọi thứ đều dễ dàng. Nhưng khi scale up, những lỗ hổng pháp lý nhỏ bé sẽ trở thành tử huyệt.' }]
            }
        ]
    },
    {
        _id: 'earth-seed-3',
        _type: 'post',
        title: 'Mô Hình Holdco-SPC: Chiến Lược Tối Ưu Cho Venture Studio',
        slug: { _type: 'slug', current: 'holdco-spc-chieu-luoc' },
        element: 'earth',
        excerpt: 'Cách thiết kế cấu trúc công ty để bảo vệ nhà đầu tư, tối ưu thuế, và tạo điều kiện mở rộng linh hoạt cho từng vertical.',
        description: 'Deep dive vào mô hình Venture Studio. Cách vận hành nhiều startup cùng lúc mà không bị rối loạn.',
        publishedAt: '2025-01-05T00:00:00Z',
        readTime: '9',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Venture Studio không phải là một công ty bình thường. Nó là một nhà máy sản xuất công ty. Vì vậy, cấu trúc của nó phải cực kỳ linh hoạt.' }]
            }
        ]
    },

    // WATER (Nước)
    {
        _id: 'water-seed-1',
        _type: 'post',
        title: 'Tâm Chiến Binh Như Nước: Linh Hoạt, Phản Chiếu, Không Dính Mắc',
        slug: { _type: 'slug', current: 'tam-chien-binh-nhu-nuoc' },
        element: 'water',
        excerpt: 'Nước tùy vật mà định hình. Trong kinh doanh, khả năng thích nghi và xoay trục nhanh hơn đối thủ là chiến lược sống còn.',
        description: 'Triết lý hành động của doanh nhân hiện đại. Be water, my friend.',
        publishedAt: '2025-01-18T00:00:00Z',
        readTime: '6',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nước mềm mại nhưng có thể xuyên đá. Doanh nhân cần mềm dẻo trong chiến thuật nhưng kiên định trong mục tiêu.' }]
            }
        ]
    },
    {
        _id: 'water-seed-2',
        _type: 'post',
        title: 'Quản Trị Dòng Tiền Linh Hoạt Khi Thị Trường Đóng Băng',
        slug: { _type: 'slug', current: 'quan-tri-dong-tien-linh-hoat' },
        element: 'water',
        excerpt: 'Khi BĐS đóng băng, dòng vốn phải chảy. Chiến lược pivot từ bất động sản sang dịch vụ và sản xuất để duy trì cash flow.',
        description: 'Cash is King. Bí quyết giữ dòng tiền luôn dương trong mùa đông kinh tế.',
        publishedAt: '2025-01-12T00:00:00Z',
        readTime: '8',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng để dòng tiền chết đứng trong tài sản thanh khoản thấp. Hãy luôn có phương án B để tạo cash flow.' }]
            }
        ]
    },
    {
        _id: 'water-seed-3',
        _type: 'post',
        title: 'Không Cố Chấp Với Một Phương Thức Kiếm Tiền',
        slug: { _type: 'slug', current: 'khong-co-chap-kiem-tien' },
        element: 'water',
        excerpt: 'Doanh nghiệp bền vững hiểu rằng kiếm tiền có nhiều cách. Đa dạng hóa nguồn thu và linh hoạt trong chiến lược doanh thu.',
        description: 'Tư duy đa dạng hóa nguồn thu nhập. Đừng bao giờ phụ thuộc vào một khách hàng hay một sản phẩm duy nhất.',
        publishedAt: '2025-01-08T00:00:00Z',
        readTime: '5',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Thị trường thay đổi, phương thức kiếm tiền cũng phải thay đổi. Cố chấp là chết.' }]
            }
        ]
    },

    // FIRE (Lửa)
    {
        _id: 'fire-seed-1',
        _type: 'post',
        title: 'Chiến Lược Chiếm Lĩnh Thị Trường: Go-to-Market Aggressive',
        slug: { _type: 'slug', current: 'go-to-market-aggressive' },
        element: 'fire',
        excerpt: 'Tấn công vào điểm yếu của đối thủ. Sử dụng đòn bẩy marketing để bùng nổ doanh số và định vị thương hiệu ngay từ đầu (Day 2 Foodify).',
        description: 'Blitzscaling - Tăng trưởng thần tốc. Làm sao để chiếm lĩnh market share trong 3 tháng đầu.',
        publishedAt: '2025-01-20T00:00:00Z',
        readTime: '7',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trong giai đoạn đầu, tốc độ là tất cả. Hoặc là bạn nhanh, hoặc là bạn chết.' }]
            }
        ]
    },
    {
        _id: 'fire-seed-2',
        _type: 'post',
        title: 'Tầm Nhìn Quyết Liệt: Khi Chiến Đấu Là Phải Thắng',
        slug: { _type: 'slug', current: 'tam-nhin-quyet-liet' },
        element: 'fire',
        excerpt: 'Trong kinh doanh, quyết liệt không phải là hung hăng. Đó là sự dám ra quyết định khó, chấp nhận rủi ro tính toán để đạt mục tiêu.',
        description: 'Tâm thế của người lãnh đạo thời chiến. Quyết đoán, dứt khoát và không khoan nhượng với sự trung bình.',
        publishedAt: '2025-01-16T00:00:00Z',
        readTime: '6',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Người lãnh đạo không được phép do dự. Một quyết định sai còn hơn là không ra quyết định gì.' }]
            }
        ]
    },
    {
        _id: 'fire-seed-3',
        _type: 'post',
        title: 'Đòn Bẩy Marketing: Tối Ưu ROI Để Bùng Nổ Doanh Số',
        slug: { _type: 'slug', current: 'don-bay-marketing' },
        element: 'fire',
        excerpt: 'Chiến thuật tạo hiệu ứng nổ đom đóm: bắt đầu nhỏ, tìm traction, scale nhanh. Quy trình bootstrapping marketing budget.',
        description: 'Growth Hacking thực chiến. Cách dùng tiền thông minh để tạo ra nhiều tiền hơn.',
        publishedAt: '2025-01-11T00:00:00Z',
        readTime: '8',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Marketing không phải là chi phí, nó là khoản đầu tư. Nếu ROI dương, hãy đốt tiền đến khi nào bão hòa.' }]
            }
        ]
    },

    // AIR (Khí)
    {
        _id: 'air-seed-1',
        _type: 'post',
        title: 'Hiểu Phong Cách Các Trường Phái Khác Để Khắc Chế',
        slug: { _type: 'slug', current: 'hieu-phong-cach-truong-phai' },
        element: 'air',
        excerpt: 'Biết phong cách của đối thủ để khắc chế. Đối thủ cồng kềnh chậm chạp thì dùng tốc độ; đối thủ nhanh hung hăng thì dùng chiều sâu.',
        description: 'Nghệ thuật cạnh tranh bất đối xứng. Lấy nhu thắng cương, lấy tĩnh chế động.',
        publishedAt: '2025-01-22T00:00:00Z',
        readTime: '9',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng đánh nhau với đối thủ ở nơi họ mạnh nhất. Hãy kéo họ vào sân chơi của bạn.' }]
            }
        ]
    },
    {
        _id: 'air-seed-2',
        _type: 'post',
        title: 'M&A Chiến Thuật: Thâu Tóm Hoặc Vượt Mặt Đối Thủ',
        slug: { _type: 'slug', current: 'ma-chien-thuat' },
        element: 'air',
        excerpt: 'Sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) để thâu tóm hoặc vượt mặt các đối thủ truyền thống.',
        description: 'Chiến lược cá lớn nuốt cá bé, và cá nhanh nuốt cá chậm. M&A như một công cụ tăng trưởng.',
        publishedAt: '2025-01-19T00:00:00Z',
        readTime: '7',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'M&A không chỉ dành cho các tập đoàn lớn. Startup cũng có thể M&A để acquire tài năng và công nghệ.' }]
            }
        ]
    },
    {
        _id: 'air-seed-3',
        _type: 'post',
        title: 'Chiến Lược Khắc Chế: Tìm Điểm Yếu Của Đối Thủ',
        slug: { _type: 'slug', current: 'chien-luoc-kac-che' },
        element: 'air',
        excerpt: 'Mỗi đối thủ đều có điểm yếu. Phân tích thị trường, hiểu mô hình kinh doanh, và tấn công vào chỗ yếu nhất.',
        description: 'Tư duy phản biện và phân tích đối thủ cạnh tranh. Biết người biết ta, trăm trận trăm thắng.',
        publishedAt: '2025-01-14T00:00:00Z',
        readTime: '6',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Điểm mạnh nhất của đối thủ thường cũng là điểm yếu nhất của họ. Hãy tìm ra nó.' }]
            }
        ]
    },

    // VOID (Không)
    {
        _id: 'void-seed-1',
        _type: 'post',
        title: 'Biết Cái Có Để Thấy Cái Không: Triết Lý Giá Trị',
        slug: { _type: 'slug', current: 'biet-cai-co-de-thay-cai-khong' },
        element: 'void',
        excerpt: 'Đỉnh cao là sự giác ngộ về bản chất vô tướng. Giá trị doanh nghiệp không nằm ở nhà xưởng hữu hình mà ở thương hiệu, dữ liệu, kỳ vọng.',
        description: 'Triết lý kinh doanh cấp cao. Nhìn thấy cơ hội trong sự hỗn loạn, nhìn thấy giá trị trong cái vô hình.',
        publishedAt: '2025-01-25T00:00:00Z',
        readTime: '10',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Những công ty giá trị nhất thế giới không sở hữu nhiều tài sản hữu hình. Họ sở hữu niềm tin.' }]
            }
        ]
    },
    {
        _id: 'void-seed-2',
        _type: 'post',
        title: 'Tài Sản Vô Hình: Khoảng Không Kiếm Tiền Của Nhà Tư Bản',
        slug: { _type: 'slug', current: 'tai-san-vo-hinh' },
        element: 'void',
        excerpt: 'Nhà tư bản kiếm tiền từ "Khoảng Không" thông qua P/E ratio, Goodwill. Tại sao Amazon đáng giá hơn nhiều tổng tài sản hữu hình?',
        description: 'Giải mã bí mật của định giá doanh nghiệp. Goodwill là gì và tại sao nó quan trọng.',
        publishedAt: '2025-01-21T00:00:00Z',
        readTime: '8',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Tiền không sinh ra từ việc bán hàng. Tiền sinh ra từ việc bán giá trị tương lai.' }]
            }
        ]
    },
    {
        _id: 'void-seed-3',
        _type: 'post',
        title: 'P/E Ratio: Nghệ Thuật Tạo Giá Trị Từ Không',
        slug: { _type: 'slug', current: 'pe-ratio-nghe-thuat-gia-tri' },
        element: 'void',
        excerpt: 'Hiểu cách thị trường định giá doanh nghiệp. Chiến thuật tăng kỳ vọng tương lai để nâng P/E mà không cần tăng lợi nhuận thực tế ngay.',
        description: 'Financial engineering cơ bản. Cách các CEO đại tài điều khiển giá cổ phiếu.',
        publishedAt: '2025-01-17T00:00:00Z',
        readTime: '7',
        content: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'P/E Ratio là chỉ số của sự kỳ vọng (Hope). Nhiệm vụ của bạn là bán Hy Vọng.' }]
            }
        ]
    },
]

async function seed() {
    console.log('🌱 Scaling the mountains... (Seeding data)')

    const transaction = client.transaction()

    posts.forEach((post) => {
        transaction.createOrReplace(post)
    })

    try {
        await transaction.commit()
        console.log('✅ Seeding successful! The archives are filled.')
    } catch (error) {
        console.error('❌ Seeding failed:', error)
    }
}

seed()
