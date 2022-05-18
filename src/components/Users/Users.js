import React from "react";
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";

let Users = (props) => {
	let pagesCount = Math.ceil(
		props.totalUsersCount / props.pageSize
	  ); // Math.ceil округление в большую сторону, чтобы показывало нужное количество страниц
	  let pages = [];
	  for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	  } // пагинация
  
  return (
    <div className={styles.wrapper}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }} //пагинация p-pages, ocClick на номера страниц, замыкание
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div>
          <span>
            <div>
              <img
                className={styles.userPhoto}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="avatar"
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.city}</div>
					  <div>{u.location.country}</div>
					  в дате нет таких сущностей поэтому пока закоментим */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
