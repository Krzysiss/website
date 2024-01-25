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
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleInputChange1 = (event) => {
    setLogin(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
      if (login === data.login[1] || login === data.login[2]) {
        if(password === data.password){
          console.log("Logging in");
          setLoggedIn(true);
        }        
      }
  };    

  return (
    <div>
      {!isLoggedIn && (
        <div className="LoginWindow">
          <h3>Login</h3>
          <div>
            <p className="login"> 
              Username:
              <input type="text" className="input" value={login} onChange={handleInputChange1} />
            </p>
            <p className="login"> 
              Password:
              <input type="text" className="input" value={password} onChange={handleInputChange2} />
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
