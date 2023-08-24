import React from 'react'

export default function SectionHeading({heading}: {heading: string}) {
  return (
    <h2 className='mb-8 text-3xl font-medium capitalize text-center'>{heading}</h2>
  )
}
