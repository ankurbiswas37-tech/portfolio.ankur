export const contactSchema = {
  name: 'send-message',
  title: 'Client Messages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'email',
      title: 'Client Email',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'details',
      title: 'Project Details / Message',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'createdAt',
      title: 'Submitted At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      readOnly: true,
    }
  ]
};