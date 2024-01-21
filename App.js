import React, { useState } from "react";
import "./styles.css";
import jsonData from "./contents.json";

const content = jsonData.npc;
const ducks = content.Ducks;

function ContentBlock({ text, content }) {
  return (
    <div className="contentBlock">
      <div>{text}</div>
      <div>{content}</div>
    </div>
  );
}

function ContentBox({name}){
  const content = ducks[name];
  return (
    <div style={{display: "inline-block"}}>
      <ContentBlock text={name} content={<ImageBlock src={content.Image}/>}/>
      <SummaryBlock name={name}/>
    </div>
  );
}

function ImageBlock({ src}) {
  const imageStyle = {
    maxWidth: '100%', // Ensure the image does not exceed its container width
    height: 'auto',
  };

  return (
      <img src={src} style={imageStyle} />
  );
  }

  function SummaryBlock({ name }) {
    const content = ducks[name];
  
    if (!content) {
      return <div>Summary not available for {name}</div>;
    }
  
    return (
      <div className="contentBlock" style={{textAlign: "left"}}>
        <div style={{textAlign: "center"}}>Summary</div>
        <div>Name: {content.Name}</div>
        <div>Job: {content.Job}</div>
        <div>Work: {content.Work}</div>
        <div>Description: {content.Description}</div>
      </div>
    );
  }



function Header({ text }) {
  return (
    <div className="header">
      <h3>{text}</h3>
    </div>
  );
}

function Head({ text }) {
  return (
    <div className="head">
      <h3>{text}</h3>
    </div>
  );
}

function SidePanelCell({ text}) {
  return (
    <div className="cell">
      {text}
    </div>
  );
}

function SidePanel() {
  return (
    <div className="sidePanel">
      <Head text="Quackk! - Design Doc" />
      <SidePanelCell text={"Home Page"}/>
      <SidePanelCell text={"NPCs"}/>
      <SidePanelCell text={"Map"}/>
      <SidePanelCell text={"Movement"}/>
      <SidePanelCell text={"Items"}/>
    </div>
  );
}

function SiteContent(){
  return (
  <div className="siteContent">
    <h3>Ducks</h3>
    <ContentBox name={"Duck Dad"}/>
    <ContentBox name={"Duck Mom"}/>
    <ContentBox name={"Duck Brother"}/>
    <ContentBox name={"Duck Grandpa"}/>
    <ContentBox name={"Duck Granny"}/>
    <ContentBox name={"Puddle"}/>
    <ContentBox name={"Puddle's Son"}/>
    <ContentBox name={"Puddle's Mom"}/>
    <ContentBox name={"Shoal"}/>
    <ContentBox name={"Shoal's Wife"}/>
    <ContentBox name={"Quill"}/>
  </div>
  );
}

export default function Tak() {
  return (
    <body>
      <Header text={"NPC"} />
      <SidePanel/>
      <SiteContent/>
    </body>
  );
}
