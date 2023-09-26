import React from 'react'
import {FaHtml5, FaReact, FaCss3Alt } from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {BiLogoTailwindCss} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {SiTypescript} from 'react-icons/si'
import {TbBrandVscode} from 'react-icons/tb'

const Skills = () => {
     const skills = [
      {
        logo: <FaHtml5 />  
      },
      {
        logo: <FaCss3Alt /> 
      },
      {
        logo: <IoLogoJavascript /> 
      },
      {
        logo: <FaReact /> 
      },
      {
        logo: <BiLogoTailwindCss /> 
      },
      {
        logo: <SiTypescript /> 
        
      },
      {
        logo: <TbBrandVscode /> 
      },
      {
        logo: <AiFillGithub /> 
      },
      
     ]

  return (
    <section id='skills' className='py-5 relative font-outfit text-white select-none'>
      <div className='mt-8 text-gray-700 text-center '>
        <h3 className='text-4xl font-semibold'>My <span className='text-[#00df9a]'>Skills</span></h3>
      <p className='mt-6 text-gray-500'>My Knowledge</p>
       <div className='flex items-center justify-center mt-10 gap-10 flex-wrap max-w-5xl mx-auto'>
         {
          skills?.map((skills,i) => (
            <div  key={i} className='border-2 border-[#00df9a] relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl text-gray-200'>
           {/* <div style={{
            background: `conic-gradient(rgb(0, 223, 154) ${skills.count}%, #ddd ${skills.count}%)`
           }} className='w-32 h-32 flex items-center justify-center rounded-full'> */}
             <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
              {skills.logo}
            {/* </div>            */}
           </div>
               <p className='text-xl mt-3'>{skills.level}</p>
         </div>
          ))
         }
       </div>
      </div>
    </section>
  )
}

export default Skills
