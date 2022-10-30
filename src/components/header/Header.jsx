import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className='header'>

        
       <div className="header_Titles">
         
       <span className='headertitle_Sm'>React and Node</span>    
       <span className='headertitle_Lg'>Blog</span>    

       </div>

       <img
       className='headerImage'
       src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
    </div>
  )
}
