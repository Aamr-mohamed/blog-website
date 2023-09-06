import App from "../index";
import ErrorPage from "../error-page";
import LoginForm from "../pages/Login/login";
import SignupForm from "../pages/Signup/signup";
import NewPost from "../pages/new-post/new-post";

var dashRoutes = [
  {
    path: "/login/",
    component: <LoginForm />,
    name: "Login",
    layout: "",
  },
  {
    path: "/signup",
    component: <SignupForm />,
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
];

export default dashRoutes;
