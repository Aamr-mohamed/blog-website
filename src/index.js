import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import router from "./routes/routes";
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import Root from "./pages/Home/root";
import LoginForm from "./pages/Login/login";
import SignupForm from "./pages/Signup/signup";
import NewPost from "./pages/new-post/new-post";
import Contact from "./pages/contact/contact";
import Profile from "./pages/profile/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Root} />
      <Route path="/login" Component={LoginForm} />
      <Route path="/signup" Component={SignupForm} />
      <Route path="/new-post" Component={NewPost} />
      <Route path="/contact" Component={Contact} />
      <Route path="/profile" Component={Profile} />
    </Routes>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
