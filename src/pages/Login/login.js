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
    if (loggedIn.success === false) {
      toast.warn(loggedIn.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("logged in successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => navigate("/"),
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
            {({ values, errors, touched, handleBlur, handleChange }) => (
              <Form className="flex flex-col">
                <Card
                  color="transparent"
                  className=" w-3/4 h-full shadow-none gap-3 mt-2 flex m-auto"
                >
                  <h1 className="text-3xl text-white text-center mt-10 mb-7">
                    Login
                  </h1>

                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    autoComplete="off"
                    name="email"
                    className="text-white"
                    color="white"
                    size="lg"
                    variant="standard"
                    label="Email"
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  {errors.email && (
                    <p id="feedback" className="text-light-green-600 mb-3">
                      {errors.email}
                    </p>
                  )}
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    autoComplete="off"
                    name="password"
                    className="text-white"
                    color="white"
                    size="lg"
                    variant="standard"
                    label="Password"
                    error={
                      Boolean(touched.password) && Boolean(errors.password)
                    }
                    helperText={touched.password && errors.password}
                  />
                  {errors.password && (
                    <p id="feedback" className="text-light-green-600 mb-3">
                      {errors.password}
                    </p>
                  )}
                  <div className="flex items-center justify-center mb-4">
                    <button
                      type="submit"
                      className="rounded-full py-2 px-3 cursor-pointer bg-red-400 text-center text-lg text-black w-48 hover:bg-red-600"
                    >
                      Login
                    </button>
                  </div>
                  <Typography
                    className="text-center mb-4"
                    variant="h6"
                    color="white"
                  >
                    Dont have an account? <br />
                    <a href="/signup" className="text-black">
                      Click here
                    </a>
                  </Typography>
                  <Typography
                    className="text-center mb-4"
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
