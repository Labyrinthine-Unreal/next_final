import { motion } from 'framer-motion';
import logoPath from '@components/data/logoPath'

const svgVariants = {
    initial: {
        opacity: 0.5,
        scale: 0.98,
        pathLength: 0,
    },
    animate: {
        opacity: 1,
        pathLength: 1,
        scale: 1.02,
        transition: {
            duration: 14,
            ease: 'easeInOut',
            repeat: 2,
            repeatType: 'reverse'
        }
    }
}

export default function TauorsDAOIcon() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="10 140 720 250"
      width="400"
      height="280"
    >
      <motion.path
        stroke="#004D40"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        variants={svgVariants}
        initial="initial"
        animate="animate"
        d={logoPath}
      />
    </motion.svg> 
  );
}