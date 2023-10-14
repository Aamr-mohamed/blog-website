import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Contact, Root, Login, NewPost, Profile, Signup } from "./pages";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Root} />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/new-post" Component={NewPost} />
      <Route path="/contact" Component={Contact} />
      <Route path="/profile" Component={Profile} />
    </Routes>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastContainer transition={Slide} />
    <App />
  </BrowserRouter>
);
