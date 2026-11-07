import { useReducedMotion } from 'framer-motion';

const offsets = {
  up: { x: 0, y: 80 },
  down: { x: 0, y: -80 },
  left: { x: -80, y: 0 },
  right: { x: 80, y: 0 },
};
const visible = { opacity: 1, x: 0, y: 0 };

export default function useScrollReveal() {
  const reduceMotion = useReducedMotion();

  const reveal = (direction = 'up') => ({
    'data-scroll-reveal': direction,
    variants: { hidden: { opacity: 0, ...offsets[direction] }, visible },
    transition: { duration: reduceMotion ? 0 : 0.65, ease: 'easeOut' },
  });

  // Observe a stationary parent so the child's slide cannot toggle its own visibility.
  reveal.trigger = {
    initial: reduceMotion ? false : 'hidden',
    animate: reduceMotion ? 'visible' : 'hidden',
    whileInView: 'visible',
    whileFocus: 'visible',
    viewport: { once: false, amount: 0.1 },
  };
  return reveal;
}
