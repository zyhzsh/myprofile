import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const Experiences = () => {
  const reveal = useScrollReveal();
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-neutral-800 py-16">
      <motion.div {...reveal.trigger}>
        <motion.h2 {...reveal('down')} id="experience-heading" className="mb-12 text-center text-3xl">Work experience</motion.h2>
      </motion.div>
      <div className="space-y-12">
        {EXPERIENCES.map((experience) => (
          <article key={experience.company} className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
            <motion.div {...reveal.trigger} className="min-w-0">
              <motion.div {...reveal('left')}>
                <img src={experience.image} alt={experience.company + ' project'} loading="lazy" className="mb-3 max-h-28 max-w-[220px] rounded object-contain object-left" />
                <p className="text-sm text-neutral-400">{experience.year}</p>
              </motion.div>
            </motion.div>
            <motion.div {...reveal.trigger} className="min-w-0">
              <motion.div {...reveal('right')} className="min-w-0">
                <h3 className="mb-1 text-xl font-semibold text-neutral-100">{experience.company}</h3>
                <p className="mb-4 text-sm text-cyan-200">{experience.role}</p>
                <p className="mb-4 leading-relaxed text-neutral-300">{experience.description}</p>
                {experience.highlights && (
                <ul className="mb-5 list-disc space-y-3 pl-5 leading-relaxed text-neutral-400">
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
            )}
                <ul aria-label="Technologies" className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <li key={tech} className="rounded bg-neutral-900 px-2 py-1 text-sm text-neutral-300">{tech}</li>
              ))}
                </ul>
              </motion.div>
            </motion.div>
          </article>
      ))}
      </div>
    </section>
  );
};

export default Experiences;
