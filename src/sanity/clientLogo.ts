import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client / Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});