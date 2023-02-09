import { createStore } from "redux";
import { useDispatch } from "react-redux";
import Types from "../constants";

// STATE
const initialState = JSON.parse(localStorage.getItem("data")) || {
  isLogged: false,
  token: "",
  email: "",
  firstName: "",
  lastName: "",
  id: "",
};

// Action
export const login = (user) => ({
  type: /*Types.LOGIN*/ "LOGIN",
  payload: {
    isLogged: true,
    token: user.token,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    id: user.id,
  },
});
export const logout = () => ({
  types: "LOGOUT",
  payload: { ...initialState },
});

export const setName = (data) => ({
  type: "SET_NAME",
  payload : { firstName: data.firstName, lastName: data.lastName }
});

// REDUCER
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("login", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT":
      console.log("logout", action.payload);
      return {
        ...initialState,
      };
    case "SET_NAME":
      console.log("set_name", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
