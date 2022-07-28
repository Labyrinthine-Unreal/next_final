import { motion } from 'framer-motion';
import logoPath from '@components/data/logoPath'

const svgVariants = {
    initial: {
        opacity: 0.5,
        pathLength: 0,
        // offsetDistance: "0%", scale: 0.5
    },
    animate: {
        opacity: 1,
        pathLength: 1,
        // offsetDistance: "100%", scale: 1,
        transition: {
            duration: 15,
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
      viewBox="20 140 720 250"
      width="400"
      height="280"
    >
      <motion.path 
        // stroke="#36454F"
        stroke="black"
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