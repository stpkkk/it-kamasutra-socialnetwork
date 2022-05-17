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
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}` //прописали query параметры для пагинации, обратные ковычки
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
		this.props.setTotalUsersCount(response.data.totalCount)
      }); //подключили дату с сервера
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}` //прописали query параметры для пагинации
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      }); //подключили дату с сервера
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
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
                className={this.props.currentPage === p && styles.selectedPage}
                onClick={(e) => {
                  this.onPageChanged(p);
                }} //пагинация p-pages, ocClick на номера страниц, замыкание
              >
                {p}
              </span>
            );
          })}
        </div>
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
