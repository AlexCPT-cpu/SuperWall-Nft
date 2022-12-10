import Image from "next/image"

const Footer = () => {
  return (
    <footer className='foot h-full w-full'>
      <div className='flex flex-col justify-center md:flex-row'>
        <div className='flex flex-col md:flex-col space-x-3 space-y-2 items-center'>
          <Image src='/SUPERWALL.png' width={200} height={200} />
          <p>Join Superwall Community</p>
          <div className="flex flex-row">
          <Image className="w-12" src='/Twitter.png' width={20} height={20} />
          <Image className="w-12" src='/Discord.png' width={20} height={20} />
          <Image className="w-12" src='/IG.png' width={20} height={20} />
          <Image className="w-12" src='/Website.png' width={20} height={20} />
          </div>
        </div>
        
        <div className="flex flex-row md:flex-row">
        <div className='flex flex-col md:flex-col space-x-3 space-y-2 items-center text-left mt-5'>
          <p className="font-extrabold">Superwall.co</p>
          <p>Utility & Perks</p>
          <p>Super Deal</p>
          <p>Super Team</p>
          <p>Frequently Asked Question</p>
        </div>

        <div className='flex flex-col md:flex-col space-x-3 space-y-2 items-center text-center mt-5'>
          <p className="font-extrabold">Superwall.io</p>
          <p>Home</p>
          <p>$BRCK Token</p>
          <p>Superwall Roadmap</p>
          <p>Super Team</p>
          <p>Ambassadors</p>
        </div>
        </div>

        <div className='flex relative flex-col md:flex-col space-x-3 space-y-2 items-center text-center mt-5'>
          <p className="font-extrabold text-xl md:text-3xl">Sign-Up For Whitelist & OG</p>
          <p className="font-xs mb-6">Be the first to know about discounts, offers, events,<br /> alphas, beta testing and more!</p>
          <Image className="w-96" src='/Subscribe.png' width={200} height={200} />
          <p className="absolute bottom-4 left-16 md:bottom-14 md:left-16">Enter your email</p>
          <p className="absolute bottom-4 left-64 font-extrabold md:bottom-14 md:left-72">Subscribe</p>
        </div>
      </div>
      <p className="text-sm mt-14">Copyright <span className="w-2">&copy;</span>SUPERWALLGLOBAL 2022. All Rights Reserved</p>
    </footer>
  )
}

export default Footer