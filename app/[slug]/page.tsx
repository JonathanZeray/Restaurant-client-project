import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <div className="flex flex-col ml-8">
      <h1 className="my-12 font-extrabold text-6xl">{page.title}</h1>
      <PortableText value={page.content} />
    </div>
  );
}
