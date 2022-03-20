import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = ({ post }) => {
  const postElement = post.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
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
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
