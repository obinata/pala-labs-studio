import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'titleJa',
      title: 'Title (Japanese)',
      type: 'string',
    }),
    defineField({
      name: 'excerptEn',
      title: 'Excerpt (English)',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerptJa',
      title: 'Excerpt (Japanese)',
      type: 'text',
    }),
    defineField({
      name: 'contentEn',
      title: 'Content (English)',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image', options: {hotspot: true}},
        {type: 'youtube'},
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'contentJa',
      title: 'Content (Japanese)',
      type: 'array',
      of: [
          {type: 'block'},
          {type: 'image', options: {hotspot: true}},
          {type: 'youtube'},
        ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
