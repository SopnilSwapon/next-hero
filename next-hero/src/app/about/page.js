import Link from 'next/link'
import React from 'react'

export default function AboutPage() {
  return (
    <div className='mt-6 flex gap-5 '>
    <Link className='bg-black p-2 rounded text-white' href='/about/mission'>Mission</Link>
    <Link className='bg-black p-2 rounded text-white' href='/about/history'>History</Link>
    </div>
  )
}

