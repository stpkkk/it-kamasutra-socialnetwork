import s from "./Profile.module.css"
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg" />
      </div>
      <div>ava + discription</div>
      <div>
        My post
        <div>New post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
