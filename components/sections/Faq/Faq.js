import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div className='mt-28'>
    <p className='font-extrabold text-xl md:text-4xl'>Frequently Asked Questions</p>
        <div className='text-center'>
        <Accordion />
        </div>
    </div>
  )
}

export default Faq