import "./Settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className='settings'>
         <div className="setting_Wrapper">

            <div className="settings_Title">
            <span className="settings_UpdateTitle">Update Your Account</span>    
            <span className="settings_DeleteTitle">Delete Account</span>    
            </div>
            
        <form  className="settingsForm">
          <label>Profile Picture</label>

          <div className="settings_ProfilePicture">
              <img src="https://images.pexels.com/photos/11319741/pexels-photo-11319741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />    
              
              <label htmlFor="fileInput">
              <i class="settings_ProfilePictureIcon fa-regular fa-user"></i>    
              </label>
              <input type="file" id="fileInput" style={{display: 'none'}} />
          </div>    

          <label>Username</label>
          <input type="text" placeholder="Noman" />

          <label>Email</label>
          <input type="email" placeholder="manu26636@gmail.com" />

          <label>Password</label>
          <input type="password" />
  
          <button className="settingsSubmit">Update</button>
        </form>     
        </div>
             <Sidebar/>   
        
    </div>
  )
}
