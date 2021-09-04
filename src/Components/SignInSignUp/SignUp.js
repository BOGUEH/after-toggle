import React from 'react'
import './SignUp.css';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import VisibilityOffSharpIcon from '@material-ui/icons/VisibilityOffSharp';
import {useState} from 'react'

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false );
    const [eyeconfirmPassword, setEyeConfirmPassword] = useState(false );
    const [name, setName] = useState(" " );
    const [userName, setUsername] = useState(" " );
    const [ Password , setPassword] = useState("" );
    const [ confirmPassword , setConfirmPassword] = useState("" );

    const saveData = ()=>{
        let data = { name, userName, Password, confirmPassword }

        fetch("https://emergency-report-app.herokuapp.com/api/user/signup", {
            method: "POST",
            body: JSON.stringify(data)
        }).then( (resp)=>{
            resp.Json.then( (result) =>

            console.warn("result", result)
            )
        })
    }

    return (
        <div className="container">
            
            <div className="logo mt-5">
                <img src="./images/emergency-reporting-logo.svg" alt="logo" />
            </div>

            <div className="form">

                <h1> Sign Up</h1>
                <p> Welcome Back!</p>
                <div class="d-flex flex-column col-6 justify-content-center"> 
                <form action="" className="forms d-flex flex-column justify-content-center">
                    <input type="text"   placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}  />
                    <input type="email"  placeholder="Email address" value={userName} onChange={(e)=>{setUsername(e.target.value)}}/>
               
                    <input type={(showPassword)?"text"  : "password" } placeholder="Enter Password" className="justify-self-stretch"
                     value={Password} onChange={(e)=>{setPassword(e.target.value)}}  />
                    {
                        (showPassword) ? <VisibilityOffSharpIcon className="eyeHide" onClick={()=>setShowPassword(false)} /> :
                         <VisibilitySharpIcon onClick={()=>setShowPassword(!showPassword)} />
                    }  

                    <input type={(eyeconfirmPassword)?"text"  : "password" } placeholder="confirm Password" 
                    value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}  />   
                    {
                        (eyeconfirmPassword) ? <VisibilityOffSharpIcon className="eyeHide" onClick={()=>setEyeConfirmPassword(false)} /> :
                         <VisibilitySharpIcon onClick={()=>setEyeConfirmPassword(!showPassword)} />
                    }
                 
                 
                    <p className="formend">forget password?</p>
                    <button onClick={saveData} >Sign Up</button>
                    <p className="formend"> Already have an account?  <a href="http://localhost:3000/signin">Log In</a> </p>
                  
                </form>
                 </div>   
                        <div class="container">
                            <div class="row">
                                    <div class="col">
                                        <hr />

                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        Or continue with 
                                    </div>
                                <div class="col">
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div   className="smlogo d-flex justify-content-evenly ">
                                    <div class="col">
                                       

                                    </div>
                                    <div class="col d-flex justify-content-evenly">
                                    <img src="./images/Google.svg" alt="google icon" />
                                    <img src="./images/LinkedIn.svg" alt="LinkedIn icon" />
                                  <img src="./images/Twitter1.svg" alt="twitter icon" />

                                    </div>
                                <div class="col">
                                    
                                </div>
                            </div>
                        </div>

                       
                            
                            
                      
        
            </div>

        </div>
    )
}
