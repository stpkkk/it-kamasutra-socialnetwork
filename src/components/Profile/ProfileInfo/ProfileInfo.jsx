import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "./../../common/Preloader/Preloader";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } // Если у нас ProfileInfo не равно profile (или null), то будет preloader
  return (
    <div>
      <div>
        <img
          src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
          alt="lake"
        />
      </div>
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large} alt="UserPhoto" />
      </div>
      <div>Обо мне: {props.profile.aboutMe}</div>
      <div>
        <ul>
          <li>facebook: {props.profile.contacts.facebook}</li>
          <li>website: {props.profile.contacts.website}</li>
          <li>vk: {props.profile.contacts.vk}</li>
          <li>twitter: {props.profile.contacts.twitter}</li>
          <li>instagram: {props.profile.contacts.instagram}</li>
          <li>youtube: {props.profile.contacts.youtube}</li>
          <li>github: {props.profile.contacts.github}</li>
          <li>mainLink: {props.profile.contacts.mainLink}</li>
        </ul>
      </div>
      <div>В поиске работы: {props.profile.lookingForAJob}</div>
      <div>Описание работы: {props.profile.lookingForAJobDescription}</div>
      <div>Полное имя: {props.profile.fullName}</div>
    </div>
  );
};

export default ProfileInfo;
