import React from "react";
import "./styles.css";
import data from "./password.json"
import {useState} from 'react';

npc = data.npc;

export default function App() {
  return (
    <body>
      <Header/>
      <SiteContent/>
    </body>
  );
}

function Header(){
  return(
    <div className="header">
      <div className="box">
        &#9776;
      </div>
      <h2 className="inline">
        Quackk!
      </h2>
    </div>
  );
}

function SiteContent(){
  return(
    <div className="siteContent">
      <LoginWindow/>
    </div>
  );
}

const LoginWindow = () => {
  // Declare state variables for each input field and login status
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Event handlers to update the state when input values change
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  // Access the input values using the state variables (inputValue1 and inputValue2)
  const handleSubmit = () => {
    // Assuming data.login and data.password are defined somewhere
    if (inputValue1 === data.login[1] || inputValue1 === data.login[2] && inputValue2 === data.password) {
      console.log("Logging in");
      setLoggedIn(true); // Set login status to true
    } else {
      console.log("Invalid credentials");
    }
  };

  // Render the LoginWindow conditionally based on login status
  return (
    <div>
      {!isLoggedIn && (
        <div className="LoginWindow">
          <h3>Login</h3>
          <div>
            <p className="login"> 
              Username:
              <input type="text" className="input" value={inputValue1} onChange={handleInputChange1} />
            </p>
            <p className="login"> 
              Password:
              <input type="text" className="input" value={inputValue2} onChange={handleInputChange2} />
            </p>
          </div>
          <button className="button" onClick={handleSubmit}>
            <h3 className="buttonText">Submit</h3>
          </button>
        </div>
      )}
    </div>
  );
}
