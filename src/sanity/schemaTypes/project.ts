export default {
  name: 'portfolioProject',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Name / Company Title',
      type: 'string',
      description: 'e.g., FARWELL + GERVASE or COLOR GRADING',
    },
    {
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
    },
    {
      name: 'label',
      title: 'Asset Label',
      type: 'string',
      description: 'e.g., Asset #1, Asset #2',
    },
    {
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'website',
      title: 'Website URL (Optional)',
      type: 'string',
      description: 'Only for Brand Identity or Website links',
    },
    {
      name: 'videoUrl',
      title: 'Video URL (Optional)',
      type: 'url',
      description: 'YouTube/Vimeo links (Only for Video section)',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    {
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
    },
  ],
};