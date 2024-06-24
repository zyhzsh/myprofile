import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-2 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <hr className="my-8" />
      <div>
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center gap-x-4" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/4 flex justify-center"
            >
              {project.video ? (
                <video className="mb-6 rounded" height={400} controls>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={project.image}
                  width={400}
                  height={400}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-y-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <hr className="w-5/12 my-6" />
          </div>
        ))}
        <div className="flex w-full justify-center items-center text-5xl">
          ...
        </div>
      </div>
    </div>
  );
};

export default Projects;
