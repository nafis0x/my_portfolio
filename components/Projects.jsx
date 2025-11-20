import projects from "@/public/assets/data";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div className="h-auto">
      {projects.map((project) => (
        <div
          key={project.id}
          style={{ backgroundColor: project.bgcolor }}
          className="h-screen sticky top-0 w-full py-10 px-4 md:px-3 2xl:px-0"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
