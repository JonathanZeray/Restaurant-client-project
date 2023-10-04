import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image"

type Props = {
  params: { project: string };
};
export default async function ({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex justify-between items-center">
        <h1 className="text-6xl drop-shadow font-extrabold">{project.name}</h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap
          hover:bg-gray-200 cursor-pointer transition"
        >
          View Project
        </a>
      </header>
      <div className="text-lg text-gray-700 mt-5 ">
        <PortableText value={project.content} />
      </div>
      <Image src={project.image}
      alt={project.name}
      width={1920}
      height={1080}
      className="mt-10 border-2 border-gray-700 object-cover rounded-xl p-1"
      />
    </div>
  );
}
