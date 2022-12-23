import React, { createContext, FC, useEffect, useState } from 'react'
import { ContextChildren } from '../types'

type TAnimationProp = {
  x: number
  y: number
}

export const StarAnimationContext = createContext<any>(undefined!)

export const StarAnimationContextProvider = ({ children }: ContextChildren) => {
  const [animationProps, setAnimationProps] = useState<TAnimationProp>({
    x: 0,
    y: 0,
  })

  const handleMouseMove = (event: MouseEvent) => {
    const x = event.clientX / window.innerWidth
    const y = event.clientY / window.innerHeight
  }

  return (
    <StarAnimationContext.Provider
      value={{
        handleMouseMove,
        animationProps,
      }}
    >
      {children}
    </StarAnimationContext.Provider>
  )
}
