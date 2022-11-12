
import './App.css';
import About from './Components/About';
import FormText from './Components/Form';
import Navbar from './Components/NavBar';
import React, { useState } from 'react'
import Alert from './Components/Alert';

// Importing a Router //

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [theme, setTheme] = useState("light"); // -> Currenlty is on light theme 
  const [alert, setAlert] = useState(null); // -> 'alert' is an Object

  // Toggling function which is change the Theme //
  const toggleTheme = () => {

    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#0d0c50";
      document.body.style.color = "white";

      setAlertMsg("Dark mode has been Enabled", "success");
    }

    else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

      setAlertMsg("Light mode has been Enabled", "success");
    }

  };

  // set shAlert with setAlertMsg function //

  const setAlertMsg = (message, type) => {

    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <div className="container my-5">

        <Router>

          <Navbar title="AbdeTion" aboutText="AboutUs" themeProps={theme} toggleTheme={toggleTheme} />

          <Alert alert={alert} />

          <div className="container my-5">

            {/* Routes */}

            <Routes>
              
              <Route path="/about" element={  <About themeProps={theme} />} />
              <Route path="/" element={<FormText heading="Enter Text Below To Analyze" themeProps={theme} setAlertMsg={setAlertMsg} />} />
            
            </Routes>

          </div>
        </Router>

      </div>
    </>
  );
}
export default App;
