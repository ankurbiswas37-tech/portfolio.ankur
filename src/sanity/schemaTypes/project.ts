import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'portfolioProject',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Group Name (e.g., Social Media Ads)',
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
      title: 'Asset Label (e.g., Video Pack, Premium Cuts)',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Main Cover Image (Thumbnail)',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    
    /* 🎬 এখানে আনলিমিটেড ভিডিও আপলোডের জন্য অ্যারে ফিল্ড করা হলো */
    defineField({
      name: 'videosList',
      title: 'Upload Unlimited Videos (YouTube Links or MP4 Files)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'videoItem',
          title: 'Video Item',
          fields: [
            {
              name: 'videoTitle',
              title: 'Video Title / Name (e.g., Remodeling Ad 1)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'videoType',
              title: 'Source Type',
              type: 'string',
              options: {
                list: [
                  { title: 'YouTube / Vimeo URL', value: 'url' },
                  { title: 'Direct MP4 File Upload', value: 'file' },
                ],
                layout: 'radio',
              },
              initialValue: 'url',
            },
            {
              name: 'videoUrl',
              title: 'YouTube URL',
              type: 'url',
              hidden: ({ parent }) => parent?.videoType !== 'url',
            },
            {
              name: 'videoFile',
              title: 'Upload MP4 File',
              type: 'file',
              options: { accept: 'video/mp4,video/*' },
              hidden: ({ parent }) => parent?.videoType !== 'file',
            },
            {
              name: 'itemCover',
              title: 'Specific Thumbnail for this Video (Optional)',
              type: 'image',
              options: { hotspot: true },
            }
          ],
          preview: {
            select: {
              title: 'videoTitle',
              subtitle: 'videoType',
              media: 'itemCover'
            }
          }
        }
      ]
    }),

    defineField({
      name: 'nestedImages',
      title: 'Gallery Images (Only if this project is an Image Gallery)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'name', type: 'string', title: 'Caption' }],
        },
      ],
    }),
  ],
});