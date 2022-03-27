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
    let text = newPostElement.current.value;
    props.addPost(text); //функция из BLL
    newPostElement.current.value = ""; //зануляем
  };

  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement} cols="30" rows="10"></textarea>
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
