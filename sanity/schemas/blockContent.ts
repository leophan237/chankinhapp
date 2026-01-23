import { defineField, defineType, defineArrayMember } from 'next-sanity'

// Block Content for Portable Text - supports images and quotes
export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'object',
  fields: [
    // Quote Block
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'quoteType',
      title: 'Quote Type',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Highlighted', value: 'highlighted' },
          { title: 'Pull Quote', value: 'pull' },
          { title: 'Emphasized', value: 'emphasized' },
        ],
      },
    }),
    // Image Block
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageCaption',
      title: 'Image Caption',
      type: 'string',
    }),
    // Video Block
    defineField({
      name: 'video',
      title: 'Video',
      type: 'object',
      fields: [
        defineField({
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),
    // Divider Block
    defineField({
      name: 'divider',
      title: 'Divider',
      type: 'string',
      options: {
        list: [
          { title: 'Line', value: 'line' },
          { title: 'Dotted Line', value: 'dotted' },
          { title: 'Double Line', value: 'double' },
          { title: 'Space', value: 'space' },
        ],
      },
    }),
    // Callout Block
    defineField({
      name: 'callout',
      title: 'Callout Box',
      type: 'object',
      fields: [
        defineField({
          name: 'content',
          title: 'Content',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'calloutType',
          title: 'Callout Type',
          type: 'string',
          options: {
            list: [
              { title: 'Info', value: 'info' },
              { title: 'Warning', value: 'warning' },
              { title: 'Important', value: 'important' },
              { title: 'Success', value: 'success' },
            ],
          },
        }),
      ],
    }),
    // Reference Block
    defineField({
      name: 'reference',
      title: 'Cross Reference',
      type: 'reference',
      to: [{ type: 'post' }],
    }),
    // List Block
    defineField({
      name: 'list',
      title: 'List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'listItem',
          fields: [
            defineField({
              name: 'content',
              title: 'Content',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
    // Numbered List Block
    defineField({
      name: 'numberedList',
      title: 'Numbered List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'numberedListItem',
          fields: [
            defineField({
              name: 'content',
              title: 'Content',
              type: "text",
            }),
          ],
        }),
      ],
    }),
    // Code Block
    defineField({
      name: 'code',
      title: 'Code Block',
      type: 'object',
      fields: [
        defineField({
          name: 'language',
          title: 'Language',
          type: 'string',
          options: {
            list: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'Python', value: 'python' },
              { title: 'Bash', value: 'bash' },
              { title: 'Other', value: 'other' },
            ],
          },
        }),
        defineField({
          name: 'code',
          title: 'Code',
          type: 'text',
        }),
      ],
    }),
    // Table Block
    defineField({
      name: 'table',
      title: 'Table',
      type: 'object',
      fields: [
        defineField({
          name: 'headers',
          title: 'Headers',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
          name: 'rows',
          title: 'Table Rows',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'array',
              name: 'tableRow',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
