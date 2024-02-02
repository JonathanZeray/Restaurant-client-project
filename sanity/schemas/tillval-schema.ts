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
    ],
  };
  
  export default tillval;
  