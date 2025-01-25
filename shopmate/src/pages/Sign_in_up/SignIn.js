import React from 'react'
import './Sign_in.css'



import LoginRegister from '../../components/LoginRegister/LoginRegister'
import { UserProvider } from '../../context/UserContext'
const SignIn = () => {
  return (
    <div>
      <UserProvider>
      <LoginRegister/>
      </UserProvider>
      
    </div>
  )
}

export default SignIn

