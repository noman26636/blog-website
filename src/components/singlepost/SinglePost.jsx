import React from 'react'
import "./SinglePost.css"

export default function SinglePost() {
  return (
    <div className='singlepost'>
       <div className="singlepost_Wrapper">
          <img 
          src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" 
          className="singlepost_Image" />   
           
           <h1 className='singlepost_Title'>Lorem ipsum dolor sit amet 
           
           <div className="singlepost_Edit">

           <i class="singlepost_Icon fa-regular fa-pen-to-square"></i>           
           <i class="singlepost_Icon fa-regular fa-trash-can"></i>     
            
           </div>
           </h1>
           <div className="singlepost_Info">
           <span className='singlepost_Author'>Author : <b>Noman</b></span>    
           <span className='singlepost_Date'>1 hour ago</span>    
           </div>

           <p className='singlepost_Description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius excepturi dolores inventore dolor reprehenderit nulla sequi quisquam aliquid?</p>

        </div>
    </div>
  )
}
