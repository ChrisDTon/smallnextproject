import React from 'react'
import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <nav className='bg-slate-600 flex p-4 justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl'>
        <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
            <Link href={'/'}>Shoep!</Link>
        </h1>
        <Search />
    </nav>
  )
}