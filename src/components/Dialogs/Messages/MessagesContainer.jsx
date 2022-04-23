import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import StoreContext from "../../../redux/StoreContext";
import Messages from "./Messages";

export const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let onSendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Messages
            updateNewMessageTextActionCreator={onMessageChange}
            sendMessageActionCreator={onSendMessage}
            messages={state.messages}
            newMessageText={state.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;
