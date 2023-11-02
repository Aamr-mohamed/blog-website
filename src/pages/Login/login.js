import React from "react";
import "./login.module.css";
import { useNavigate } from "react-router-dom";
import background from "../../assets/images/background.jpg";
import logoNew from "../../assets/logo/logo-no-background.png";
import { ToastContainer, toast, Slide } from "react-toastify";
import { customToast } from "../../utils/toasts";
import axios from "axios";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { Card, Input, Typography } from "@material-tailwind/react";
import Google from "../../components/Buttons/Google";
import Github from "../../components/Buttons/github";
import Facebook from "../../components/Buttons/facebook";

export default function LoginForm() {
  const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
  });
  const initialValuesLogin = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const verification = async (values) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    if (loggedIn) {
      toast.warn("You are our first user please Signup first :D", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => navigate("/root"),
      });
    }
  };

  return (
    <div
      className="bg-cover bg-center h-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        className="flex items-center justify-center w-1/4 h-4/5 bg-cover bg-center bg-opacity-75"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="backdrop-blur w-full h-full rounded-lg border-none text-white flex flex-col ">
          <img src={logoNew} alt="logo" className="h-32 mx-auto mt-3" />
          <Formik
            initialValues={initialValuesLogin}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              console.log(values);
              verification(values);
            }}
          >
            {(props) => (
              <Form className="flex flex-col">
                <Card
                  color="transparent"
                  className=" w-3/4 h-full shadow-none gap-6 mt-2 flex m-auto"
                >
                  <h1 className="text-3xl text-white text-center mt-10">
                    Login
                  </h1>

                  <Input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    autoComplete="off"
                    name="email"
                    className="text-white"
                    color="white"
                    size="lg"
                    variant="standard"
                    label="Email"
                  />
                  {props.errors.name && (
                    <div id="feedback">{props.errors.name}</div>
                  )}
                  <Input
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                    autoComplete="off"
                    name="password"
                    className="text-white"
                    color="white"
                    size="lg"
                    variant="standard"
                    label="Password"
                  />
                  {props.errors.name && (
                    <div id="feedback">{props.errors.name}</div>
                  )}
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="rounded-full py-2 px-3 cursor-pointer bg-red-400 text-center text-lg text-black w-48 hover:bg-red-600"
                    >
                      Login
                    </button>
                  </div>
                  <Typography
                    className="text-center"
                    variant="h6"
                    color="white"
                  >
                    Dont have an account? <br />
                    <a href="/signup" className="text-black">
                      Click here
                    </a>
                  </Typography>
                  <Typography
                    className="text-center"
                    variant="h6"
                    color="white"
                  >
                    Or signup using
                  </Typography>
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <Google />
                    <Github />
                    <Facebook />
                  </div>
                </Card>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
