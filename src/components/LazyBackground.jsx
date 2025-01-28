import React, { useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import { imageVariants, viewport } from '../animation/animation'

const LazyBackground = ({src, className, children, variants}) => {
  const ref = useRef(null)

  useEffect(() => {
    // intersection observer to determine when the element enters the viewport and dynamically load the backgroundImage.
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        ref.current.style.backgroundImage = `url(${src})`
        ref.current.style.opacity = 1
      }
    })

    if(ref.current) observer.observe(ref.current)

      return  () => observer.disconnect()

  },[src])

  return (
    <motion.div
    variants={variants}
    initial="initial"
    whileInView='inView'
    viewport={viewport}
    ref={ref} className={`${className}`}>
      {children}
    </motion.div>
  )
}

export default LazyBackground
