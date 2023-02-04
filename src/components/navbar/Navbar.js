import React from 'react'
import { navLinks } from './utils/NavDB'

export default function Navbar() {
  return (
    <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
<div className='space-y-8 w-full'>
  {navLinks.slice(0,4).map((Link)=> (
<div key={Link.id} className="w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-tranparent">
  <span>{Link.icon}</span>
  <h1 className='text-gray-600 group-hover:text-black xl-flex '>{Link.title}</h1>
</div>

  ))}
  
</div>
<div className='xl:flex my-10 flex-col items-center justify-center space-y-4 p-4'>
  <div className=' text-start flex-col flex'>
  <span className='font-bold'>
    Grow Your 
    
    </span>
    <span className='font-bold'>Saving Me</span>
    </div>
    <p> Pick an investment strategy that reflexts your goals</p>
    
<button className='w-full py-2 px-3 bg-black text-white'>Pro</button>
</div>



    </nav>
  );
}
