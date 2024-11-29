import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({

      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Latest', value: 'breaking news' },
          { title: 'Education', value: 'education' },
          { title: 'Accident', value: 'accident' },
          { title: 'Technology', value: 'technology' },
          { title: 'Health', value: 'health' },
          { title: 'Sports', value: 'sports' },
          { title: 'Business', value: 'business' },
          { title: 'Entertainment', value: 'entertainment' },
          { title: 'Politics', value: 'politics' },
          { title: 'Environment', value: 'environment' },
          { title: 'Travel', value: 'travel' },
          { title: 'Food', value: 'food' },
          { title: 'Fashion', value: 'fashion' },
          { title: 'Home', value: 'home' },
          { title: 'Lifestyle', value: 'lifestyle' },
          { title: 'Automotive', value: 'automotive' },
          { title: 'Real Estate', value: 'real estate' },
          { title: 'Finance', value: 'finance' },
          { title: 'Art', value: 'art' },
          { title: 'Music', value: 'music' },
          { title: 'Film', value: 'film' },
          { title: 'Theater', value: 'theater' },
          { title: 'Sci/Tech', value: 'sci-tech' },
          { title: 'World', value: 'world' },
          { title: 'U.S.', value: 'us' },
          { title: 'Asia', value: 'asia' },

        ],

      },

    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',

    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})