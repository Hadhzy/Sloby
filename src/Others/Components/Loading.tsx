import React from 'react'

const loadingCircle = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem',
  backgroundColor: 'black',
}

export default function Loading() {
  const ThreeDotsWave = () => {
    return (
      <div>
        <span style={loadingCircle}></span>
        <span style={loadingCircle}></span>
        <span style={loadingCircle}></span>
      </div>
    )
  }

  return (
    <div>
      <ThreeDotsWave />
    </div>
  )
}
