import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import {
  SiAngular, SiMongodb, SiNestjs, SiPostgresql, SiSpringboot, SiTypescript,
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: RiReactjsLine, color: 'text-cyan-300' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'Angular', icon: SiAngular, color: 'text-red-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
  { name: 'NestJS', icon: SiNestjs, color: 'text-rose-400' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-lime-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
];

const Technologies = () => {
  const reveal = useScrollReveal();
  const reduceMotion = useReducedMotion();
  return (
    <section id="technologies" aria-labelledby="technologies-heading" className="border-b border-neutral-800 py-14">
      <motion.div {...reveal.trigger}>
        <motion.h2 {...reveal('down')} id="technologies-heading" className="mb-10 text-center text-3xl">Technologies</motion.h2>
      </motion.div>
      <motion.div {...reveal.trigger}>
        <motion.div {...reveal('left')}>
          <ul
            aria-label="Technology stack"
            className="mx-auto grid w-fit grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 xl:grid-cols-8"
          >
            {technologies.map(({ name, icon: Icon, color }, index) => (
              <motion.li
                key={name}
                title={name}
                data-technology-float
                className="flex w-28 flex-col items-center gap-3"
                initial={{ y: reduceMotion ? 0 : -10 }}
                animate={reduceMotion ? { y: 0 } : { y: [-10, 10] }}
                transition={reduceMotion ? { duration: 0 } : {
                  duration: index % 2 === 0 ? 2 : 3.5,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border-4 border-neutral-800 p-4">
                  <Icon size={72} className={'shrink-0 ' + color} aria-hidden="true" />
                </span>
                <span className="min-h-5 text-center text-sm leading-5">{name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
