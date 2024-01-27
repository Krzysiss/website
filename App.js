import React from "react";
import "./styles.css";
import data from "./password.json"
import {useState} from 'react';

npc = data.npc;

//Main Logic

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [logging, setLogged] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  let sidePanel;
  let content;
  let text = "";
  var buttonText;
  var display = "inherit";

  switch(currentPageIndex){
    case 0:
      content = <DesignPage/>;
      text = "Quackk! - Game Design Doc"
      buttonText = "Go back";
      sidePanel = <DocSidePanel/>
      break;
    case 1:
      content = <MainPage/>;
      text = "Quackk!"
      sidePanel = <MainSidepanel/>

      if(isLoggedIn){
        buttonText = "Docs";
      }else{
        buttonText = "Login";
      }
      break;
  }

  const changeSite = () => {
    switch(currentPageIndex){
      case 0:
        buttonText = "Docs";
        setCurrentPageIndex(1);
        break;
      case 1:
        if(!isLoggedIn){
          setLogged(() => (logging ? false : true));
        }else{
          setCurrentPageIndex(0);
        }
        break;
    }
  };

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
          setCurrentPageIndex(0);
        }        
      }
  };    

  return (
    <body>
      <Header text={text}/>
      <SiteContent content={content} />
      <button onClick={changeSite} id="siteChange">{buttonText}</button>  
      <div style={{display: !logging ? "none" : "inherit"}}>
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
      </div>
      <Footer/>
    </body>
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

function Footer(){
  return (
    <div id="footer">

    </div>
  );
}

function MainSidepanel(){
  return (
    <div className="SidePanel">

    </div>
  );
}

function DocSidePanel(){
  return (
    <div className="SidePanel">

    </div>
  );
}

//Site Elements

function MainPage(){
  return(
    <div className="contentBox">
      
    </div>
  );
}

function DesignPage(){
  return(
    <div className="contentBox">
      
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