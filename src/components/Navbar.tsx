import React from 'react'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='bg-[#110515] border-solid border-[1.6px] px-20 py-5  border-[#E63C33] rounded-full'>
        <div className="flex gap-3 items-center text-white text-lg justify-end">
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link href={'https://github.com/gaurav-2-0-0-2/Klove'}>Github</Link>
        </div>
    </div>
  )
}
