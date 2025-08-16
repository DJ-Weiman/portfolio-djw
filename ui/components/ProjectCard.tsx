import { RiGithubLine } from "react-icons/ri";
import TechChip from "./TechChip";
import { PiLinkSimpleBold } from "react-icons/pi";

type Props = {
  image: string;
  title: string;
  description: string;
  techs: string[];
  githubUrl?: string;
  liveUrl?: string;
};

function ProjectCard({
  image,
  title,
  description,
  techs,
  githubUrl,
  liveUrl,
}: Props) {
  return (
    <div className="rounded-xl border border-gray-400 shadow-md bg-slate-700 max-w-[650px]
     flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="bg-slate-900 w-full rounded-t-xl p-2">
        <img
          src={image}
          alt={title}
          className="w-full h-[180px] object-contain"
        />
      </div>
      <div className="p-4 flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold text-slate-100">{title}</h3>
        <p className="text-center">{description}</p>
        <div className="mb-4 w-full flex flex-wrap justify-center gap-2">
          {techs.map((tech, idx) => (
            <TechChip key={idx} label={tech} />
          ))}
        </div>
        <div className="flex gap-4 mt-2 justify-between w-full px-4">
          {githubUrl && (
            <div className="flex items-center gap-1">
              <RiGithubLine className="fill-blue-600" />
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Visit Project
              </a>
            </div>

          )}
          {liveUrl && (
            <div className="flex items-center gap-1">
              <PiLinkSimpleBold className="fill-green-700" />
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-medium hover:underline"
              >
                Live Link
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;