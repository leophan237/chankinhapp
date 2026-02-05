import { defineField, defineType } from 'sanity'

export const product = defineType({
    name: 'product',
    title: 'Kinh Bộ (Products & Services)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tên Sản Phẩm (Product Name)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Đường dẫn (Slug)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Loại Sản Phẩm (Type)',
            type: 'string',
            options: {
                list: [
                    { title: 'Khóa Học (Course)', value: 'course' },
                    { title: 'Dịch Vụ (Service)', value: 'service' },
                    { title: 'Tư vấn (Consultancy)', value: 'consultancy' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Giá Bán (Price)',
            type: 'number',
            description: 'Giá niêm yết tính bằng VNĐ.',
            hidden: ({ document }) => !!document?.isContactRequired,
        }),
        defineField({
            name: 'isContactRequired',
            title: 'Yêu Cầu Liên Hệ (Contact Required)',
            type: 'boolean',
            initialValue: false,
            description: 'Nếu bật, giá sẽ bị ẩn và hiện "Liên hệ".',
        }),
        defineField({
            name: 'description',
            title: 'Mô Tả Ngắn (Short Summary)',
            type: 'text',
            rows: 3,
            description: 'Xuất hiện trên card sản phẩm.',
        }),
        defineField({
            name: 'features',
            title: 'Tính Năng & Lợi Ích (Features)',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Danh sách các điểm nổi bật (bullet points).',
        }),
        defineField({
            name: 'icon',
            title: 'Biểu Tượng (Lucide Icon Name)',
            type: 'string',
            description: 'Tên icon từ thư viện Lucide (e.g., Scroll, Zap, Shield).',
            initialValue: 'Scroll',
        }),
        defineField({
            name: 'image',
            title: 'Hình Ảnh Bìa (Cover Image)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'status',
            title: 'Trạng Thái (Status)',
            type: 'string',
            options: {
                list: [
                    { title: 'Mở Bán (Available)', value: 'available' },
                    { title: 'Hết Hàng (Sold Out)', value: 'sold-out' },
                    { title: 'Sắp Ra Mắt (Coming Soon)', value: 'coming-soon' },
                ],
            },
            initialValue: 'available',
        }),
        defineField({
            name: 'content',
            title: 'Nội Dung Chi Tiết (Detailed Content)',
            type: 'blockContent',
            description: 'Nội dung chi tiết cho landing page của sản phẩm.',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'type',
            media: 'image',
        },
    },
})
