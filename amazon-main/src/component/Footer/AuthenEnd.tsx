import React from 'react'
import ButtonAuthen from '../Header/Authen/ButtonAuthen'
import Link from 'next/link'

export default function AuthenEnd() {
  return (
    <div className='flex flex-col justify-center items-center py-5 border-2 mt-7 bg-white'>
      <p>See personalized recommendations</p>
      <div className='py-2'>
      <ButtonAuthen description='Sign in' href='/signin'/>
      </div>
      <p>New customer? <Link href={"/"} className='font-bold'>Start here.</Link></p>
    </div>
  )
}
