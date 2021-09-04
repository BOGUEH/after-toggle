import React from 'react'

export default function Home() {
    return (
       <div data-spy="scroll" data-target="#navbar-example" data-offset="0">
              
               <div className="container-fluid">
               <section>
                    <div id="home" class="row justify-content-center d-flex flex-wrap">
                        <div class="col-sm-6 " > 

                            <div className="row d-flex">
                                   
                                 <h1 className="text-center">Amazing App for Reporting Emergency</h1>
                                 <p> Faced with an emergency situation, whether fire, health wise
                                    or in an armed robbery case, report emergency 
                                    app got you covered</p>
                                    
                                    
                            </div>
                            <button id="download-btn"> Download App</button> 
                       
                        </div>


                        <div class="col-sm-6">
                            <img src="./images/report-splash.svg" alt="" />
                        </div>
                    </div>
                    </section>
                    {/* this is the end of home */}

                    {/* this is the begining of features */}
                        <section> 
                    <div id="features" class="d-flex flex-column">
                        
                        <div className="d-flex align-items-center justify-content-center"  > 
                            <div className="col align-self-start">
                                <h1 className="text-center"> Alert a Family Member when in Distress</h1>
                                <p className="text-center">This feature enables you to register the details of a Close
                                     Relative in case of an emergency.
                                     A call is placed directly to the registered number to 
                                     inform the person of your current situation and location.</p>
                               
                                
                            </div>
                       
                        </div>

                        <div class="d-flex justify-content-center">
                            <img src="./images/SingleIphone.svg" alt="" />
                        </div>
                        
                    </div>
                    </section>
                    {/* this is the end of features */}

                    {/* this is the begining of FAQs */}
                        <section> 
                    <div id="FAQs" class="column">
                        
                    <div className="usability">
                        

                        
                                <div className="row d-flex">

                                    <div className="col-sm-6 ">                                    
                                    
                                        </div>
                                    <div className="col-sm-6 inline"> 
                                    <img src="./images/bullet.svg" alt="" />
                                    
                                    <h1>  Easy Access to Call History</h1>
                                        <p> With the call log services, just like your
                                            phone call log, you will have access to 
                                        previous emergency calls that you have made
                                            at a glance and at ease. 
                                        </p>
                                    </div>


                                </div>
                       
                                <div className="row d-flex">

                                    <div className="col-sm-6 inline">                                    
                                    
                                    <img src="./images/bullet.svg" alt="" /><h1> Get the closest help within your Local Goverment Area</h1>
                                    <p> Emergency service agencies
                                        can be narrowed down based on one’s location.
                                    </p> 

                                        </div>
                                    <div className="col-sm-6"> 
                                    
                                    </div>


                                </div>
                       

                                    <div className="row d-flex">

                                    <div className="col-sm-6"> </div>
                                    <div className="col-sm-6 inline"> 
                                    <img src="./images/bullet.svg" alt="" /><h1>  Simple and Easy to use Interface</h1>
                                        <p> Navigation is made easy 
                                            through a well thought out 
                                            User experience for overall
                                            efficiency.
                                        </p>
                                    </div>
                                

                                </div>
                        
                               
                         
                               
                        </div>  {/*the end of the usability  */}
                       
                       <div className="testimony">
                        
                        <div>
                            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                                            <div className="apprecation">
                                                <h1 className="text-center"> What our Users are saying </h1>
                                            </div>

                                <div class="carousel-inner ">
                               


                                        <div class="carousel-item active" data-bs-interval="10000">
                                           
                                            <div >
                                                <p  className="text-center">     Really nice app. This Report Emergency app 
                                                is really useful to reach emergency contacts in 
                                                my phone. Design of the app is also very clear
                                                and easy to use.
                                                </p>


                                            </div>

                                            <div className="d-flex justify-content-center"> 
                                                <img src="./images/Ellipse1.svg" class="d-block w-50" alt="..." />
                                            </div>
                                            <h4  className="text-center">     Susan Adeleke</h4>
                                            <p  className="text-center">     Secondary School Teacher</p>

                                        </div>

                                       
                                  
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                                </div>
                          </div>

                           
                       </div>
                       {/* this is the end of testimony */}
                    </div>

                    </section>
                    {/* this is the end of FAQs */}


                    {/* this is the begining of Download App */}
                    <section>
                    <div id="download" class="row">

                    <div class="col">
                            <img src="./images/double-phone.png" alt="" />
                        </div>

                        <div class="col" > 
                            <div className="justify-content-center align-content-center">
                                <h1 className="text-center">Help is just a tap away</h1>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus 
                                    commodo id volutpat congue cursus urna, pellentesque faucibus.
                                     Sagittis porttitor pretium, urna elit 
                                     aliquam. Ante morbi commodo </p>
                              <div className="storeBtn">
                                  <button className="img-download-btn"><img src="./images/app-store.svg" id="app-logo" alt="" /></button>
                                  <button className="img-download-btn"><img src="./images/play-store.svg" id="play-logo" alt="" /></button>
                              </div>
                                
                            </div>
                       
                        </div>

                      
                        
                    </div>
                    </section>
                    
                    {/* the end of download app */}
                   
                  
               </div>
          
        </div>
    )
}
