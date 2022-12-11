import TeamMap from './TeamMap'

const TeamMembers = () => {
  return (
    <div id='team' className='mt-11 items-center text-center'>
        <p className='font-extrabold text-xl md:text-4xl team'>Team Members</p>
        <div className='mt-12'>
            <TeamMap />
        </div>
    </div>
  )
}

export default TeamMembers