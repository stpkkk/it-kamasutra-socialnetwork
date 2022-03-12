import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAV69tT1tnVARf9jawdHiqS3yYFXMHQiGEw&usqp=CAU"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>likes {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
