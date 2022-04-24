// import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import Messages from "../Messages/Messages";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessageActionCreator: () => {
      dispatch(sendMessageActionCreator());
    },

    updateNewMessageTextActionCreator: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
