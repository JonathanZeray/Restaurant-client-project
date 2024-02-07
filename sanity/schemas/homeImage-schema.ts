const homeimage = {
  name: "homeImage",
  title: "HomeImage",
  type: "document",
  fields: [
    {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true },
        fields: [{ name: "alt", title: "Alt", type: "string" }],
      },
  ],
};

export default homeimage;