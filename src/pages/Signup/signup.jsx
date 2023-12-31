import React, { useState } from "react";
import "./signup.module.css";
import { Form, Formik } from "formik";
import * as yup from "yup";
import background from "../../assets/images/background.jpg";
import logoNew from "../../assets/logo/logo-no-background.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Card, Input, Select, Option } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { customToast } from "../../utils/toasts";
import { CardGroup } from "reactstrap";
import LoginGoogle from "../../components/Buttons/Google";
// import FacebookButton from "../../components/Buttons/facebook";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export default function SignupForm() {
  const [picturePath, setpicturePath] = useState(null);
  const navigate = useNavigate();

  const registerSchema = yup.object().shape({
    firstname: yup.string().required("required"),
    lastname: yup.string().required("required"),
    username: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    gender: yup.string(),
    date: yup.string().required("required"),
    pictureName: yup.string().required("required"),
  });
  const initialValuesSignUp = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    date: "",
    pictureName: "",
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

  const submitForm = async (values) => {
    try {
      const formData = new FormData();
      for (const value in values) {
        console.log(value);
        console.log(values[value]);
        formData.append(value, values[value]);
      }
      formData.append("picturePath", picturePath);
      console.log(formData);
      console.log(picturePath);
      console.log(formData);
      const res = await axios.post(`${backendUrl}/adduser`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res);

      toast.success("logged in successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => navigate("/login"),
      });
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
        className="flex items-center justify-center w-3/4 h-4/6 bg-cover bg-center bg-opacity-75"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="backdrop-blur w-full h-full rounded-lg border-none text-white flex flex-col ">
          <img src={logoNew} alt="logo" className="h-36 mx-auto mt-3" />
          <Formik
            initialValues={initialValuesSignUp}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              console.log(values);
              submitForm(values);
            }}
          >
            {(props) => (
              <Form className="flex flex-col" encType="multipart/form-data">
                <div
                  color="transparent"
                  className="w-full h-3/5 flex border-transparent"
                >
                  <Card
                    color="transparent"
                    className="w-2/4 h-full shadow-none"
                  >
                    <h1 className="text-3xl text-white text-center">Signup</h1>
                    <div className="flex flex-col gap-2 w-5/6 h-full mt-2 pl-32">
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
                      {props.errors.firstname && (
                        <div id="feedback" className="text-light-green-600 ">
                          {props.errors.firstname}
                        </div>
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
                      {props.errors.lastname && (
                        <div id="feedback" className="text-light-green-600">
                          {props.errors.lastname}
                        </div>
                      )}
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
                      {props.errors.username && (
                        <div id="feedback" className="text-light-green-600 ">
                          {props.errors.username}
                        </div>
                      )}
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
                      {props.errors.date && (
                        <div id="feedback" className="text-light-green-600">
                          {props.errors.date}
                        </div>
                      )}
                      <Select
                        className="form-control pt-9"
                        onChange={(e) => {
                          props.handleChange("gender")(e);
                          console.log("success");
                        }}
                        onBlur={props.handleBlur}
                        value={props.values.gender}
                        name="gender"
                        variant="standard"
                        label="gender"
                        color="pink"
                      >
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Prefer not to say">
                          Prefer not to say
                        </Option>
                      </Select>
                    </div>
                  </Card>
                  <Card
                    color="transparent"
                    className="flex w-2/4 h-full mt-9 shadow-none"
                  >
                    <div className="flex flex-col gap-2 w-5/6 h-full mt-3 pl-20 border-transparent">
                      <Input
                        type="file"
                        name="pictureName"
                        className="text-white"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => {
                          const pictPath = e.target.value.split("\\")[2];
                          props.setFieldValue("pictureName", pictPath);
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
                      {props.errors.email && (
                        <div id="feedback" className="text-light-green-600">
                          {props.errors.email}
                        </div>
                      )}
                      <Input
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.password}
                        autoComplete="off"
                        name="password"
                        type="password"
                        className="text-white"
                        color="white"
                        size="lg"
                        variant="standard"
                        label="Password"
                      />
                      {props.errors.password && (
                        <div id="feedback" className="text-light-green-600">
                          {props.errors.password}
                        </div>
                      )}

                      <button type="submit">SignUp</button>

                      <Typography
                        className="text-center"
                        variant="h6"
                        color="white"
                      >
                        Or signup using
                      </Typography>
                      {/* <div className="flex space-x-4 items-center justify-center">
                        <LoginGoogle />
                      </div> */}
                    </div>
                  </Card>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
