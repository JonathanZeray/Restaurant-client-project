import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/dist/client/link";
export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-7xl font-extrabold">Hi, I'm Jonathan!</h1>
      <p className="mt-5 text-xl text-gray-600">
        Have a look at some of my projects down below.
      </p>

      <h2 className="mt-16 font-bold text-gray-700 text-3xl">My projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-2 hover:scale-105 hover:border-blue-500 transition mx-auto"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={50}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
