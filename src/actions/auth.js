import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/config-firebase";

export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.email));
      });
  };
};
export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.email));
      });
  };
};

export const login = (uid, diplayName, email) => {
  return {
    type: types.login,
    payload: {
      uid,
      diplayName,
      email,
    },
  };
};

export const register = (email, nombre, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: nombre });
        dispatch(login(user.uid, user.diplayName, user.email));
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch({
      type: types.logout,
    });
  };
};
