
const Button = ({value}) => {
  return (
    <button className='w-full rounded-xl bg-gradient-to-b from-pink-600 to-purple-600 font-bold cursor-pointer hover:animate-pulse text-white p-2 m-4'>
        {value}
    </button>
  )
}

export default Button