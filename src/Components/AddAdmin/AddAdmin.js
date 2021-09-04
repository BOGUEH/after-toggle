import React from 'react'
import './AddAdmin.css';

export default function AddAdmin() {

    return (

                <div className="container">
                            <div className="header">
                                 <p>Welcom</p>
                                <h3> Enter New Emergency Service Details Below</h3>
                            </div>
                              <div>
                                    <input type="file" name="file"  />
                                    <div>
                                        <input type="text" name="" className="forms container-fluid" placeholder="Name of Organization" />

                                        <select name="Agency-Ministry" className="forms container-fluid">

                                            <option value="Agency-Ministry">Agency/Ministry</option>
                                            <option value="Road-Safety-Service">Road Safety Service</option>
                                            <option value="Fire-Emergency-Service">Fire Emergency Service</option>
                                            <option value="ENigerian-Police-Service">Nigerian Police Service</option>
                                            <option value="Medical-Service">Medical Service</option>
                                        </select> 
                                    </div>
                            </div>

                            <div className="second">

                            <select name="Local Government Area" className="forms container-fluid">
                                                            <option value="default">Local Government Area</option>
                                                            <option value="Ethiope-West">Ethiope-West</option>
                                                            <option value="Sapele">Sapele</option>
                                                            <option value="Ethiope-East">Ethiope-East</option>
                                                            <option value="Ughelli-North">Ughelli-North</option>
                                                        </select>
                                                    <input type="text" className="forms container-fluid" placeholder="Enter Phone Contact" />
                            </div>

                            <div className="third container-fluid">

                            <button className="forms contactbtn container-fluid"> Upload Service Logo  
                                                <span className="small"> (PNG/SVG Formats Only)</span>
                                                </button>

                            <button className="forms contactbtn container-fluid"> Add New Contact </button>
                            
                            </div>
                            <button className="container-fluid">save</button>

                  </div>
                           
                      

              




             
       
    )
}
