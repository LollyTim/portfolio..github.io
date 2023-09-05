import React from 'react'
import Typical from 'react-typical'


const Profile = () => {
  return (
    <div className=''>
      <div className="">
        <div className="">
            <div className="">
              <div className="">
                
                <a href="https://www.instagram.com/lolly_skino/" rel="noreferrer" target='_blank'>
                    <i className='fa fa-facebook-square'> facebook</i>
                </a>
                <a href="#home"  rel="noreferrer" target='_blank'>
                    <i className=''>github</i>
                </a>
                <a href="https://www.instagram.com/lolly_skino/" rel="noreferrer" target='_blank'>
                    <i className=''>fa fa-instagram</i>
                </a>
                <a href="https://www.linkedin.com/in/ololade-sanya-106990272/" rel="noreferrer" target='_blank'>
                    <i className=''>linkedin </i>
                </a>
                <a href="https://twitter.com/InnovationLolly" rel="noreferrer" target='_blank'>
                    <i className=''>twiter</i>
                </a>
              </div>
            </div>
            <div className="">
              <span className=''>
                {""}
                Hello, I'm <span className=''>Lolly</span>
              </span>
            </div>
            <div className="">
              <span className=''>
                {" "}
                <h1>
                  {" "}
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
                <span className=''>Flair of building web applications with front end operation. </span>
              </span>
            </div>
            <div className=''>
              <button className=''>
                {""}
                 Hire Me {""}
              </button>
              <a href="Resume.pdf" download="Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className=''>Get Resume</button>
              </a>
            </div>
        </div>
        <div className="">
          <div className="">
             profile picture 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
