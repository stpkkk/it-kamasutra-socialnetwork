import React from "react";
import styles from "../Dialogs.module.css";
import Message from "../Message/Message";
import { createRef } from "react";

export const Messages = (props) => {
  let newMessageElement = createRef();
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let onSendMessage = () => {
    props.sendMessageActionCreator();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageTextActionCreator(text);
  };

  return (
    <div className={styles.messages}>
      <ul>{messagesElements}</ul>
      <div>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
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
