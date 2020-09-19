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
  const [messageToEdit, setNewMessage] = useState(messageContent);

  //Add a new reply to the database
  const addReply = (e) => {
    let reply = replyInput;
    e.preventDefault();
    alert(reply);
    e.target.reset();
    setReplyInput("");
  };

  

  const enableEditing = () => {
    const message = document.getElementById(messageId);
    message.contentEditable = true;
    message.focus();
  };

  const editMessage = (e) => {
    // setMessage(e.target.textContent);
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      const message = document.getElementById(messageId);
      message.contentEditable = false;
      alert(e.target.textContent);
    }
  };

  //delete message from database
  const deleteMessage = (e) => {
    // alert(messageId);
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
        <p
          id={messageId}
          contentEditable="false"
          className="home__message"
          onKeyDown={editMessage}
        >
          {messageContent}
        </p>
        {currentUser === msgUserId ? (
          <>
            <IconButton className="material-icon" onClick={enableEditing}>
              <Edit />
            </IconButton>
            <IconButton className="material-icon" onClick={deleteMessage}>
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
