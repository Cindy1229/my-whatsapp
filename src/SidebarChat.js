import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat(props) {
  const [latest, setLatest] = useState("");

  const handleChange = () => {
    console.log(props.avatar);
    props.handleRoom(props.name, props.avatar);
  };
  useEffect(() => {
    //console.log(props.messages);
    props.messages.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
    //console.log(props.messages);
    if (props.messages.length !== 0) {
      setLatest(props.messages[0].message);
    }
  });
  return (
    <div className="sidebarChat">
      <Avatar src={props.avatar} />
      <div className="sidebarChat__info" onClick={handleChange}>
        <h2>{props.name}</h2>
        <p>Latest message: {latest}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
