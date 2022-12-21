import React from 'react'

export default function Planet({
  src,
  className,
}: {
  src: string
  className: string
}) {
  return (
    <img
      className={`hidden lg:block absolute z-10 ${className}`}
      alt="Planet"
      src={src}
    />
  )
}
