import './Header.css'

import React from 'react'

const Header = () => {
  return (
    <div className='header' >
       <div className='header-contents'>
        <h2>Shop in a Touch</h2>
        <p>Choose your items from a diverse online inventory and process the payment on the online counter with the of addition buying on credit (loaning).</p>
        <a href='/groceries'><button >Shop Now</button></a>
       </div>
    </div>
  )
}

export default Header
