import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Home/root";
import ErrorPage from "./error-page";
import LoginForm from "./pages/Login/login";
import SignupForm from "./pages/Signup/signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewPost from "./pages/new-post/new-post";
import Profile from "./pages/profile/profile";
import Contact from "./pages/contact/contact";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new-post",
    element: <NewPost />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
export default function App() {
  return (
    <div>
      <Root />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
