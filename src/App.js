import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user, picture }, dispatch] = useStateValue();
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("Chat Room 1");
  const [roomAvatar, setRoomAvatar] = useState(
    "https://avatars.dicebear.com/api/jdenticon/c.svg"
  );

  const handleRoom = (roomName, avatar) => {
    setRoom(roomName);
    setRoomAvatar(avatar);
  };

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    var pusher = new Pusher("c4a1d453659ac2904f04", {
      cluster: "us2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      //alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      //clean up
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar
            handleRoom={handleRoom}
            messages={messages}
            picture={picture}
          />

          {/* Chat */}
          <Chat
            messages={messages.filter((message) => message.roomName === room)}
            room={room}
            roomAvatar={roomAvatar}
            username={user}
          />
        </div>
      )}
    </div>
  );
}

export default App;
