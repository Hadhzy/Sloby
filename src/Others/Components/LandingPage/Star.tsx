import React, { useState } from 'react'
function Star({ src }: { src: string }) {
  const [animation, setAnimation] = useState({ x: 0, y: 0 })
  const movingObject = {
    top: Math.random() * 100 + 'vh',
    left: Math.random() * 100 + 'vw',
  }

  const handleMouseMouve = (e: MouseEvent) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    setAnimation({
      x,
      y,
    })
    console.log(animation)
  }

  return (
    <img
      src={src}
      alt="Star"
      className="w-2 absolute top-0 left-0"
      style={{
        top: movingObject.top,
        left: movingObject.left,
      }}
    />
  )
}

export default Star
