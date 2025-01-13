export const bannerVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5
      },
   
    },
    animate_p: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1.5
      }
    }

  }



export  const buttonVariants = {
    initial: {
      opacity: 0,
    },
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

export const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75
    } 
  },
}

export const textVariants = {
  initial: {
    opacity: 0
  },
  inView: {
    opacity: 1,
    transition: {
      duration: 3
    }
  }
}

export const textScaleVariants = {
  initial: {
    opacity: 0,
    scaleX: 0
  },
  inView: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.75
    }
  }
}