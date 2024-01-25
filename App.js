import React from "react";
import "./styles.css";
import data from "./password.json"
import {useState} from 'react';

npc = data.npc;

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  let content;
  let text = "";
  let buttonText;

  switch(currentPageIndex){
    case 0:
      content = <LoginWindow/>;
      text = "Quackk! - Game Design Doc"
      buttonText = "Go back";
      break;
    case 1:
      content = <FeatureBlock/>;
      text = "Quackk!"
      buttonText = "Login";
      break;
  }

  const changeSite = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <body>
      <Header text={text}/>
      <SiteContent content={content} />
      <button onClick={changeSite} id="siteChange">{buttonText}</button>
    </body>
    
  );
}

function DesignPage(){
  return(
    <body>
      <SiteContent content={<LoginWindow/>}/>
    </body>
  );
}

function MainPage(){
  return(
    <body>
      <SiteContent content={<FeatureBlock/>}/>    
  </body>
  );
}

function FeatureBlock(){
  return(
    <div id="featureBlock">
      <h3 id="textBox">
        Latest Features
      </h3>
      <div>

      </div>
      <div id="imageBox">

      </div>
    </div>
  );
}

function Header({ text }) {
  const [isSidePanelHidden, setSidePanelHidden] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelHidden(isSidePanelHidden);
  };

  return (
    <div className="header">
      <button className="box" onClick={toggleSidePanel}>
        &#9776;
      </button>
      <h2 className="inline">{text}</h2>
    </div>
  );
}

function SiteContent({content}){
  return(
    <div className="siteContent">
      {content}
    </div>
  );
}

function ContentBlock(){
  <div className="contentBlock">

  </div>
}

const LoginWindow = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  var display = "inherit";

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
          display = "none";
        }        
      }
  };    

  return (
    <div style={{ display: isLoggedIn ? "none" : "inherit" }} >
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
    </div>
  );
}
