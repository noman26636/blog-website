import React from 'react'
import "./Post.css"

export default function Post() {
  return (
    <div className='post'>
      <img 
      className='postImg'
      src="https://images.pexels.com/photos/10190367/pexels-photo-10190367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
    
    <div className="postInfo">

       <div className="postCategories">

       <span className="postCategory">Music</span>
       <span className="postCategory">Life</span>
        
       </div>    
       
       <span className="postTitle">Lorem ipsum dolor sit amet</span>
       <hr />
       <span className="postDate">1 hour ago</span>
    </div>
 
     <p className='postDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Nemo ab accusamus vel earum distinctio veritatis sint 
         obcaecati voluptatem, quam ipsum? Est neque unde a aperiam
          maiores, dolores laudantium consequatur sapiente. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Nemo ab accusamus vel earum distinctio veritatis sint 
         obcaecati voluptatem, quam ipsum? Est neque unde a aperiam
          maiores, dolores laudantium consequatur sapiente
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Nemo ab accusamus vel earum distinctio veritatis sint 
         obcaecati voluptatem, quam ipsum? Est neque unde a aperiam
          maiores, dolores laudantium consequatur sapiente
          </p>
 
    </div>
  )
}
