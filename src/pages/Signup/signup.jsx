import React, { useState } from "react";
import "./signup.module.css";
import styles from "./signup.module.css";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import * as yup from "yup";
import background from "../../assets/images/background.jpg";
import logoNew from "../../assets/logo/logo-no-background.png";
import axios from "axios";
import Dropzone from "react-dropzone";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/logo/icons8-google-48.png";
import facebook from "../../assets/logo/icons8-facebook-48.png";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Card, Input, Checkbox } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { customToast } from "../../utils/toasts";
import { CardGroup } from "reactstrap";
import { Menu } from "@headlessui/react";

export default function SignupForm() {
  const [picturePath, setpicturePath] = useState(null);
  const [values, setValues] = useState({ password: "" });
  const { palette } = useTheme();

  const registerSchema = yup.object().shape({
    firstname: yup.string().required("required"),
    lastname: yup.string().required("required"),
    username: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    gender: yup.string().required("required"),
    date: yup.string().required("required"),
    picture: yup.string().required("required"),
  });
  const initialValuesSignUp = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    date: "",
    picture: "",
  };

  const onInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setpicturePath(file);
    } else {
      setpicturePath(null);
    }
  };
  // const handleFormChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const value in values) {
        console.log(value);
        console.log(values[value]);
        formData.append(value, values[value]);
      }
      formData.append("picturePath", picturePath);
      // console.log(formData);
      // console.log(picturePath);
      // console.log(formData);
      // await axios
      //   .post("http://localhost:3001/adduser", formData, {
      //     headers: { "Content-Type": "multipart/form-data" },
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   });
    } catch (error) {
      customToast("error", error.message);
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
        className="flex items-center justify-center w-3/4 h-4/5 bg-cover bg-center bg-opacity-75"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="backdrop-blur w-full h-full rounded-lg border-none text-white flex flex-col ">
          <img src={logoNew} alt="logo" className="h-32 mx-auto mt-3" />
          <Formik
            initialValues={initialValuesSignUp}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              console.log(values);
            }}
          >
            {(props) => (
              <Form
                className="flex flex-col"
                // onSubmit={(e) => {
                //   e.preventDefault();
                //   console.log("props: ", props);
                //   console.log("submittedjkj");
                //   props.handleSubmit();
                // }}
              >
                <CardGroup
                  color="transparent"
                  className="w-full h-3/5 flex border-transparent"
                >
                  <Card
                    color="transparent"
                    className="w-2/4 h-full shadow-none"
                  >
                    <h1 className="text-3xl text-white text-center">Signup</h1>
                    <div className="flex flex-col gap-4 w-5/6 h-full mt-2 pl-32">
                      <Input
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.firstname}
                        name="firstname"
                        color="white"
                        size="lg"
                        variant="standard"
                        label="First name"
                        autoComplete="off"
                      />
                      {props.errors.name && (
                        <div id="feedback">{props.errors.name}</div>
                      )}
                      <Input
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.lastname}
                        name="lastname"
                        color="white"
                        size="lg"
                        autoComplete="off"
                        variant="standard"
                        label="Last name"
                      />
                      <Input
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.username}
                        name="username"
                        color="white"
                        size="lg"
                        autoComplete="off"
                        variant="standard"
                        label="Username"
                      />
                      <Input
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.date}
                        className="text-white"
                        name="date"
                        type="date"
                        autoComplete="off"
                        variant="standard"
                        color="white"
                        label="Birthday"
                      />
                      <select
                        className="form-control "
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.gender}
                        name="gender"
                        variant="standard"
                        label="gender"
                        color="red"
                      >
                        <option color="black">Male</option>
                        <option>Female</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </Card>
                  <Card
                    color="transparent"
                    className="flex w-2/4 h-full mt-9 shadow-none"
                  >
                    <div className="flex flex-col gap-4 w-5/6 h-full mt-3 pl-20 border-transparent">
                      {/* <Input
                        className="text-white"
                        type="file"
                        variant="standard"
                        accept=".jpg,.jpeg,.png"
                        // onChange={onInputChange}
                      /> */}
                      <Input
                        type="file"
                        name="picture"
                        className="text-white"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => {
                          const pictPath = e.target.value.split("\\")[2];
                          props.setFieldValue("picture", pictPath);
                          onInputChange(e);
                        }}
                      />
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
                      <div className="flex items-center justify-center">
                        <button type="submit">SignUp</button>
                      </div>
                      <Typography
                        className="text-center"
                        variant="h6"
                        color="white"
                      >
                        Or signup using
                      </Typography>
                      <div className="flex space-x-4 items-center justify-center"></div>
                    </div>
                  </Card>
                </CardGroup>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
