import { PROJECTS } from "../constants";

export function Projects() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap gap-12 lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img src={project.image} 
              className="w-96 h-64 mb-6 rounded"
              alt={project.title}
            />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">
                {project.description}
              </p>
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}