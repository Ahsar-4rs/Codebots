import React from 'react'
import './Profile.css'
import { person } from '../../components/VerNavBar/SideBar'

const Profile = () => {
  return (
    <div>
      <div  className='profile'>
      <div className='profile-card'>
        <div className='details'>
          <h2>{person.name}</h2>
          <p>{person.username}</p>
          <p>{person.joinDate}</p>
        </div>
      </div>
      <div className='profile-details'>
        <div className='div-heading'>
          <h4>My Profile</h4>
          
        </div>
        <ul>
            <li>Name:{person.name}</li>
            <li>Email:{person.email}</li>
            <li>Phone No.:{person.phno}</li>
            <li>Address:{person.address}</li>
            <li>Join Date:{person.joinDate}</li>
            
          </ul>
          </div>
          </div>
          <div className='action-area'>
          <a><button>Edit Account</button></a>
          
          <a href='/'><button>Log Out</button></a>
          <a><button>Pay Caution Deposit</button></a>
          <a><button>Retrieve Caution Deposit</button></a>
          <a><button>View trnsactions</button></a>
          <a><button>View Bills</button></a>
          </div>
      </div>
    
  )
}

export default Profile
