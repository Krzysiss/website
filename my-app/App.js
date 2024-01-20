import React, { useState } from "react";
import "./styles.css";

function SiteContent({ children }) {
  return <div className="siteContent">{children}</div>;
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

function SidePanelCell({ text, onClick }) {
  return (
    <div className="cell" onClick={onClick}>
      {text}
    </div>
  );
}

function SidePanel({ onItemClick }) {
  return (
    <div className="sidePanel">
      <Head text="Quackk! - Design Doc" />
      <SidePanelCell text={"Home Page"} onClick={() => onItemClick("Home Page")} />
      <SidePanelCell text={"NPCs"} onClick={() => onItemClick("NPCs")} />
      <SidePanelCell text={"Map"} onClick={() => onItemClick("Map")} />
      <SidePanelCell text={"Movement"} onClick={() => onItemClick("Movement")} />
      <SidePanelCell text={"Items"} onClick={() => onItemClick("Items")} />
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
  const [contentBlocks, setContentBlocks] = useState([]);

  const handleItemClick = (text) => {
    const newContentBlock = <ContentBlock key={text} text={text} />;
    setContentBlocks((prevBlocks) => [...prevBlocks, newContentBlock]);
  };

  return (
    <body>
      <Header text={"NPC"} />
      <SidePanel onItemClick={handleItemClick} />
      <SiteContent>{contentBlocks}</SiteContent>
    </body>
  );
}
