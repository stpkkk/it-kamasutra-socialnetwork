const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0, //19 из головы
  currentPage: 1,
  isFetching: true, //preloader
  //   users: [
  //     {
  //       id: 1,
  // 	  photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyt0bSJhqucS4mE6t1y3EyusW7wKcGGgEnA&usqp=CAU",
  //       followed: true,
  //       fullName: "Varg",
  //       status: "like a boss",
  //       location: { city: "Oslo", country: "Norway" },
  //     },
  //     {
  //       id: 2,
  // 	  photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyt0bSJhqucS4mE6t1y3EyusW7wKcGGgEnA&usqp=CAU",
  //       followed: false,
  //       fullName: "Iggy",
  //       status: "junior-developer",
  //       location: { city: "LA", country: "USA" },
  //     },
  //     {
  //       id: 3,
  // 	  photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyt0bSJhqucS4mE6t1y3EyusW7wKcGGgEnA&usqp=CAU",
  //       followed: false,
  //       fullName: "Valera",
  //       status: "че",
  //       location: { city: "Petrozavodsk", country: "Russia" },
  //     },
  //   ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      //   if (state.users.length > 0) {
      //     return state;
      //   } //иначе нарисует 2 раза state
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }; //номер страницы пагинации
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state; //вовзращает default если нет case
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
}); //currentPage из action
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetchingActionCreation = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching, //из case
});//preloader

export default usersReducer;
