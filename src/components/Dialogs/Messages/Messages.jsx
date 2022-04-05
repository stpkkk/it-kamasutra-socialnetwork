import React, { createRef } from "react";
import styles from "../Dialogs.module.css";
import Message from "../Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/store";

export const Messages = (props) => {
  const newMessageElement = createRef();
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={styles.messages}>
      <ul>{messagesElements}</ul>
      <div>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newMessageText}
          cols="100"
          rows="5"
        />
      </div>
      <div>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};
