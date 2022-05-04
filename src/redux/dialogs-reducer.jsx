const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    { id: 1, name: "Masha" },
    { id: 2, name: "Maxim" },
    { id: 3, name: "Alexey" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Vlad" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hey" },
    { id: 2, message: "Do you feel ok?" },
    { id: 3, message: "How you doing?" },
    { id: 4, message: "WTF" },
    { id: 5, message: "How is your it-kamasutra" },
    {
      id: 6,
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam unde dolore perspiciatis voluptate non odit esse? Consequuntur doloremque animi corrupti at suscipit vitae, magnam officia unde facere, voluptatem, perferendis fuga.",
    },
  ],
  newMessageText: "на пенек сел",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 7, message: text }],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
