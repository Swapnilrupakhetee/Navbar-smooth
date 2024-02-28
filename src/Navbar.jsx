import React, { useState } from 'react'
import './Navbar.css'
import { PiTwitterLogoFill } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCrossCircled } from "react-icons/rx";
const Navbar = () => {
  const[toggle,setToggle]=useState('hidden');
  const openhamburgerMenu=()=>{
    if(toggle==='open'){
        setToggle('hidden')
    }
    else{
      setToggle('open')
    }
    
  }
  return (
    <div className='navbar-container'>
      <div className='inner-container'>
      
        
        <div className='center-container'>
          <div className={`logo`}>
          <PiTwitterLogoFill />
          </div>
          
          
            <div className={`link ${toggle}`}>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <div className={`cta2 ${toggle}`}>
                  JOIN US
              
            </div>
              
            </div>
            <div className={`cta`}>
                  JOIN US
              
            </div>
            {toggle === 'hidden' ? (
              <div className='hamburger'>
                <RxHamburgerMenu onClick={openhamburgerMenu} />
              </div>
            ) : 
            <div className='hamburger'>
                <RxCrossCircled onClick={openhamburgerMenu}/>
              </div>
            }
            
            
        </div>

      </div>
    </div>
  )
}

export default Navbar