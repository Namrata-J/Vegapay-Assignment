import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import { DialogProvider, SideBarProvider, UsersProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactRouter>
      <SideBarProvider>
        <DialogProvider>
          <UsersProvider>
            <App />
          </UsersProvider>
        </DialogProvider>
      </SideBarProvider>
    </ReactRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
