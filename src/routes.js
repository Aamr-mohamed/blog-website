import App from "./index";
import ErrorPage from "./error-page";
import LoginForm from "./routes/Login/login";
import SignupForm from "./routes/Signup/signup";
import NewPost from "./routes/new-post/new-post";

var dashRoutes = [
  {
    path: "login/",
    component: <LoginForm />,
    name: "Login",
    layout: "",
  },
  {
    path: "signup/",
    component: <SignupForm />,
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
];
export default dashRoutes;
