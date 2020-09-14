import React, { useState } from "react";
import "./Home.css";
import axios from './axios'

function Home() {
    //track the reply content
  const [input, setInput] = useState("");

  const addReply = (e) => {
    let reply = input;
    e.preventDefault();
    alert(reply);
    e.target.reset();
    setInput("");
  };

  return (
    <div className="home">
      <div className="home__messageSection">
        <p>Anyone here?</p>
        <form onSubmit={addReply} action="">
          <input
            className="home__replyInput"
            placeholder="reply to this message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="home__replyBtn"></button>
        </form>
        <p>Anyone here?</p>
        <form onSubmit={addReply} action="">
          <input
            className="home__replyInput"
            placeholder="reply to this message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="home__replyBtn"></button>
        </form>
        <p>Anyone here?</p>
        <form onSubmit={addReply} action="">
          <input
            className="home__replyInput"
            placeholder="reply to this message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="home__replyBtn"></button>
        </form>
        <p>Anyone here?</p>
        <form onSubmit={addReply} action="">
          <input
            className="home__replyInput"
            placeholder="reply to this message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="home__replyBtn"></button>
        </form>

        <form className="home__messageForm" onSubmit={addReply} action="">
          <input
            className="home__messageInput"
            placeholder="Enter a new message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="home__messageBtn">Post</button>
        </form>
      </div>
    </div>
  );
}

export default Home;