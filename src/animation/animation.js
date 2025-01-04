export const bannerVariant = {
    initial: {
      opacity: 0,
      x: '-100vw'
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.2,
        duration: 3
      },
   
    },
    animate_p: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        delay: 2,
        duration: 3
      }
    }

  }

export  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: 'reverse'
       
      },
    }
  } 

export const linkVariants = {
  hover: {
    scale: 1.1,
    originX: 0,
    transition: {
      type: 'spring',
      stiffness: 300
    }

  }
}