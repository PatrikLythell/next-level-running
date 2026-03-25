import type { CollectionConfig } from 'payload'

export const Coaches: CollectionConfig = {
  slug: 'coaches',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'city', 'sortOrder'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'credentials',
      type: 'array',
      fields: [
        {
          name: 'credential',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'personalBests',
      type: 'text',
    },
    {
      name: 'merits',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'instagram',
      type: 'text',
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
