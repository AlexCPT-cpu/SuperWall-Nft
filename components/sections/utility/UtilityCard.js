import Image from "next/image"

const UtilityCard = () => {

    const images = [
        {
         img:'/Box 1.png',
         header:'GEB & SOW Free Mint',
         content:`Only Available to Super Pass Holders! Super Pass Holder can be eligible for the following free mints: GBE Free Mint x1 SOW Free Mint x1 ${"*T&C's Applied."}`
        },
        {
          img:"/Box 2.png",
          header:'Super Collab',
          content:"Super Pass Holders may be eligible for a Super Collab with Superwall. All proposals will be reviewed & only propsals approved by Superwall's internal team."
        },
        {
            img:'/Box 3.png',
            header:'Additional WL from Collab Projects',
            content:'Not all Super Pass holders may be eligible to mint. Depending on the projects supply/allocation it will be a FCFS basis.'
        },
        {
            img:'/Box 4.png',
            header:'Superwall Alpha Room',
            content:"Superwall Alpha Room only accessible to Super Pass, Genesis Elemental Bricks and S.O.W Holders."
        },
        {
            img:'/Box 5.png',
            header:'Super Subsciption',
            content:'(3) Super Subsciptions that each have a 3 month subscription plan that can be used to subscribe to any Super on our superwall platfrom to view their contents.'
        },
        {
            img:'/Box 6.png',
            header:'Annual Gala Dinner & Award Ceremony',
            content:"All Super Pass Holders will be given an invitation to our Annual Gala Dinner & Award Ceremony."
        }
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        {
            images.map((item, index) => {
                return(
                    <div key={index} className="relative items-center justify-center flex text-center">
                    <Image className="img deal-card" src='/Bx.png' width={200} height={200} alt='box' />
                    <Image className="top absolute top-8 left-10" src={item.img} width={35} height={35} alt='item image' />
                    <p className="header absolute top-0 text-sm font-extrabold text-center">{item.header}</p>
                    <p className="content text-2xl font-semibold">{item.content}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UtilityCard