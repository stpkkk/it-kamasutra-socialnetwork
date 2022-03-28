import React from "react";
import { createRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  const postElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = createRef();

  let addPost = () => {
    props.addPost(); //функция из state убрали text
  };

  let onPostPage = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text); //из state
  };

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostPage} //обработчик событий
            ref={newPostElement}
            value={props.newPostText} //из state
            cols="30"
            rows="10"
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
