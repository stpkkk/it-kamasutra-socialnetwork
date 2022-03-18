import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postData = [
    { id: 1, message: "Hi! How are you", likesCount: "7" },
    { id: 2, message: "It`s my first post", likesCount: "42" },
  ];

  let postElemets = postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.PostBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          <Post
            message={postData[0].message}
            likesCount={postData[0].likesCount}
          />
        </div>
        <div className={s.item}>
          <Post
            message={postData[1].message}
            likesCount={postData[1].likesCount}
          />
        </div>
        {/* <div className={s.item}>
          <Post />
        </div>
        <div className={s.item}>
          <Post />
        </div>
        <div className={s.item}>
          <Post />
        </div>
        <div className={s.item}>
          <Post />
        </div> */}
      </div>
    </div>
  );
};

export default MyPosts;
