import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi! How are you", likesCount: "7" },
      { id: 2, message: "It`s my first post", likesCount: "42" },
    ],
    newPostText: "Тяу Тяу Тяу",
  },
  dialogsPage: {
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
  },
};

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = ""; //зануляем2
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export default state;
