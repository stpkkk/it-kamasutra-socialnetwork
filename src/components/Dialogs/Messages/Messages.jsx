import styles from "../Dialogs.module.css";
import Message from "../Message/Message";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";

export const Messages = (props) => {
  
  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = (event) => {
    let text = event.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
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
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  );
};
