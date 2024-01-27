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
      content = <DesignPage/>;
      text = "Quackk! - Game Design Doc"
      buttonText = "Go back";
      break;
    case 1:
      content = <MainPage/>;
      text = "Quackk!"
      buttonText = "Login";
      break;
  }

  const changeSite = () => {
    setCurrentPageIndex((prevIndex) => (prevIndex === 1 ? 0 : 1));
  };

  const changeSiteSpec = (index) => {
    setCurrentPageIndex(index);
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
    <div>
      <LoginWindow/>
    </div>
  );
}

function ContentBlock({text, source}){
  return(
    <div className="contentBlock">
      <div>{text} </div>
      <div className="imageBox"><img src={source} className="contentImg"/></div>
    </div>
  );
}

function MainPage(){
  return(
    <div className="contentBox">
      
    </div>
  );
}

function GraphicBlock(){
  return(
    <div id="graphicBlock">
      <img src={"https://github.com/Krzysiss/website/blob/main/assets/websiteMockup.png?raw=true"} id="mockup"/>
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
      <GraphicBlock/>  
      <div className="contentBox">
        {content}
      </div>
    </div>
  );
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
          <div id="dataBox">
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
