import React from 'react'
import Profile from './Profile/Profile'
import Foot from './Foot/Foot'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Profile />
      <Foot />
    </div>
  )
}

export default Home
