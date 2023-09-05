import {React, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className=' select-none flex justify-between items-center h-16 max-w-6xl mx-auto px-4 first-letter font-outfit text-white bg-[#18102b]'>
       <h1 className='w-full text-3xl font-bold text-[#00df9a] flex whitespace-nowrap' ><span className='text-white'> &lt; L</span>T /&gt;</h1>
       <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4 w-32'>About me</li>
        <li className='p-4'>Service</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>Projects</li>
       </ul>
       <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu  size={25}/>}
        
       </div>
       <div className={!nav ? 'fixed right-0 top-0 w-[50%] h-full border-l border-l-gray-950 bg-[#18102b] mt-16 ease-in-out duration-500 md:hidden' : 'fixed left-[-500px]' }>
        <ul className=''>
             <li className='p-4'>Home</li>
             <li className='p-4 w-34'>About me</li>
             <li className='p-4'>Service</li>
             <li className='p-4'>Contact</li>
             <li className='p-4'>Projects</li>
        </ul>
       </div>

    </div>
  )
}

export default Nav
