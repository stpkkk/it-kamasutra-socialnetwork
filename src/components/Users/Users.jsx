import React from "react";
import styles from "./users.module.css";

const Users = (props) => {

	if (props.users.length === 0) 

props.setUsers( [{
	id: 1,
	photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyt0bSJhqucS4mE6t1y3EyusW7wKcGGgEnA&usqp=CAU",
	followed: true,
	fullName: "Varg",
	status: "like a boss",
	location: { city: "Oslo", country: "Norway" },
  },
  {
	id: 2,
	photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyt0bSJhqucS4mE6t1y3EyusW7wKcGGgEnA&usqp=CAU",
	followed: false,
	fullName: "Iggy",
	status: "junior-developer",
	location: { city: "LA", country: "USA" },
  },
  {
	id: 3,
	photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyt0bSJhqucS4mE6t1y3EyusW7wKcGGgEnA&usqp=CAU",
	followed: false,
	fullName: "Valera",
	status: "че",
	location: { city: "Petrozavodsk", country: "Russia" },
  },])

  return (
    <div >
      {props.users.map((u) => (
        <div >
          <span>
            <div>
              <img className={styles.userPhoto} src={u.photoUrl} alt="avatar" />
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
