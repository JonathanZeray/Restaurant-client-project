const currys = {
    name: "currys",
    title: "Currys",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" },
      },
      {
        name: "price",
        title: "Price",
        type: "number",
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
        description: "Position of the item in the menu",
      },
    ],
    orderings: [
      {
        title: 'Menu Order',
        name: 'menuOrderAsc',
        by: [
          {field: 'order', direction: 'asc'}
        ]
      }
    ]
  };
  
  export default currys;
  