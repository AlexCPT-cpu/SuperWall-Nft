import Image from "next/image"

const TeamMap = () => {

const team = [
    {
        img:"/team1.png",
        name:"Super Ryan",
        position:"Founder / CEO",
        country:"South Korea",
        twitter:'',
        instagram:'',
        linkedln:''
    },
    {
        img:"/team2.png",
        name:"SuperUp",
        position:"Managing Partner / Director",
        country:"Thailand",
        twitter:'',
        instagram:'',
        linkedln:''

    },
    {
        img:"/team3.png",
        name:"Super Sam",
        position:"Smart Contract / Backend / Database",
        country:"Singapore",
        twitter:'',
        instagram:'',
        linkedln:''

    },
    {
        img:"/team4.png",
        name:"SuperReece",
        position:"Head of Community",
        country:"United Kingdom",
        twitter:'',
        instagram:'',
        linkedln:''

    },
    {
        img:"/team5.png",
        name:"SuperMark",
        position:"Marketing / Content Production",
        country:"Thailand",
        twitter:'',
        instagram:'',
        linkedln:''

    },
    {
        img:"/team6.png",
        name:"SuperRile",
        position:"Content Production / Head Moderator",
        country:"Serbia",
        twitter:'',
        instagram:'',
        linkedln:''

    },
    {
        img:"/team7.png",
        name:"SuperMan",
        position:"Marketing / Collab Manager",
        country:"Pakistan",
        twitter:'',
        instagram:'',
        linkedln:''

    },
    {
        img:"/team8.png",
        name:"SuperMed",
        position:"Collab Manager",
        country:"United Kingdom"

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