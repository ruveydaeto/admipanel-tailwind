import React from 'react'
import InvestItem from "./InvestItem";
import { InvestDB } from "./utils/InvestmentsDB";


export default function leftPart() {
  return (
    <div className='col-span-2 min-h-[90vh] border-r border-feay-200 items-start justify-start flex flex-col w-full'>

      <div className='w-full items-start justify-start flex flex-col px-12 pt-12 pb-6'>
        <h1 className='font-bold text-xl xl:text-2xl pb-2'>My Card</h1>
        <p className='  text-md text-gray-800'>
          Fin all of your investment information on a card
        </p>
        <div className='items-start justify-start flex flex-col px-6 pt-8 pb-4 bg-green-400 mt-6 w-full'>
<h1>Ruveyda Eto</h1>
<h1 className='text-3xl xl:text-5xl font-bold py-6'>$2963648292 </h1> 

        </div>

        <div className='items-start justify-between flex  py-4 px-8 shadow-2xl bg-black shadow-emerald-200 w-full'>
          <span className='flex flex-col items-start justify-start text-white'>
<h1>Card nUMBER </h1>
<h3> **** **** *** 3411</h3>
</span> 

<span className='flex flex-col items-start justify-start text-white'>
  <h1>CVC</h1>
  <h3>277</h3>
</span>
        </div>

      </div>
      

      <div className='w-full items-center justify-start flex flex-col px-12 py-6'>
        <h1 className='font-bold text-ml xl:text-2xl pb-2'>
          Recent investment
        </h1>
        <div className='w-full space-y-5 overflow-y-auto max-h-[350px] py-6 '>
          {InvestDB.map((item) => (
<InvestItem item={item} keys={item.id}/>
          ))}

        </div>
      </div>
      </div>
  )
}
