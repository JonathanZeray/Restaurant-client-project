const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Position of the item in the nav",
    },
  ],
  orderings: [
    {
      title: "Nav Order",
      name: "navOrderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};

export default page;
