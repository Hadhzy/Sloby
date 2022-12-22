import React from 'react'

export default function SlobyInput({
  type,
  name,
  label,
}: {
  type: string
  name: string
  label: string
}) {
  return (
    <>
      <input
        type={type}
        className="w-[600px] mb-[45px] bg-[#111111] h-[40px] rounded-lg outline-none "
        placeholder={label}
      />
    </>
  )
}
