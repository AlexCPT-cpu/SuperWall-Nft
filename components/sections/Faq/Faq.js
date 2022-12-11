import React from 'react'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div id='faq' className='mt-28'>
    <p className='font-extrabold text-center text-xl mb-2 md:text-4xl'>Frequently Asked Questions</p>
        <div className='text-center'>
        <Accordion />
        </div>
    </div>
  )
}

export default Faq