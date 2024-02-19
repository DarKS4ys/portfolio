import React from 'react'
import { BiSolidPaperPlane } from 'react-icons/bi'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
    const { pending } = useFormStatus()
  return (
    <button className="dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20 hover:scale-110 active:scale-100 group flex items-center justify-center gap-2 h-[3rem] w-[8rem] hover:bg-gray-950 bg-gray-900 text-white rounded-full outline-none transition-all disabled:scale-100 disabled:bg-opacity-65" type='submit' disabled={pending}>{pending ? <div className="h-5 w-5 animate-spin border-white border-b-2 rounded-full"></div> : <>Submit <BiSolidPaperPlane className="text-sm opacity-80 transition-all group-active:opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:-translate-y-0"/> </>}</button>
  )
}
