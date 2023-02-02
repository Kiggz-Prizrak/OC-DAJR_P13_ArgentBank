import { createStore } from "redux";

import produce from "immer";

const initialState = {
  isLogged: false,
  userId: 0,
  token: "",
  user: null,
};
////////////

// reducer


/////////////

export const store = createStore(reducer);