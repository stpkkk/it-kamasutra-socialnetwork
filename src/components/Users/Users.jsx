import React from "react";
import styles from "./users.module.css";
import * as axios from "axios"; //импортируем все что там экспортируется под общим названием axios
import userPhoto from "../../assets/images/user.png"

const Users = (props) => {
	let getUsers = () => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      }); //подключили дату с сервера
  }
}
  // props.setUsers( [{
  // 	id: 1,
  // 	photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyt0bSJhqucS4mE6t1y3EyusW7wKcGGgEnA&usqp=CAU",
  // 	followed: true,
  // 	fullName: "Varg",
  // 	status: "like a boss",
  // 	location: { city: "Oslo", country: "Norway" },
  //   },
  //   {
  // 	id: 2,
  // 	photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyt0bSJhqucS4mE6t1y3EyusW7wKcGGgEnA&usqp=CAU",
  // 	followed: false,
  // 	fullName: "Iggy",
  // 	status: "junior-developer",
  // 	location: { city: "LA", country: "USA" },
  //   },
  //   {
  // 	id: 3,
  // 	photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyt0bSJhqucS4mE6t1y3EyusW7wKcGGgEnA&usqp=CAU",
  // 	followed: false,
  // 	fullName: "Valera",
  // 	status: "че",
  // 	location: { city: "Petrozavodsk", country: "Russia" },
  //   },])

  return (
	  <div>
		<button onClick = {getUsers}>Get Users</button>
      {props.users.map((u) => (
        <div>
          <span>
            <div>
              <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
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
