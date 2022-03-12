import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          <Post message="Hi! How are you" likesCount="7" />
        </div>
        <div className={s.item}>
          <Post message="It`s my first post" likesCount="18" />
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
