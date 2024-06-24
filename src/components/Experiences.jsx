import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, _) => (
          <div key={_} className="mb-8 flxe flex-wrap lg:justify-center ">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img src={experience.image} alt="" />
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{' '}
                <span className="text-sm text-blue-100">
                  {experience.company}
                </span>
              </h6>
              <p className="w-full mb-4 text-neutral-400 ">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-y-2">
                {experience.technologies.map((tech, _) => (
                  <span
                    key={_}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
