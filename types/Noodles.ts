import { PortableTextBlock } from "sanity";

export type Noodles = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  price: number;
  content: PortableTextBlock[];
};