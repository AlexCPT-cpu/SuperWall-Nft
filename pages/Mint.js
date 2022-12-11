import  NavBar from '../components/Nav'
import Image from 'next/image'

const Mint = () => {
  return (
    <div className='w-full flex flex-col min-h-screen items-center mint justify-center py-2'>
                <NavBar mint={true} />
     <div className='flex-1 items-center flex flex-col md:flex-row'>
        <div className='mt-16'>
            <Image className='w-52 md:w-96' src='/Super Pass GIF.png' width={200} height={200} />
        </div>
        <div className='mt-5 text-center items-center relative'>
            <div className='items-center text-center m-5 flex justify-center'>
            <Image className='w-52 md:w-96 text-center items-center' src='/Genesis Super Pass Neon.png' width={200} height={200} />
            </div>
        <p className='text-center'>1111 Genesis Super Pass that will grant you access to<br /> the Superwall E2E & P2E Ecosystem which includes <br /> Social Media, NFT Marketplace, Launchpad, Custom<br /> Goods Market, Staking, future drops and more.</p>
        <div className='items-center text-center mt-6 flex justify-center'>
        <Image className='w-52 mt-18 md:w-96 text-center items-center' src='/Mint Marker Box.png' width={200} height={200} />
        </div>
        <div className='absolute bottom-44 left-40 md:bottom-52 md:left-52'>
        <p className='font-extrabold text-xl md:text-3xl'>0</p>
        </div>
        <div className='flex items-center mt-5 justify-center'>
        <Image className='w-4 md:w-6 text-center items-center' src='/Info.png' width={50} height={50} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p>1 NFT = 0.085 ETH</p>
        </div>
        <div className='text-center items-center flex justify-center'>
        <button className='rounded-full w-28 font-extrabold px-32 text-center items-center flex justify-center bg-gradient-to-r from-pink-600 to-blue-600 py-2 m-3'>Mint</button>
        </div>
        <div className='flex flex-row space-x-4 m-5 justify-center'>
        <a href=''><Image className='w-4 md:w-6 text-center items-center' src='/etherscan.png' width={50} height={50} /></a>
        <a href=''><Image className='w-4 md:w-6 text-center items-center' src='/Opensea.png' width={50} height={50} /></a>
        <a href='https://twitter.com/superwallglobal'><Image className='w-4 md:w-6 text-center items-center' src='/twit.png' width={50} height={50} /></a>
        <a href='/'><Image className='w-4 md:w-6 text-center items-center' src='/Vectorweb.png' width={50} height={50} /></a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Mint
