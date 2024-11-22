'use client'


import { useWindowScroll } from '@uidotdev/usehooks';
import React from 'react'

export default function BackToTop() {
    const [{ x, y }, scrollTo] = useWindowScroll();
  return (
    <div className='flex justify-center  py-3 bg-slate-700'>
      <button onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })} className='text-white'>Back to top</button>
    </div>
  )
}
