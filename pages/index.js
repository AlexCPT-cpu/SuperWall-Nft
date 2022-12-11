import Head from 'next/head'
import  NavBar from '../components/Nav'
import Image from 'next/image'
import CountdownTimer from '../components/CountdownTimer'
import UtilityPerks from '../components/sections/utility/UtilityPerks'
import SuperDeal from '../components/sections/SuperDeal'
import TeamMembers from '../components/sections/Team/TeamMembers'
import Faq from '../components/sections/Faq/Faq'
import Footer from '../components/sections/Footer'

const Home = () => {
  return (
    <div className="all w-full flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex-1 items-center flex flex-col'>
        <NavBar />
        <div className='mt-16 md:mt-28'>
          <Image src='/neon.png' width={300} height={350} />
        </div>
        <div className='mt-14 items-center flex justify-center'>
          <p className='font-extrabold text-2xl md:text-4xl'>PHASE 1 MINT COUNTDOWN</p>
        </div>
        <CountdownTimer />
        <div className='mt-14 items-center text-center'>
        <Image className='w-80 md:w- ml-8' src='/Superwall NFT Series Neon.png' width={500} height={400} />
        <p className='font-extrabold mt-4'>The Gateway to your full Web3 Entertainment Experience</p>
      </div>
      <div className='flex flex-row items-center'>
        <div className='text-center'>
          <Image className='w-80 md:w-48' src='/sp.png' width={80} height={70} />
          <div className='text-sm mt-4 md:mt-4'>
        <span className='font-normal'>Supply 1,111</span>
          </div>
        </div>
        <div className='text-center'>
          <Image className='w-80 md:w-48' src='/GEB Neon.png' width={80} height={70} />
          <div className='text-sm'>
        <span className='font-normal'>Supply 5,550</span>
          </div>
        </div>
        <div className='text-center'>
          <Image className='w-60 md:w-36' src='/SOW Neon.png' width={50} height={60} />
          <div className='text-sm'>
          <span className='font-normal'>Supply 24,000</span>
          </div>
          </div>
        <div className='text-center'>
          <Image className='w-60 md:w-36' src='/SM Neon.png' width={50} height={60} />
          <div className='text-sm'>
          <span className='font-normal'>Supply 2,000</span>
          </div>
          </div>
      </div>
      <UtilityPerks />
      <SuperDeal />
      <TeamMembers />
      <Faq />
      <Footer />
      </div>
    </div>
  )
}

export default Home
