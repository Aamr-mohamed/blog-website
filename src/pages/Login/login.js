import React from "react";
import "./login.module.css";
import { useNavigate } from "react-router-dom";
import background from "../../assets/images/background.jpg";
import logoNew from "../../assets/logo/logo-no-background.png";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { Card, Input, Typography } from "@material-tailwind/react";
import Google from "../../components/Buttons/Google";
import handleCredentials from "../../store/store";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const navigate = useNavigate();
  const verification = async (values) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    console.log(loggedIn.token);
    console.log(loggedIn.user);
    if (loggedIn.success === false) {
      toast.warn(loggedIn.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      handleCredentials(
        loggedIn.user.username,
        loggedIn.user._id,
        loggedIn.user.pictureName,
        loggedIn.token,
        loggedIn.user.friends
      );
      toast.success("logged in successfully", {
        position: "top-right",
        autoClose: 1000,
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
          <img src={logoNew} alt="logo" className="h-28 mx-auto mt-3" />
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
                  className=" w-3/4 h-full shadow-none mt-2 flex m-auto"
                >
                  <h1 className="text-3xl text-white text-center mt-7 ">
                    Login
                  </h1>
                  <div className="mb-6">
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      autoComplete="off"
                      name="email"
                      className="text-white "
                      color="white"
                      variant="standard"
                      label="Email"
                    />

                    {errors.email && (
                      <p id="feedback" className="text-light-green-600 text-sm">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-10">
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      autoComplete="off"
                      name="password"
                      type="password"
                      className="text-white"
                      color="white"
                      variant="standard"
                      label="Password"
                    />
                    {errors.password && (
                      <p id="feedback" className="text-light-green-600 text-sm">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="flex justify-center mb-3 rounded-full py-2 px-3 cursor-pointer bg-red-400 text-center text-lg text-black w-56 hover:bg-red-600 self-center"
                  >
                    Login
                  </button>

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
                    className="text-center"
                    variant="h6"
                    color="white"
                  >
                    Or signup using
                  </Typography>
                  <div className="flex flex-col items-center justify-center">
                    <Google />
                    {/* <Github />
                    <Facebook /> */}
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
