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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Asset Label (e.g., Asset #1, Ads, Short-form)',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image (Thumbnail)',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    
    /* 🎬 ভিডিওর জন্য নতুন সেকশন গ্রুপিং */
    defineField({
      name: 'videoType',
      title: 'Video Source Type',
      type: 'string',
      options: {
        list: [
          { title: 'None (Image Gallery Only)', value: 'none' },
          { title: 'YouTube / Vimeo URL', value: 'url' },
          { title: 'Direct MP4 File Upload', value: 'file' },
        ],
        layout: 'radio',
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'videoUrl',
      title: 'YouTube / Vimeo Video URL',
      type: 'url',
      hidden: ({ parent }) => parent?.videoType !== 'url',
    }),
    defineField({
      name: 'videoFile',
      title: 'Upload Direct MP4 Video File',
      type: 'file',
      options: {
        accept: 'video/mp4,video/x-m4v,video/*'
      },
      hidden: ({ parent }) => parent?.videoType !== 'file',
    }),

    defineField({
      name: 'nestedImages',
      title: 'Gallery Images / Assets (For Image Grids)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Asset Caption / Name',
            },
          ],
        },
      ],
      hidden: ({ parent }) => parent?.videoType === 'file' || parent?.videoType === 'url',
    }),
  ],
});