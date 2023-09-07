import React from 'react'

const About = () => {
    const info = [
      {text: "Years of Experience", count: "01"},
      {text: "Completed Projects", count: "04"}
    
    ]


  return (
    <section id='about' className='py-10 text-black font-outfit font-medium select-none'>
    <div className='text-center mt-8'>
       <h3 className='text-[#00df9a] text-4xl font-semibold'>
        About <span className='text-black'>Me</span>
       </h3>
       <p className=' text-gray-00 6my-c text-lg'> My Introduction </p>
    </div>
       <div className=' flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'> 
        <div>
         <div className=' text-gray-500 my-3 font-outfit text-center '>
            <p  className='mx-auto w-9/12'>
               Highly skilled and experienced front-end developer with 2+ years of experience in the Front end developement.
                Proven ability to create beautiful, user-friendly, and responsive websites and web applications.
                Expertise in HTML, CSS, JavaScript, and React. Strong problem-solving and analytical skills.
                Passionate about creating innovative and engaging user experiences.
            </p>
            <div className='flex mt-10 items-center justify-center gap-20'>
              {
              info.map( content => (
                
              <div key={content.text} className=''> 
                <h3 className=' md:text-4xl text-2xl font-semibold text-[#18102b]'>{content.count} 
                <span className='text-[#00df9a]'>+</span> {""}</h3>
                <span className=''>{content.text}</span>
              </div>
                ))
              }
            </div>
              <a href="Resume.pdf" download >
              <button className='bg-[#00df9a] font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 items-center border-none gap-2 my-9'>
                Download CV
              </button>
              </a>
         </div>
        </div>
      </div>
    </section>
  )
}

export default About
