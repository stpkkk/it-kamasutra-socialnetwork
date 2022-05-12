// В этой компоненте впервые используем классы!!!

import React from "react";
import styles from "./users.module.css";
import * as axios from "axios"; //импортируем все что там экспортируется под общим названием axios
import userPhoto from "../../assets/images/user.png";

class UsersС extends React.Component {
//   constructor(props) {
//     super(props);
//   }  Если конструктор наследует только от родительского обьекта, то можно упростить написание без constructor и super

  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      }); //подключили дату с сервера
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default UsersС;
