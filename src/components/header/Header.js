import React from 'react'
import { BellIcon,  CpuChipIcon, InboxIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <div className='bg-[#e8f8e6] w-full py-6 items-center justify-between flex px-12'>
      <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
      <MagnifyingGlassIcon className="w-4 h-4"/>
<input type="text" placeholder= "Search.." className= "bg-transparent font-normal outline-none " />


      </div>

<div className='items-center w-full justify-center flex space-x-4'>
  <CpuChipIcon className="w-6 h-6"/>
  <h1 className='text-xl text-gray-900 font-bold'>Admin Panel</h1>
</div>

<div className='items-center w-full justify-end flex space-x-6'>
  <BellIcon className="header-icon"/>
  <InboxIcon className='header-icon'/>
  <UserCircleIcon className='header-icon'/>
</div>




    </div>
  )
}
