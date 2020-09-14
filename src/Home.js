import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "./axios";

function Home() {
  //track the reply content
  const [replyInput, setReplyInput] = useState("");
  //track the reply content
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    axios.get("").then((res) => {
      console.log(res);
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
    let newMessage = {
      content: messageInput,
      user_id:""
    };
    e.preventDefault();
    e.target.reset();
    setMessageInput("");
    axios.post("/message/123/add", newMessage).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="home">
      <div className="home__messageSection">
        <p className="home__message">Anyone here?</p>
        <form onSubmit={addReply} action="">
          <input
            contenteditable="true"
            className="home__replyInput"
            placeholder="reply to this message"
            onChange={(e) => setReplyInput(e.target.value)}
          />
          <button type="submit" className="home__replyBtn"></button>
        </form>
        <p className="home__message">Anyone here?</p>
        <form onSubmit={addReply} action="">
          <input
            className="home__replyInput"
            placeholder="reply to this message"
            onChange={(e) => setReplyInput(e.target.value)}
          />
          <button type="submit" className="home__replyBtn"></button>
        </form>
        <p className="home__message">Anyone here?</p>
        <form onSubmit={addReply} action="">
          <input
            className="home__replyInput"
            placeholder="reply to this message"
            onChange={(e) => setReplyInput(e.target.value)}
          />
          <button type="submit" className="home__replyBtn"></button>
        </form>
        <p className="home__message">Anyone here?</p>
        <form onSubmit={addReply} action="">
          <input
            className="home__replyInput"
            placeholder="reply to this message"
            onChange={(e) => setReplyInput(e.target.value)}
          />
          <button type="submit" className="home__replyBtn"></button>
        </form>

        <form className="home__messageForm" onSubmit={addMessage} action="">
          <input
            className="home__messageInput"
            placeholder="Enter a new message"
            onChange={(e) => setMessageInput(e.target.value)}
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
