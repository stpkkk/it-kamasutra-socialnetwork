import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../redux/StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
		  let state = store.getState().profilePage
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        }; //из state привязались с помощью type

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.posts}
            newPostText={state.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
