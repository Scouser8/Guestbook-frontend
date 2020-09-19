import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "./axios";
import MessageSection from "./MessageSection";

function Home({ user }) {
  //track the message content
  const [message, setMessageInput] = useState({
    content: "",
    user_id: user._id,
    user_name: user.user_name,
  });

  //get the messages from DB to display
  const [dbMessages, setdbMessages] = useState([]);

  //Load messages once the component renders
  useEffect(() => {
    axios.get("/message").then((res) => {
      setdbMessages(res.data);
    });
  }, []);

  //Add a new message to the database
  const addMessage = (e) => {
    e.preventDefault();
    e.target.reset();
    setMessageInput({
      content: "",
      user_id: user._id,
      user_name: user.user_name,
    });
    axios.post(`/message/${user.id}/add`, message).then((res) => {
      console.log(res.data);
    });
  };

  const handleInputChange = (e) => {
    setMessageInput({ ...message, [e.target.name]: e.target.value });
  };

  return (
    <div className="home">
      <div className="home__messageSection">
        {dbMessages.map((msg) => (
          <MessageSection
            messageId={msg._id}
            messageContent={msg.content}
            msgUserId={msg.user_id}
            currentUser={user._id}
            userName={msg.user_name}
          />
        ))}

        <form className="home__messageForm" onSubmit={addMessage} action="">
          <input
            name="content"
            className="home__messageInput"
            placeholder="Enter a new message"
            onChange={handleInputChange}
          />
          <button type="submit" className="home__messageBtn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
