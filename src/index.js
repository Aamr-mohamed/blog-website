import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Home/root";
import ErrorPage from "./error-page";
import LoginForm from "./routes/Login/login";
import SignupForm from "./routes/Signup/signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// export default App;
