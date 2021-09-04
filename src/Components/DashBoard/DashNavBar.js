import React from 'react'
import './DashNavbar.css'
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';


export default function DashNavBar() {
    return (
        <div className="d-flex navbarAll"> 
              
            
              <div class="col-3 sideBa">
                     <img src="../images/emergency-reporting-logo.svg" alt="logo" />
             </div>
             
             <div class="col-9 d-flex" >
                
                <div className="float-left"> 
                        <h3 className="heading">Overview</h3>
                </div>
                    
            
            
          
            <div className="float-right">    

            <h4> <NotificationsNoneSharpIcon />  <img src="../images/Ellipse1.svg" alt="" /> Admin <KeyboardArrowDownSharpIcon/> </h4>
            </div>
          
          </div>
           
         


        </div>
    )
}
