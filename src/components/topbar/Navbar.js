import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className='top'>

      <div className="top_Left">

      <i className="topIcon fa-brands fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-google"></i>
      <i className="topIcon fa-brands fa-pinterest"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-youtube"></i>

      </div>

        <div className="top_Center">
            <ul className='topList'>
            <li className="topList_item">HOME</li>
            <li className="topList_item">ABOUT</li>
            <li className="topList_item">WRITE</li>
            <li className="topList_item">CONTACT</li>
            <li className="topList_item">LOGOUT</li>
            </ul>    
        </div>

        <div className="top_Right">
          <img 
          className='topImage'
          src="https://images.pexels.com/photos/11319741/pexels-photo-11319741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />    
          <i className="topSearch fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}
