const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you", likesCount: "7" },
    { id: 2, message: "It`s my first post", likesCount: "42" },
  ],
  newPostText: "Тяу Тяу Тяу",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = { ...state };
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      }; // поменяли логику if,else на switch, case
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = ""; //зануляем2
      return stateCopy; // return чтобы остановить первый case
    }

    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state; //вовзращает default если нет case
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST }); //action
//без return, сокращенная запись если функция только возвращает что-то
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
