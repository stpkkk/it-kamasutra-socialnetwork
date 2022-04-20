import React from "react";
import styles from "../Dialogs.module.css";
import Message from "../Message/Message";



export const Messages = (props) => {
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let onSendMessage = () => {
    props.sendMessageActionCreator();
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageTextActionCreator(text);
  };

  return (
    <div className={styles.messages}>
      <ul>{messagesElements}</ul>
      <div>
        <textarea
          onChange={onMessageChange}
          value={props.newMessageText}
          placeholder="Enter your message"
          cols="100"
          rows="5"
        />
      </div>
      <div>
        <button onClick={onSendMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Messages;
