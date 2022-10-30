import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>

       <div className="sidebar_titleItem">

          <span className="sidebar_Title">ABOUT ME</span>

          <img 
          className='sidebarImage'
          src="https://images.pexels.com/photos/1913161/pexels-photo-1913161.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" /> 
          
          <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. 
              Architecto molestias saepe illo, 
              possimus 
              aliquid labore distinctio fugiat. </p>   

       </div>
           <div className='sidebar_Item'>

           <span className="sidebar_Title">CATEGORIES</span>

           <ul className="sidebar_Lists">
               <li className="sidebar_Listitem">Life</li>
               <li className="sidebar_Listitem">Music</li>
               <li className="sidebar_Listitem">Style</li>
               <li className="sidebar_Listitem">Cinema</li>
               <li className="sidebar_Listitem">Tech</li>
           </ul>
 
           </div>       

           <div className='sidebarItem'>
               
               <span className='sidebar_Title'>FOLLOW US</span>

               <div className='sidebar_Social'>

               <i className="sidebarIcon fa-brands fa-facebook"></i>
               <i className="sidebarIcon fa-brands fa-twitter"></i>
               <i className="sidebarIcon fa-brands fa-google"></i>
               <i className="sidebarIcon fa-brands fa-pinterest"></i>
               <i className="sidebarIcon fa-brands fa-instagram"></i>
               <i className="sidebarIcon fa-brands fa-youtube"></i>

               </div>

           </div>
    </div>
  )
}
