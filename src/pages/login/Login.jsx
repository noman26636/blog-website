import Sidebar from "../../components/sidebar/Sidebar"
import "./Login.css"

export default function Login() {
  return (
    <div className="login">
      
      <div className="loginWrapper">
         <div className="titleWrapper">
         <h1 className="loginTitle">Login</h1>             
        </div>
         <form className="loginForm">

           <label>Full Name</label> 
           <input type="text" placeholder="Enter Your Name" />    

           <label>Email</label> 
           <input type="email" placeholder="Enter Your Email" />

           <label>Password</label> 
           <input type="password" /> 

         <button className="loginButton">Login</button>             
        </form>     
      </div>
        
      <Sidebar/>
    </div>
    
  )
}
