import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const reveal = useScrollReveal();
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.div {...reveal.trigger}>
        <motion.h2
          {...reveal('down')}
          className="text-center my-10 text-4xl"
      >
          Get in Touch
        </motion.h2>
      </motion.div>
      <div className="text-center">
        <motion.div {...reveal.trigger}>
          <motion.p
            {...reveal('left')}
            className="py-4"
        >
            {CONTACT.address}
          </motion.p>
        </motion.div>
        <motion.div {...reveal.trigger}>
          <motion.a
            {...reveal('left')}
            href={`mailto:${CONTACT.email}`}
            className="inline-block break-words border-b"
        >
            {CONTACT.email}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
