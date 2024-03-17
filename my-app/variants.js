export const fadeIn = (direction, delay) => {
  if (direction === "none") {
    return {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  } else {
    return {
      hidden: {
        y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
        opacity: 0,
        x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  }
};

export const slideIn = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 170,
      damping: 20,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      type: "spring",
      stiffness: 75,
      damping: 20,
    },
  },
};
