
import './App.css';
import {  Switch,  Route,  Link} from "react-router-dom";
import SignUp from './Components/SignInSignUp/SignUp';

import SignIn from './Components/SignInSignUp/SignIn';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">
 
              
                <Route  exact path="/">
                  
                  <NavBar />
                  <Home />
                  <Footer/>
                </Route>
                  
                  <Route  path="/signin">
                    <SignIn/>
                  </Route>
                  <Route  path="/signup">
                    <SignUp/>
                  </Route>
            
    </div>
  );
}

export default App;