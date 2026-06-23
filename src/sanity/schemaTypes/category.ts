import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'categoryConfig',
  title: 'Category Cover Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Select Category',
      type: 'string',
      options: {
        list: [
          { title: 'Brand Identity', value: 'brand-identity' },
          { title: 'Video Editing', value: 'video-editing' },
          { title: 'Digital Design', value: 'digital-design' },
          { title: 'GHL Funnel Builder', value: 'ghl-funnel-builder' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Category Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
  ],
});