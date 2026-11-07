import { PROJECTS } from '../constants';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const renderProject = (project, reveal) => (
  <article key={project.title} className="grid items-start gap-6 border-b border-neutral-800 py-10 last:border-0 lg:grid-cols-2 lg:gap-10">
    <motion.div {...reveal.trigger} className="min-w-0">
      <motion.figure {...reveal('left')} className="min-w-0">
        {project.video ? (
          <video className="max-h-[420px] w-full rounded bg-neutral-900" controls preload="none" aria-label={project.title + ' demo'}>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      ) : (
        <img src={project.image} alt={project.imageAlt || project.title + ' preview'} loading="lazy" className="max-h-[420px] w-full rounded object-contain object-top" />
      )}
        {project.caption && <figcaption className="mt-2 text-sm text-neutral-500">{project.caption}</figcaption>}
      </motion.figure>
    </motion.div>
    <motion.div {...reveal.trigger} className="min-w-0">
      <motion.div {...reveal('right')} className="min-w-0">
        {project.status && <p className="mb-2 text-sm text-cyan-200">{project.status}</p>}
        <h3 className="mb-4 text-2xl font-semibold text-neutral-100">{project.title}</h3>
        <p className="mb-4 leading-relaxed text-neutral-300">{project.description}</p>
        {project.details?.map((detail) => <p key={detail} className="mb-4 leading-relaxed text-neutral-400">{detail}</p>)}
        <ul aria-label="Technologies" className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => <li key={tech} className="rounded bg-neutral-900 px-2 py-1 text-sm">{tech}</li>)}
        </ul>
        <div className="mt-5 flex flex-wrap gap-6">
          {project.website && (
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-cyan-200 underline-offset-4 hover:underline">
            {project.linkLabel || 'Visit website'} <FaArrowRight aria-hidden="true" />
          </a>
        )}
          {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-cyan-200 underline-offset-4 hover:underline">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
        )}
        </div>
      </motion.div>
    </motion.div>
  </article>
);

const Projects = () => {
  const reveal = useScrollReveal();
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-neutral-800 py-16">
      <motion.div {...reveal.trigger}>
        <motion.h2 {...reveal('down')} id="projects-heading" className="mb-4 text-center text-3xl">Selected projects</motion.h2>
      </motion.div>
      {PROJECTS.map(project => renderProject(project, reveal))}
    </section>
  );
};

export default Projects;
