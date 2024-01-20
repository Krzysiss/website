import React, { useState } from "react";
import "./styles.css";

function SiteContent({ children }) {
  return 
  <div className="siteContent">
    <ContentBlock/>
  </div>;
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

function SidePanel({ onItemClick }) {
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

function ContentBlock({ text }) {
  return (
    <div className="contentBlock">
      {text}
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
