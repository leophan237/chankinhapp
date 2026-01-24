import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Chân Kinh',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'element',
            title: 'Element',
            type: 'string',
            options: {
                list: [
                    { title: 'Đất (Earth)', value: 'earth' },
                    { title: 'Nước (Water)', value: 'water' },
                    { title: 'Lửa (Fire)', value: 'fire' },
                    { title: 'Khí (Air)', value: 'air' },
                    { title: 'Không (Void)', value: 'void' },
                ],
            },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
