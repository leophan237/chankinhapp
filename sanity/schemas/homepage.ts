import { defineField, defineType } from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'Trang Chủ',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Tiêu đề chính',
            type: 'string',
            initialValue: 'CHÂN KINH GROUP',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Phụ đề',
            type: 'string',
            initialValue: 'Digital Monastery for Entrepreneurs',
        }),
        defineField({
            name: 'introduction',
            title: 'Lời dẫn nhập',
            type: 'text',
            initialValue: 'Nơi ranh giới giữa thế giới vật chất và tinh thần mờ nhạt. Một không gian số cho những người doanh nhân tìm kiếm sự bình an trong tâm hồn.',
            rows: 3,
        }),
        defineField({
            name: 'buttonText',
            title: 'Nút bấm',
            type: 'string',
            initialValue: 'Bước vào',
        }),
        defineField({
            name: 'bottomQuote',
            title: 'Câu trích dẫn cuối trang',
            type: 'string',
            initialValue: 'MỌI CON ĐƯỜNG ĐỀU DẪN VÀO BÊN TRONG',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Nội dung Trang Chủ'
            }
        }
    }
})
