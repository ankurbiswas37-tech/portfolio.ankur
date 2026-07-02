export const contactSchema = {
  name: 'send-message',
  title: 'Client Messages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      readonly: true,
    },
    {
      name: 'email',
      title: 'Client Email',
      type: 'string',
      readonly: true,
    },
    {
      name: 'details',
      title: 'Project Details / Message',
      type: 'text',
      readonly: true,
    },
    {
      name: 'createdAt',
      title: 'Submitted At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
  ],
}