const easing = [0.2, -0.5, 0.5, 1];

export const parentVariant = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
    },
  },
};

export const cardVariant = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: easing
    }
  },
  animate: {
    y: 0.5,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};


