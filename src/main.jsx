import router from "./router";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
//import { store } from "./store.js";

import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  //  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  //  </Provider>
);
