import clsx from 'clsx'
import React from 'react'

export default function SectionHeading({heading, subheading}: {subheading?:string, heading: string}) {
  return (
    <div className='flex flex-col gap-1'>
    <h2 className={clsx('text-3xl font-medium capitalize text-center', !subheading && 'mb-8' )}>{heading}</h2>
    {subheading &&
      <h4 className='mb-8 opacity-70 text-center'>{subheading}</h4>
    }
    </div>
  )
}
