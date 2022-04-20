import React from "react";
import { createRef } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = createRef();
  const postElement = props.posts.map((p) => (         //пропсы с MyPostsContainer
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let onAddPost = () => {
    props.addPost();
  };//пропсы из контейнера

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
          <button onClick={onAddPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={styles.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
