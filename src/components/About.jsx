
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
const About = () => {
  const reveal = useScrollReveal();
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="mt-14 mb-6 text-center text-3xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <motion.div {...reveal.trigger}>
          <motion.div {...reveal('up')}>
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-2xl pb-12 leading-relaxed">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
