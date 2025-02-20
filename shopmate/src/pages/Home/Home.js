import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explore from '../../components/Explore-inventory/Explore'
import LoginRegister from '../../components/LoginRegister/LoginRegister.js'
import Offers from '../../components/Offers/Offers.jsx'
const Home = () => {

  const [category,setCategory]= useState("All");

  return (
    <div className='home'>

      <Header />
      <div className='main-section'>
      <LoginRegister/>
      <div className='explore'>
      <Explore  category={category} setCategory={setCategory}/>
      </div>
      
      
      </div>
      <Offers/>
      
    </div>
  )
}

export default Home
