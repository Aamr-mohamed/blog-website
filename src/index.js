import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Home/root";
import ErrorPage from "./error-page";
import LoginForm from "./routes/Login/login";
import SignupForm from "./routes/Signup/signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewPost from "./routes/new-post/new-post";
import Profile from "./routes/profile/profile";

const router = createBrowserRouter([
  {
    path: "login/",
    element: <LoginForm />,
  },
  {
    path: "signup/",
    element: <SignupForm />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "new-post/",
    element: <NewPost />,
  },
  {
    path: "profile/",
    element: <Profile />,
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
