import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";

export const MessagesContainer = (props) => {
  let onSendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Messages
      updateNewMessageTextActionCreator={onMessageChange}
      sendMessageActionCreator={onSendMessage}
      messages={props.state.dialogsPage.messages}

    />
  );
};

export default MessagesContainer;
