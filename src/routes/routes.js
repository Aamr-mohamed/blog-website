import App from "../index";
import ErrorPage from "../error-page";
import LoginForm from "../pages/Login/login";
import SignupForm from "../pages/Signup/signup";
import NewPost from "../pages/new-post/new-post";
import Profile from "../pages/profile/profile";
import Contact from "../pages/contact/contact";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
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
    ]
  },
  
]);
const Layout =()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <SideBar/>
    </>
  )
}



export default router;
