let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log("State changed");
  }, // в прошлом rerenderEntireTree, теперь мы уведомляем подписчика

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }, //observer наблюдатель

  dispatch(action) {
    if (action.type === "addPost") {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ""; //зануляем2
      this._callSubscriber(this._state);
    } else if (action.type === "updateNewPostText") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "addMessage") {
      let newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "updateNewMessageText") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
