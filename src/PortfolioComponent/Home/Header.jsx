import React from 'react'
import Typical from 'react-typical'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

const Profile = () => {
  return (
         <section>

              <div className="text-center p-10 font-outfit select-none">
            <span className='text-3xl py-2 text-[#18102b] font-outfit font-medium '>{""}Hello, I'm <span className=''>Lolly</span> </span>
          <div className=" text-2xl py-2  "><span className='text-[#00df9a]'> {" "}<h1>{" "}
              <Typical 
              loop={Infinity}
              steps={[
                "Ethusiastic Developer 😎",
                1000,
                "Front-End Developer 💻",
                1000,
                "Reactjs Developer 💻",
                1000,
                "Web Developer 💻",
                1000,
                "Junior React Developer 💻",
                1000
              ]}
              />
              </h1>
            </span>
          </div>
              <p className=' text-gray-500 py-3 leading-8 font-medium lg:text-center flex-wrap'> Freelancer providing services for programming an development.<br/> 
              Flair of building web applications with front end operation. </p>
          <div className='text-4xl flex justify-center gap-16 text-gray-700 py-2 cursor-pointer'>
            <AiFillInstagram /> 
            <AiFillLinkedin />
            <AiFillTwitterCircle />
              </div>
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden '>
             <img src='ololade.jpg' />
          </div>
       
            </section>
  )
}

export default Profile
