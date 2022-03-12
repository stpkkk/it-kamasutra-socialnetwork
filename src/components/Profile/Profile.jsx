import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
          alt="lake"
        />
      </div>
      <div>ava + discription</div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
