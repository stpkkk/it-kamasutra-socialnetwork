let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi! How are you", likesCount: "7" },
      { id: 2, message: "It`s my first post", likesCount: "42" },
    ],
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
  },
};

export let addPost = (postMessage) => {
	debugger;
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
};

export let addMessage = (dialogsMessage) => {
  let newMessage = {
    id: 7,
    message: dialogsMessage,
  };
  state.profilePage.messages.push(newMessage);
};

export default state;
