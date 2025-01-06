import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: "blog",
  title: "blog",
  type: "document",

  fields: [
    defineField({
      name: "Title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "Description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "Title",
      },
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      }
    }),
    defineField({
      title: "Block",
      name: "block",
      type: "array",
      of: [{type: 'block'}]
    }),
  ],
});