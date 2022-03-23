import React from "react";
import s from "../dialogs.module.css";

const Message = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.message}>
      <div>
        <textarea ref={newMessageElement} text={props.message}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Message;
