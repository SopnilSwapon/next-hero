"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = 
    [
     
     {
        path: '/contact',
        title: 'Contact'
     },
     {
        path: '/about',
        title: 'About'
     },
     {
        path: '/blogs',
        title: 'Blogs'
     },
     {
        path: '/services',
        title: 'Services'
     },
     {
        path: '/dashboard',
        title: 'Dashboard'
     },
     {
        path: '/categories',
        title: 'Categories'
     }
    ]
    const handler = () =>{
     router.push('/login')
    };
    if(pathName.includes('dashboard')){
      return (
         <div className='bg-green-300 flex gap-3 font-bold'>
           <h2>dashboard LayOUT</h2>
           <Link href='/'>Home</Link>
         </div>
      )
    }
    return (
        <nav className="flex gap-5 text-white justify-between items-center bg-green-500 p-2 rounded">
          <h2 className='text-2xl font-bold'>Next-Hero</h2>
          <ul className="flex gap-5 justify-between items-center font-bold">
            {
                links.map(link =><Link className={pathName == link.path && 'text-black'} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
          <button onClick={handler} className='bg-sky-600 p-2 rounded font-bold'>Login</button>
        </nav>
    );
};

export default Navbar;