import React from 'react'
import Image from 'next/image'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const SuperDeal = () => {
  return (
    <div id='superdeal' className='mt-11 items-center text-center'>
        <p className='font-extrabold text-xl md:text-4xl super-deal'>Super Deal</p>
        <div className='mt-12 relative'>
            <Image className='w-96 h-48 md:w-11/12 md:h-80' src='/Super Deal - Neon Box 1.png' width={800} height={1200} alt='super box' />
            <Image className='absolute top-1 left-12 md:left-20 md:top-2 md:w-9/12 w-72' src='/Super Deal Neon.png' width={600} height={800} alt='super box' />
            <div className='absolute top-12 md:top-32 md:left-52 items-center py-4'>
            <p className='md:font-2xl'>🔥"Get3ForThePriceOf1"🔥</p>
            <p className='md:font-2xl'>Super Pass {'->'} Genesis Elemental Bricks {'->'} Some Other World</p>
            <p className='italic font-sm md:font-extrabold md:text-3xl'>Total combined value of nearly 1 Eth!</p>
            </div>
        </div>

        <div className='mt-4 relative'>
            <Image className='w-96 h-80 md:w-11/12 md:h-96' src='/Super Deal - Neon Box 2B.png' width={800} height={1200} alt='super box' />
            <p className='absolute top-4 font-bold md:text-2xl left-12 md:left-20 md:top-10 md:w-9/12 w-72'> Genesis Elemental Bricks </p>
            <Image className='absolute top-3 left-2 md:left-8 md:top-3 md:w-24 w-12' src='/GEB Mini Icon.png' width={100} height={100} alt='super box' />
            <div className='absolute right-3 top-3 md:right-32 md:top-6'>
                <ChevronUpIcon className='h-8 md:h-10 mx-auto mb-2' />
            </div>
            <div className='absolute text-sm top-12 md:top-28 md:left-32 items-center px-4'>
                <p className='m-2 text-sm font-bold md:text-sm'>Super Pass = 1 Free GEB Mint</p>
                <p className='m-2 text-sm font-bold md:text-sm'>Free Mint Terms & conditions</p>
                
                <ol className='list text-xs md:text-xs'>
                    <li className='text-xs font-light md:text-sm'><span>Super Pass Must be Delisted or listed above 1 Eth.</span></li>
                    <li className='text-xs font-light md:text-sm'>1st snapshot of holders will be taken two weeks after Mint.</li>
                    <li className='text-xs font-light md:text-sm'>2nd snapshot of holders to be taken before GEB mint.</li>
                    <li className='text-xs font-light md:text-sm'>If a Super Pass is bought from the Secondary Market,<br /> the holder will be able to claim a OG Role for GEB and receive a 50% Discouunt during mint.</li>
                </ol>
                <p className='text-xs md:text-sm'>*2nd snapshot date and time TBD <br/>
                **Current Holder Screenshot will be taken and used to identify the holders who will be eligible for the 50% discount
                </p>
            </div>
        </div>

        <div className='mt-4 relative'>
            <Image className='w-96 h-28 md:w-11/12 md:h-52' src='/Super Deal - Neon Box 2B.png' width={800} height={1200} alt='super box' />
            <p className='absolute top-1 font-bold md:text-2xl left-12 md:left-20 md:top-4 md:w-9/12 w-72'> Some Other World </p>
            <Image className='absolute h-6 top-1 left-5 md:left-16 md:top-2 md:w-12 md:h-12 w-6' src='/SOW Neon.png' width={100} height={100} alt='super box' />
            <div className='absolute right-11 top-0 md:right-40 md:top-3'>
                <ChevronUpIcon className='h-8 md:h-10 absolute mx-auto' />
            </div>
        </div>

    </div>
  )
}

export default SuperDeal