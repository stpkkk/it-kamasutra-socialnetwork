import React from "react";
import { createRef } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let newPostElement = createRef();
  const postElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let addPost = () => {
    props.addPost(); //функция из state убрали text
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text); //из state
  };

  return (
    <div className={styles.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange} //обработчик событий
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
      <div className={styles.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
