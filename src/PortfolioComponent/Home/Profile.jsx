import React from 'react'
import Typical from 'react-typical'

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className="profile-parent">
        <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                
                <a href="https://www.instagram.com/lolly_skino/" rel="noreferrer" target='_blank'>
                    <i className='fa fa-facebook-square'></i>
                </a>
                <a href="#home">
                    <i className='fa fa-google-plus-square' rel="noreferrer" target='_blank'></i>
                </a>
                <a href="https://www.instagram.com/lolly_skino/" rel="noreferrer" target='_blank'>
                    <i className='fa fa-instagram'></i>
                </a>
                <a href="https://www.linkedin.com/in/ololade-sanya-106990272/" rel="noreferrer" target='_blank'>
                    <i className='bi bi-linkedin'></i>
                </a>
                <a href="https://twitter.com/InnovationLolly" rel="noreferrer" target='_blank'>
                    <i className='fa fa-twitter'></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className='primary-text'>
                {""}
                Hello, I'm <span className='highlighted-text'>Lolly</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className='primary-text'>
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
                <span className='profile-role-tagline'>Flair of building web applications with front end operation. </span>
              </span>
            </div>
            <div className='profile-optins'>
              <button className='btn primary-btn'>
                {""}
                 Hire Me {""}
              </button>
              <a href="Resume.pdf" download="Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className='btn highlighted -btn'>Get Resume</button>
              </a>
            </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
