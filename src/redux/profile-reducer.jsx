const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"; //1.сначала определяем тип экшена

let initialState = {
  posts: [
    { id: 1, message: "Hi! How are you", likesCount: "7" },
    { id: 2, message: "It`s my first post", likesCount: "42" },
  ],
  newPostText: "Тяу Тяу Тяу",
  profile: null, //4. начальный state
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
      }; // поменяли логику if,else на switch, case
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }; // 3., вытаскиваем данные из state, Если кейс такой вот то мы вернем копию state в которой поменяем profile на к profile который сидит в action

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
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
}); //2.после этого пишем case

export default profileReducer;
