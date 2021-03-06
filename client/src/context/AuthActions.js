export const LoginStart = (user) => ({
  type: "start",
});

export const LoginSuccess = (user) => ({
  type: "success",
  payload: user,
});

export const LoginFail = (error) => ({
  type: "failed",
  payload: error,
});

export const follow = (uid) => ({
  type: "follow",
  payload: uid,
});

export const unfollow = (uid) => ({
  type: "unfollow",
  payload: uid,
});
