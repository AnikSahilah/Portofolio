// Reusable animation variants for Framer Motion

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

export const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export const slideDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

export const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

/**
 * Helper to create scroll-reveal variants with configurable options
 * @param {object} options - { direction, distance, duration, delay }
 */
export function createScrollReveal(options = {}) {
  const {
    direction = 'up',
    distance = 40,
    duration = 0.7,
    delay = 0,
  } = options

  const axis = direction === 'up' || direction === 'down' ? 'y' : 'x'
  const sign = direction === 'up' || direction === 'left' ? 1 : -1

  return {
    hidden: { opacity: 0, [axis]: distance * sign },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration, delay },
    },
  }
}
