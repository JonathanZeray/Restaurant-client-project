const tillval = {
    name: "tillval",
    title: "tillval",
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
  
  export default tillval;
  