import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let PostData = [
    { id: 1, message: "Hi! How are you", likesCount: "7" },
    { id: 2, message: "It`s my first post", likesCount: "42" },
  ];

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
          <Post message={PostData[0].message} likesCount={PostData[0].likesCount} />
        </div>
        <div className={s.item}>
          <Post message={PostData[1].message} likesCount={PostData[1].likesCount} />
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
