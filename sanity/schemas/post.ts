import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post - Bài Viết Chân Kinh',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title - Tiêu đề bài viết',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug - Đường dẫn thân thiện',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'element',
      title: 'Element - Y tố cấu thành',
      type: 'string',
      options: {
        list: [
          { title: 'Đất (Earth) - Vật chất, công cụ', value: 'earth' },
          { title: 'Nước (Water) - Xúc cảm, tinh thần', value: 'water' },
          { title: 'Lửa (Fire) - Hành động, kiến trúc', value: 'fire' },
          { title: 'Khí (Air) - Tâm trí, triết lý', value: 'air' },
          { title: 'Không (Void) - Hư vô, tiềm năng', value: 'void' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description - Tóm tắt cho preview card',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image - Ảnh bìa chính',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content - Nội dung chi tiết (Portable Text)',
      type: 'blockContent',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt - Trích dẫn ngắn cho danh sách',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'tags',
      title: 'Tags - Từ khóa phân loại',
      type: 'array',
      of: [defineField({
        name: 'tag',
        type: 'string',
      })],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At - Thời gian xuất bản',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time - Thời gian đọc ước tính',
      type: 'string',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured - Bài viết nổi bật',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isDraft',
      title: 'Draft - Bài viết nháp',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      element: 'element',
      description: 'description',
      isFeatured: 'isFeatured',
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
        subtitle: `${selection.element} - Featured ${selection.isFeatured ? '⭐' : ''}`,
        description: selection.description,
      }
    },
  },
})
