import React,{useState} from 'react'
import './LoginRegister.css'

const LoginRegister = () => {
    
    const [action,setAction] = useState('');

    const [formData,setFormData]=useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const registerLink =() =>{
        setAction('active');
    };
    const loginLink =() =>{
        setAction('');
    };

    const login =async()=>{
        
        console.log("login function executed",formData);
        let responseData;
        await fetch('http://localhost:3000/login',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else
        {
            alert(responseData.errors);
        }
    }
    const signup =async()=>{
       
        console.log("signup function executed",formData);
        let responseData;
        await fetch('http://localhost:3000/signup',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else
        {
            alert(responseData.errors);
        }
    }

  return (
    <div className='login-body'>
      <div className='outbox'>
        <ul className='admin-user'>
            <li id='admin'>ADMIN</li>
            <li id='user'>USER</li>
        </ul>
        <div className='wrapper'>
            <div className={`form-box${action}`}>
                <div className='login'>
                    <div action='' className='form'>
                        <h1>Login</h1>
                        <div className='input-box'>
                            <input    value={formData.email} onChange={changeHandler} type='text' name='email' placeholder='Enter Email' required/>
                        </div>
                        <div className='input-box'>
                            <input value={formData.password} onChange={changeHandler} type='password' name='password' placeholder='Enter the Password' required/>
                        </div>
                        <div className='ClickOn'>
                        <button onClick={()=>login()}  >Sign In</button>
                        </div>
                        <div className='register-link'>
                            <p>Don't have an account?<a href='#' onClick={registerLink}>Register</a></p>
                        </div>
                    </div>
                </div>
            
            
                <div className='register'>
                    <div className='form' action=''>
                        <h1>Registration</h1>
                        <div className='input-box'>
                            <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Enter Username' required/>
                        </div>
                        <div className='input-box'>
                            <input name='email' value={formData.email} onChange={changeHandler} type='text' placeholder='Enter Email' required/>
                        </div>
                        <div className='input-box'>
                            <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Enter Password' required/>
                        </div>
                        <div className='terms'>
                            <input type='checkbox' required/><label>I agree to the terms & conditions</label>
                        </div>
                        <div className='ClickOn'>
                        <button  onClick={()=>{signup()}}>Sign Up</button>
                        </div>
                        <div className='register-link'>
                            <p>Already have an account?<a href='#' onClick={loginLink}>Login</a></p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default LoginRegister

