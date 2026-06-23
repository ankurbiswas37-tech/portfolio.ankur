import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'portfolioProject',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Name / Company Title',
      type: 'string',
      description: 'e.g., FARWELL + GERVASE or COLOR GRADING',
    }),
    defineField({
      name: 'mainCategory',
      title: 'Main Category',
      type: 'string',
      options: {
        list: [
          { title: 'Brand Identity', value: 'brand-identity' },
          { title: 'Video Editing', value: 'video-editing' },
          { title: 'Digital Design', value: 'digital-design' },
          { title: 'GHL Funnel Builder', value: 'ghl-funnel-builder' },
        ],
      },
    }),
    defineField({
      name: 'label',
      title: 'Asset Label',
      type: 'string',
      description: 'e.g., Asset #1, Asset #2',
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'website',
      title: 'Website URL (Optional)',
      type: 'string',
      description: 'Only for Brand Identity or Website links',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (Optional)',
      type: 'url',
      description: 'YouTube/Vimeo links (Only for Video section)',
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
    }),
    defineField({
      name: 'nestedImages',
      title: 'Gallery Images / Assets',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Asset Name / Caption',
            },
          ],
        },
      ],
    }),
  ],
});