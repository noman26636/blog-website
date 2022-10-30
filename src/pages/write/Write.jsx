import "./Write.css"


export default function Write() {
  return (
    <div className='write'>

        <img 
        className="writeImage"
        src="https://images.pexels.com/photos/10190367/pexels-photo-10190367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

      <form className='writeForm'>

        <div className="writeForm_Group">

        <label htmlFor="fileInput">
        <i className="writeIcon  fa-solid fa-circle-plus"></i>    
        </label>
        <input type="file" id='fileInput' style={{display : 'none'}}/>    
        <input type="text" placeholder='Title' className="writeInput" autoFocus={true}/>    
        
        </div>   
             
       <div className="writeForm_Group">
         <textarea placeholder="Tell your story ....." type="text" className="writeInput writeText"></textarea>    
       </div>

       <button className="writeSubmit">Publish</button>

     </form>
    </div>
  )
}
