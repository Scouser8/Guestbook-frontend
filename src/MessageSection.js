import React, { useState } from "react";
import "./MessageSection.css";
import axios from "./axios";
import { DeleteForever, Edit } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

function MessageSection({
  messageId,
  messageContent,
  msgUserId,
  currentUser,
  userName,
}) {
  //track the reply content
  const [replyInput, setReplyInput] = useState("");

  //Add a new reply to the database
  const addReply = (e) => {
    let reply = replyInput;
    e.preventDefault();
    alert(reply);
    e.target.reset();
    setReplyInput("");
  };

  const editMessage = () => {};

  //delete message from database
  const deleteMessage = (e) => {
    alert(messageId);
    axios.delete(`/message/${messageId}/delete`).then((res) => {
      if (res.data === "Deleted") {
        alert("Message deleted");
      }
    });
  };
  return (
    <div className="messagesSection">
      <div className="home__userMessageContainer">
        <Avatar src="" />
        <h5 className="home__username">{userName}</h5>
      </div>
      <div className="home__messageContainer">
        <p className="home__message">{messageContent}</p>
        {currentUser === msgUserId ? (
          <>
            <IconButton onClick={editMessage} className="material-icon">
              <Edit />
            </IconButton>
            <IconButton onClick={deleteMessage} className="material-icon">
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
    </div>
  );
}

export default MessageSection;
