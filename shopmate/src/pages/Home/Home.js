import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explore from '../../components/Explore-inventory/Explore'
import Offers from '../../components/Offers/Offers'
const Home = () => {

  const [category,setCategory]= useState("All");

  return (
    <div className='home'>
      <Header />
      <Explore  category={category} setCategory={setCategory}/>
      <Offers/>
    </div>
  )
}

export default Home
