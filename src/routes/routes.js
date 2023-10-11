import App from "../index";
import ErrorPage from "../error-page";
import LoginForm from "../pages/Login/login";
import SignupForm from "../pages/Signup/signup";
import NewPost from "../pages/new-post/new-post";
import Profile from "../pages/profile/profile";
import Contact from "../pages/contact/contact";
import { createBrowserRouter } from "react-router-dom";

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
export default router;
