import { createStore } from "redux";
import { useDispatch } from "react-redux";
// import produce from "immer";
import Types from "../constants"

console.log(JSON.parse(localStorage.getItem("data")));
// STATE
const initialState = JSON.parse(localStorage.getItem("data")) || {
  isLogged: false,
  token: "",
  email: "",
  firstName: "",
  lastName: "",
  id: "",
} ;

// Action 
export const login = (user) => ({
   type: /*Types.LOGIN*/ "LOGIN", payload: { 
    isLogged: true,
    token: user.token,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    id: user.id, 
  } 
});
export const logout = () => ({
  types: "LOGOUT",
  payload: { ...initialState },
});


// REDUCER
export const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "LOGIN":
      console.log("login", action.payload);
      return {
        ...state, ...action.payload,
      };
    case "LOGOUT":
      console.log("logout", action.payload);
      return {
        ...initialState,
      };
    default:
      return state;  
  }
}



export const store = createStore(reducer);
