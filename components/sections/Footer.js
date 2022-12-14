import Image from "next/image"

const Footer = () => {

  const scrollTo = (id) => {

    let element = document.getElementById(id);
    
    element.scrollIntoView({
        behavior:'smooth',
        block: 'start',
        imline:'nearest',
    })
    }

  return (
    <footer className='foot h-full w-full'>
      <div className='flex flex-col justify-center md:flex-row'>
        <div className='flex flex-col md:flex-col space-x-3 space-y-2 items-center'>
          <a href="/"><Image src='/SUPERWALL.png' width={200} height={200} /></a>
          <p>Join Superwall Community</p>
          <div className="flex flex-row">
          <a href='https://twitter.com/superwallglobal'><Image className="w-12" src='/Twitter.png' width={20} height={20} /></a>
          <a href='https://discord.gg/cRbAWmADjv'><Image className="w-12" src='/Discord.png' width={20} height={20} /></a>
          <a href='https://www.instagram.com/superwall_official/'><Image className="w-12" src='/IG.png' width={20} height={20} /></a>
          <a href='/'><Image className="w-12" src='/Website.png' width={20} height={20} /></a>
          </div>
        </div>
        
        <div className="flex flex-row md:flex-row">
        <div className='flex flex-col md:flex-col space-x-3 space-y-2 items-center text-left mt-5'>
         <a href="https://www.superwall.io/"><p className="font-extrabold">Superwall.co</p></a>
          <p className="cursor-pointer" onClick={() => scrollTo('utility')}>Utility & Perks</p>
          <p className="cursor-pointer" onClick={() => scrollTo('superdeal')}>Super Deal</p>
          <p className="cursor-pointer" onClick={() => scrollTo('team')}>Super Team</p>
          <p className="cursor-pointer" onClick={() => scrollTo('faq')}>Frequently Asked Question</p>
        </div>

        <div className='flex flex-col md:flex-col space-x-3 space-y-2 items-center text-center mt-5'>
        <a href="https://www.superwall.io/"><p className="font-extrabold">Superwall.io</p></a>
          <a href='https://www.superwall.io/'><p>Home</p></a>
          <a href='https://www.superwall.io/#brck-token'><p>$BRCK Token</p></a>
          <a href='https://www.superwall.io/#road-map'><p>Superwall Roadmap</p></a>
          <a href='https://www.superwall.io/#super-team'><p>Super Team</p></a>
          <a href='https://www.superwall.io/#ambassadors'><p>Ambassadors</p></a>
        </div>
        </div>

        <div className='flex relative flex-col md:flex-col space-x-3 space-y-2 items-center text-center mt-5'>
          <p className="font-extrabold text-xl md:text-3xl">Sign-Up For Whitelist & OG</p>
          <p className="font-xs mb-6">Be the first to know about discounts, offers, events,<br /> alphas, beta testing and more!</p>
          <Image className="w-96" src='/Subscribe.png' width={200} height={200} />
          <p className="absolute bottom-4 left-16 md:bottom-14 md:left-16">Enter your email</p>
          <a href="mailto:contactus@superwall.co"><p className="absolute bottom-4 left-64 font-extrabold md:bottom-14 md:left-72">Subscribe</p></a>
        </div>
      </div>
      <p className="text-sm mt-14">Copyright <span className="w-2">&copy;</span>SUPERWALLGLOBAL 2022. All Rights Reserved</p>
    </footer>
  )
}

export default Footer