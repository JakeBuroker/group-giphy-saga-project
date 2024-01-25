import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* wrap App in Provider to PROVIDE store GLOBALLY */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
