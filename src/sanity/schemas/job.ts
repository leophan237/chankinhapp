import { defineField, defineType } from 'sanity'

export const job = defineType({
    name: 'job',
    title: 'Job Position / Vị Trí Tuyển Dụng',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Chức Danh (Job Title)',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'department',
            title: 'Phòng Ban (Department)',
            type: 'string',
            options: {
                list: [
                    { title: 'Ban Quản Trị (Management)', value: 'Management' },
                    { title: 'Vận Hành (Operations)', value: 'Operations' },
                    { title: 'Marketing', value: 'Marketing' },
                    { title: 'Tài Chính (Finance)', value: 'Finance' },
                    { title: 'Nhân Sự (HR)', value: 'HR' },
                    { title: 'Khác (Other)', value: 'Other' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Địa Điểm (Location)',
            type: 'string',
            initialValue: 'TP. Hồ Chí Minh',
        }),
        defineField({
            name: 'type',
            title: 'Hình Thức (Type)',
            type: 'string',
            options: {
                list: [
                    { title: 'Toàn Thời Gian (Full-time)', value: 'Full-time' },
                    { title: 'Bán Thời Gian (Part-time)', value: 'Part-time' },
                    { title: 'Hợp Đồng (Contract)', value: 'Contract' },
                    { title: 'Thực Tập (Internship)', value: 'Internship' },
                ],
            },
            initialValue: 'Full-time',
        }),
        defineField({
            name: 'salary',
            title: 'Mức Lương (Salary Range)',
            type: 'string',
            placeholder: 'e.g. 8.000.000 - 12.000.000 VNĐ or Thoả thuận',
        }),
        defineField({
            name: 'description',
            title: 'Mô Tả Ngắn (Short Description)',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'larkDocUrl',
            title: 'Link JD (Lark Doc URL)',
            type: 'url',
            description: 'Link đến tài liệu mô tả công việc chi tiết trên Lark.',
        }),
        defineField({
            name: 'larkFormUrl',
            title: 'Link Ứng Tuyển (Lark Form URL)',
            type: 'url',
            description: 'Link đến form ứng tuyển trên Lark (nếu có, để trống sẽ dùng form mặc định).',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Ngày Đăng (Published At)',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'department',
        },
    },
})
