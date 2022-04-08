const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 3,
      message: state.newPostText,
      likesCount: 0,
    };
    state.posts.push(newPost);
    state.newPostText = ""; //зануляем2

  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;

    return state;
  }
};

export default profileReducer;
