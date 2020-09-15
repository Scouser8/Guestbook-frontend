import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "./axios";
import { Avatar, IconButton } from "@material-ui/core";
import { DeleteForever, Edit } from "@material-ui/icons";

function Home({ user }) {
  //track the reply content
  const [replyInput, setReplyInput] = useState("");
  //track the message content
  const [message, setMessageInput] = useState({
    content: "",
    user_id: user._id,
    user_name: user.user_name,
  });

  //get the messages from DB to display
  const [dbMessages, setdbMessages] = useState([]);

  useEffect(() => {
    axios.get("/message").then((res) => {
      setdbMessages(res.data);
    });
  }, []);

  //
  const addReply = (e) => {
    let reply = replyInput;
    e.preventDefault();
    alert(reply);
    e.target.reset();
    setReplyInput("");
  };

  const addMessage = (e) => {
    console.log(message);
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
          <>
            <div className="home__userMessageContainer">
              <Avatar src="" />
              <h5 className="home__username">{msg.user_name}</h5>
            </div>
            <div className="home__messageContainer">
              <p className="home__message">{msg.content}</p>
              {user._id === msg.user_id ? (
                <>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <DeleteForever />
                  </IconButton>
                </>
              ) : (
                <></>
              )}
            </div>
            <form onSubmit={addReply} action="">
              <input
                className="home__replyInput"
                placeholder="reply to this message"
                onChange={(e) => setReplyInput(e.target.value)}
              />
              <button type="submit" className="home__replyBtn"></button>
            </form>
          </>
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
