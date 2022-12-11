import Image from "next/image"

const TeamMap = () => {

const team = [
    {
        img:"/team1.png",
        name:"Super Ryan",
        position:"Founder / CEO",
        country:"South Korea",
        twitter:'https://twitter.com/SuperRyanETH',
        instagram:'https://www.instagram.com/ryankimstagram/',
        linkedln:'https://www.linkedin.com/in/superryaneth/'
    },
    {
        img:"/team2.png",
        name:"Super Up",
        position:"Managing Partner / Director",
        country:"Thailand",
        twitter:'https://twitter.com/up_savit',
        instagram:'https://www.instagram.com/up_savit/',
        linkedln:'https://www.linkedin.com/in/savit'

    },
    {
        img:"/team3.png",
        name:"Super Sam",
        position:"Smart Contract / Backend / Database",
        country:"Singapore",
        twitter:'https://twitter.com/samuelngxh',
        instagram:'https://www.instagram.com/samuelngxh',
        linkedln:'https://www.linkedin.com/company/superwall-co-inc/'

    },
    {
        img:"/team4.png",
        name:"Super Reece",
        position:"Head of Community",
        country:"United Kingdom",
        twitter:'https://twitter.com/RhysHall107',
        instagram:'https://www.instagram.com/superwall_official/',
        linkedln:'https://www.linkedin.com/mwlite/in/rhys-hall-04096b193'

    },
    {
        img:"/team5.png",
        name:"Super Mark",
        position:"Marketing / Content Production",
        country:"Thailand",
        twitter:'https://twitter.com/NTK199328',
        instagram:'https://www.instagram.com/markntk93/',
        linkedln:'https://www.linkedin.com/in/markntk/'

    },
    {
        img:"/team6.png",
        name:"Super Rile",
        position:"Content Production / Head Moderator",
        country:"Serbia",
        twitter:'https://twitter.com/RileNFTs',
        instagram:' https://www.instagram.com/superwall_official/',
        linkedln:'https://www.linkedin.com/in/branislav-ristic'

    },
    {
        img:"/team7.png",
        name:"Super Man",
        position:"Marketing / Collab Manager",
        country:"Pakistan",
        twitter:'https://twitter.com/PsychoMoron_0',
        instagram:'https://www.instagram.com/asadshahid90/',
        linkedln:'https://www.linkedin.com/in/m-asad-shahid-109b6b1b6'

    },
    {
        img:"/team8.png",
        name:"Super Med",
        position:"Collab Manager",
        country:"United Kingdom",
        twitter:'https://twitter.com/Medregeth',
        instagram:'https://www.instagram.com/s493/',
        linkedln:'https://www.linkedin.com/in/medreg-eth-b5289a254/'
    },
]

  return (
    <div className='grid space-x-2 space-y-4 grid-cols-2 md:grid-cols-4'>
        {
            team.map((member, index) => {
                return(
                    <div key={index} className="items-center  space-x-4 space-y-4 grid justify-center flex-row text-center">
                    <Image className="w-30" src={member.img} width={200} height={200} alt='team-member' />
                    <div className="flex flex-row items-center text-center justify-center space-x-2">
                        <a href={member.twitter}><Image src='/Twitter Icon.png' width={20} height={20} /></a>
                        <a href={member.linkedln}><Image src='/Linkedin Icon.png' width={20} height={20} /></a>
                        <a href={member.instagram}><Image src='/IG Icon.png' width={20} height={20} /></a>
                    </div>
                    <div className="font-bold">{member.name}</div>
                    <div className="text-xs">{member.position}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TeamMap