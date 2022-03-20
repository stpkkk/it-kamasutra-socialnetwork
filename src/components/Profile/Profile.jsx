import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = ({post}) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts post={post}/> 
    </div>
  );
};

export default Profile;

{/* <MyPosts post={post}/> - props из index.js */}