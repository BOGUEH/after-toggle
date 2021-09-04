import React from 'react'
import './Dashboard.css'
import DashNavBar from './DashNavBar';


export default function Dashboard() {
    return (
      
            
            <div class="container-fluid">
            
               <DashNavBar />
                <div class="row dashboard">

                
            
                    {/* begining of sidebar */}
                    <div class="col-3 sideBar">
                        <ul>
                            <li> 
                                <img className="side-item" src= "../images/Dashboard/overview.svg" alt="" />
                                 <p className="side-item"> Overview</p> 
                            </li>
                            <li> 
                              <img className="side-item" src= "../images/Dashboard/Combo Chart.svg" alt="" />
                                 <p className="side-item"> Reports</p> 
                            </li>

                            <li> 

                            <img className="side-item" src= "../images/Dashboard/Profiles.svg" alt="" />   
                                 <p className="side-item" > Accounts</p> 
                            </li>

                            <li className="logOut"> 

                            <img className="side-item" src= "../images/Dashboard/Shutdown copy.svg" alt="" />   
                            <p className="side-item" > Log Out</p> 
                            </li>
                        </ul>
                        
                
                    </div>
                    {/* end of sidebard */}

                    <div class="col-9" >
                        <div className=" d-flex flex-wrap col">  
                                <div className=" port roadSafety">

                                <img class="rounded mx-auto d-block" src="../images/Dashboard/FRSC.svg" alt="logo" />
                                <h3 className="text-center">Road Safety Service</h3>
                              
                                <p className="text-center"> 14 Locations Added</p>

                                </div>
                                <div className=" port roadSafety">

                                <img class="rounded mx-auto d-block" src="../images/Dashboard/fireService.svg"  alt="logo" />
                                <h3 className="text-center">Fire Emergency Service</h3>
                                <p className="text-center"> 14 Locations Added</p>

                                </div>
                                <div className=" port roadSafety">

                                <img class="rounded mx-auto d-block" src="../images/Dashboard/NPF.svg" alt="logo" />
                                <h3 className="text-center">Nigerian Police Service</h3>
                                <p className="text-center"> 14 Locations Added</p>

                                </div>
                                <div className=" port roadSafety">

                                <img class="rounded mx-auto d-block" src="../images/Dashboard/MedicalService.svg" alt="logo" />
                                <h3 className="text-center">Medical Service</h3>
                                <p className="text-center"> 14 Locations Added</p>

                                </div>

                                    <div className=" blank">
                                    <img src="../images/Dashboard/blankAdd-on.svg" alt="logo" />
                                    
                                    </div>
                        </div>

                    </div>
                
                </div>
            </div>
      
    )
}
