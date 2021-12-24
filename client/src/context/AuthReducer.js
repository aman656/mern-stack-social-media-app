const AuthReducer = (state, action) => {
  switch (action.type) {
    case "start":
      return {
        user: null,
        fetching: true,
        error: null,
      };
    case "success":
      return {
        user: action.payload,
        fetching: false,
        error: null,
      };
    case "failed":
      return {
        user: null,
        fetching: false,
        error: action.payload,
      };

    case "follow":
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case "unfollow":
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (fil) => fil !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
