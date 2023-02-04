import { createStore } from "redux";
import produce from "immer";

const initialState = {
  isLogged: false,
  token: "",
  email: "",
  firstName: "",
  lastName: "",
  id: "",
};

// Action 

export const login = (user) => ({
   type: Types.LOGIN, payload: { 
    isLogged: true,
    token: user.token,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    id: user.id, 
  } 
});
//export const updateProfile = (user) => ({ type: Types.UPDATE_USER, payload: { user } })


// reducer

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      console.log("login", action.payload.user);
      // return {
      //   ...state,
      //   profile: action.payload.user,
      //   formSubmitted: false, // after update user formsubmition reset
      // };
      return produce(state, (draft) => {

      });
    // case Types.UPDATE_USER:
    //   return {
    //     ...state,
    //     profile: action.payload.user,
    //     formSubmitted: false, // after update user formsubmition reset
    //   };
    default:
      return state;
  }
}

////////////



/////////////

export const store = createStore(reducer);
