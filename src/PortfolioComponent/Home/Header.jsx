import React from 'react'
import Typical from 'react-typical'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'


const Profile = () => {
  return (
         <section className='min-h-screen flex py-10 md:flex-row flex-col items-center mx-auto select-none'>

           <div className='flex max-w-[700px] w-[600] flex-1 items-center justify-center '>
              <img src='lollypro.png' alt='profile' className='md:w-11/12 h-full object-cover'/> 
           </div>
              <div className="text-center p-10 font-outfit select-none  ">
            <span className='text-3xl py-2 text-[#18102b] font-outfit font-medium '>{""}Hello, I'm <span className=''>Lolly</span> </span>
          <div className=" text-2xl py-2  "><span className='text-[#00df9a]'> {" "}<h1>{" "}
              <Typical 
              loop={Infinity}
              steps={[
                "Ethusiastic Developer 😎",
                5000,
                "Front-End Developer 💻",
                5000,
                "Reactjs Developer 💻",
                5000,
                "Web Developer 💻",
                5000,
                "Junior React Developer 💻",
                5000
              ]}
              />
              </h1>
            </span>
          </div>
              <p className=' text-gray-500 py-3 leading-8 font-medium lg:text-center flex-wrap'> Freelancer providing services for programming and development.<br/> 
              Flair of building web applications with front end operation. </p>
          <div className='text-4xl flex justify-center gap-16 text-gray-700 py-2 cursor-pointer'>
            <AiFillInstagram /> 
            <AiFillLinkedin />
            <AiFillTwitterCircle />
              </div>
          </div>
            </section>
  )
}

export default Profile
