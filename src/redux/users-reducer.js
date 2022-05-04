const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
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
    },
  ],
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
      return { ...state, users: [...state.users, ...action.users ]};
    }
    default:
      return state; //вовзращает default если нет case
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;
