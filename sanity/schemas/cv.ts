import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cv',
  title: 'CV',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'institution',
              title: 'Institution',
              type: 'string',
            }),
            defineField({
              name: 'degree',
              title: 'Degree',
              type: 'string',
            }),
            defineField({
              name: 'startDate',
              title: 'Start Date',
              type: 'string',
            }),
            defineField({
              name: 'endDate',
              title: 'End Date',
              type: 'string',
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
            }),
            defineField({
              name: 'position',
              title: 'Position',
              type: 'string',
            }),
            defineField({
              name: 'startDate',
              title: 'Start Date',
              type: 'string',
            }),
            defineField({
              name: 'endDate',
              title: 'End Date',
              type: 'string',
            }),
            defineField({
              name: 'responsibilities',
              title: 'Responsibilities',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'technologies',
              title: 'Technologies',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'skill',
              title: 'Skill',
              type: 'string',
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'language',
              title: 'Language',
              type: 'string',
            }),
            defineField({
              name: 'proficiency',
              title: 'Proficiency',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'date',
              title: 'Date',
              type: 'string',
            }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                },
              ],
            }),
            defineField({
              name: 'institution',
              title: 'Institution',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
});
