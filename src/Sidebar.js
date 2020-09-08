import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { IconButton, Avatar } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={props.picture} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="search or start new" type="text"></input>
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat
          handleRoom={props.handleRoom}
          name={"Chat Room 1"}
          avatar={"https://avatars.dicebear.com/api/jdenticon/c.svg"}
          messages={props.messages.filter(
            (message) => message.roomName === "Chat Room 1"
          )}
        />
        <SidebarChat
          handleRoom={props.handleRoom}
          name={"Chat Room 2"}
          avatar={"https://avatars.dicebear.com/api/jdenticon/cd.svg"}
          messages={props.messages.filter(
            (message) => message.roomName === "Chat Room 2"
          )}
        />
        <SidebarChat
          handleRoom={props.handleRoom}
          name={"Chat Room 3"}
          avatar={"https://avatars.dicebear.com/api/jdenticon/cdss.svg"}
          messages={props.messages.filter(
            (message) => message.roomName === "Chat Room 3"
          )}
        />
      </div>
    </div>
  );
}

export default Sidebar;
