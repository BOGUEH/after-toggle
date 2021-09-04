import React from 'react'

export default function Footer() {
    return (
            <div className="container-fluid" id="footer"> 
                <div className="row"> 
                <div className="col-md-3">
                    <div className="footLogo">
                        <img src="./images/white-logo.svg" alt="" />
                    </div>
                
                <div className="d-flex justify-content-space-between socail-logo">
                 <img src="./images/facebook.svg" class="social-logo1" alt="" />
                 <img src="./images/twitter.svg" class="social-logo1"alt="" />
                 <img src="./images/instagram.svg" class="social-logo1"alt="" /> 
                 </div>
                </div>

                <div className="col-md-3">
                <h2><a class="nav-link" href="#home">Quick Links</a> </h2>
                    <p><a class="nav-link" href="#home">Home</a> </p>
                    <p><a class="nav-link" href="#features">Features</a> </p>
                </div>
                <div className="col-md-3">
                <h2><a class="nav-link" href="#FAQs">Get Help</a> </h2>
                    <p><a class="nav-link" href="#FAQs">Support</a> </p>
                    <p><a class="nav-link" href="#FAQs">FAQs</a> </p>
                </div>
                <div className="col-md-3">
                <h2><a class="nav-link" href="#FAQs">Resources</a> </h2>
                    <p><a class="nav-link" href="#FAQs">Terms of Service</a> </p>
                    <p><a class="nav-link" href="#FAQs">Privacy Policy</a> </p>
                   
                </div>
        
                </div>
                 


            
              
              
                    
              
              
                  
        
        
            
                    </div>
        
     
    )
}
