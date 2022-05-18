import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
  setTotalUsersCountActionCreator,
} from "../../redux/users-reducer";

class UsersContainer extends React.Component {
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
        this.props.setTotalUsersCount(response.data.totalCount);
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
    return (
      <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountActionCreator(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
