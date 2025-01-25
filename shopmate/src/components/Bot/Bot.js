import React from 'react'
import bot from '../Bot/bot.png'
import './Bot.css'
import { Link } from 'react-router-dom'
function Bot() {
  return (
    <div className='bot'>
        <Link to={`/chatbot`}><img src={bot} /></Link>
    </div>
  )
}

export default Bot