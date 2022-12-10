import React from 'react'
import Countdown from 'react-countdown'

//new Date.now(expirstion * 1000)


const renderer = ({days, hours, minutes, seconds, completed}) => {
    if(completed) {
        return(
            <div>
            <h2 className='text-white animate-bounce text-xl text-center'>
                Countdown Ended
            </h2>
            <div className='flex space-x-6'>
            <div className='flex-1'>
                <div className='countdown'>0</div>
                <div className='countdown-label'>days</div>
                </div>

                <div className='flex-1'>
                <div className='countdown'>0</div>
                <div className='countdown-label'>hours</div>
                </div>

                <div className='flex-1'>
                <div className='countdown'>0</div>
                <div className='countdown-label'>minutes</div>
                </div>

                <div className='flex-1'>
                <div className='countdown'>0</div>
                <div className='countdown-label'>seconds</div>
                </div>
            </div>
        </div>
        )
    } else {
        return(
            <div>
            <div className='flex space-x-4 text-center'>
            <div className='flex-1'>
                <div className='countdown'>{days}</div>
                <div className='countdown-label'>days</div>
                </div>

                <div className='flex-1'>
                <div className='countdown'>{hours}</div>
                <div className='countdown-label'>hours</div>
                </div>

                <div className='flex-1'>
                <div className='countdown'>{minutes}</div>
                <div className='countdown-label'>minutes</div>
                </div>

                <div className='flex-1'>
                <div className='countdown'>{seconds}</div>
                <div className='countdown-label'>seconds</div>
                </div>
            </div>
        </div>
        )
    }
}

const CountdownTimer = () => {
  return (
    <div>
        <Countdown date={new Date("Jan 5, 2023 15:37:25")} renderer={renderer} />
    </div>
  )
}

export default CountdownTimer