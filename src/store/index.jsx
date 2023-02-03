import { createStore } from "redux";

import produce from "immer";

const initialState = {
  isLogged: false,
  token: "",
  email:"",
  firstName: "",
  lastName:"",
  id:""
};
////////////

// reducer


/////////////

export const store = createStore(reducer);