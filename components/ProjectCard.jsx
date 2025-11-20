import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  project: {
    id,
    title,
    technologiesUsed,
    keyFeatures,
    liveDemo,
    githubLink,
    visuals,
  },
}) {
  return (
    <div className="w-full max-w-5xl mx-auto h-full grid md:grid-rows-[60%_40%] grid-cols-1 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={visuals[0]}
          alt={`${title} screenshot`}
          height={1080}
          width={1920}
          className="w-full h-full object-left-top object-fill md:object-cover"
        />
      </div>

      {/* Details section */}
      <div className="p-3 w-full sm:p-5 h-full overflow-hidden">
        <div className="flex flex-col md:flex-row mb-2 md:mb-0 items-center justify-between">
          <h2 className="text-xl lg:text-3xl font-bold mb-3">{title}</h2>
          <div className="flex  items-center justify-between gap-5 lg:col-span-2">
            <Link
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-black hover:text-gray-200">
                Live
              </span>
            </Link>
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-black hover:text-gray-200">
                GitHub
              </span>
            </Link>
          </div>
        </div>
        <div className="md:flex md:space-x-4 ">
          <div className="md:w-1/3 mb-3">
            <h3 className="font-semibold text-base lg:text-xl">
              Technologies Used:
            </h3>
            <ul className="list-disc list-inside">
              {technologiesUsed.map((tech, index) => (
                <li key={index} className="text-sm lg:text-base">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-2/3 mb-4">
            <h3 className="font-semibold text-base lg:text-xl">
              Key Features:
            </h3>
            <ul className="list-disc list-inside">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="text-sm lg:text-base">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
