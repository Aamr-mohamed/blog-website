import React, { useState } from "react";
import "./signup.module.css";
import styles from "./signup.module.css";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
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
import { Form } from "react-bootstrap";

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

  // const [image, setImage] = useState();

  // const submitImage = async (e) => {
  //   e.preventDefault();

  //   const result = await axios.post(
  //     "http://localhost:3001/upload-image",
  //     formData,
  //     {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     }
  //   );
  // };

  // localStorage.setItem("currentEmail", "");
  // localStorage.setItem("currentUser", "");
  // localStorage.setItem("usergender", "");

  // const Form = () => {
  //   const navigate = useNavigate();
  //   const register = async (values, onSubmitProps) => {
  //     const formData = new FormData();
  //     for (let value in values) {
  //       formData.append(value, values[value]);
  //     }
  //     formData.append("picturePath", values.picture.name);
  //   };
  // };

  // var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // e.preventDefault();
  // if (
  //   existingUsers.find(
  //     (user) =>
  //       user.email === values.email || user.username === values.username
  //   )
  // ) {
  //   customToast("warn", "This user already exists");
  // } else if (values.password !== values.password2) {
  //   customToast("warn", "Passwords do not match");
  // } else {
  // const hashedPassword = await bcrypt.hash(values.password, 10);
  // existingUsers.push({
  //   firstname: values.firstname,
  //   lastname: values.lastname,
  //   username: values.username,
  //   email: values.email,
  //   password: hashedPassword,
  //   gender: values.gender,
  //   date: values.date,
  // });
  // localStorage.setItem("currentEmail", values.email);
  // localStorage.setItem("currentUser", values.username);
  // localStorage.setItem("usergender", values.gender);
  // localStorage.setItem("users", JSON.stringify(existingUsers));

  // return (
  //   <div
  //     className={styles.signupBackground}
  //     style={{
  //       backgroundImage: `url(${background})`,
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //     }}
  //   >
  //     <form onSubmit={HandleSubmit}>
  //       <CardGroup className={styles.signupCard1}>
  //         <CardGroup
  //           className={styles.signupCard}
  //           style={{ backdropFilter: "blur(10px)" }}
  //         >
  //           <Card
  //             className="bg-transparent text-white "
  //             style={{
  //               paddingLeft: "100px",
  //               paddingRight: "100px",
  //               borderColor: "transparent",
  //             }}
  //           >
  //             <img
  //               src={logoNew}
  //               alt="Bloggingway Logo"
  //               className={styles.logo}
  //             />
  //             <h1 className={styles.title}>Signup</h1>
  //             <div>
  //               <FloatingLabel
  //                 controlId="floatingInput"
  //                 label="Firstname"
  //                 className="mb-2"
  //                 style={{ color: "#fff" }}
  //               >
  //                 <Form.Control
  //                   type="text"
  //                   placeholder=""
  //                   name="firstname"
  //                   onChange={handleFormChange}
  //                   required
  //                   style={{ background: "transparent", color: "#fff" }}
  //                 />
  //               </FloatingLabel>
  //             </div>
  //             <div>
  //               <FloatingLabel
  //                 controlId="floatingInput"
  //                 label="Lastname"
  //                 className="mb-2"
  //                 style={{ color: "#fff" }}
  //               >
  //                 <Form.Control
  //                   type="text"
  //                   placeholder=""
  //                   name="lastname"
  //                   onChange={handleFormChange}
  //                   required
  //                   style={{ background: "transparent", color: "#fff" }}
  //                 />
  //               </FloatingLabel>
  //             </div>
  //             <div>
  //               <FloatingLabel
  //                 controlId="floatingInput"
  //                 label="Username"
  //                 // pattern="/^[a-zA-Z0-9]+$/"
  //                 className="mb-2"
  //                 style={{ color: "#fff" }}
  //               >
  //                 <Form.Control
  //                   type="text"
  //                   placeholder=""
  //                   name="username"
  //                   onChange={handleFormChange}
  //                   required
  //                   style={{ background: "transparent", color: "#fff" }}
  //                 />
  //               </FloatingLabel>
  //             </div>
  //             <div>
  //               <Form.Control
  //                 type="date"
  //                 name="date"
  //                 onChange={handleFormChange}
  //                 required
  //                 className="mb-2"
  //                 style={{ background: "transparent", color: "#fff" }}
  //               ></Form.Control>
  //             </div>

  //             <div>
  //               <Form.Select
  //                 className="mb-2"
  //                 aria-label="Floating label select example"
  //                 name="gender"
  //                 onChange={handleFormChange}
  //                 required
  //                 style={{ background: "transparent", color: "#fff" }}
  //               >
  //                 <option selected>Please select your gender</option>
  //                 <option value="male" style={{ color: "black" }}>
  //                   Male
  //                 </option>
  //                 <option value="female" style={{ color: "black" }}>
  //                   Female
  //                 </option>
  //                 <option value="non-binary" style={{ color: "black" }}>
  //                   Non-Binary
  //                 </option>
  //                 <option value="Neutral gender" style={{ color: "black" }}>
  //                   Neutral gender
  //                 </option>
  //                 <option value="Genderfluid" style={{ color: "black" }}>
  //                   Genderfluid
  //                 </option>
  //                 <option value="Gender expansive" style={{ color: "black" }}>
  //                   Gender expansive
  //                 </option>
  //                 <option value="Cisgender" style={{ color: "black" }}>
  //                   Cisgender
  //                 </option>
  //                 <option value="Transgender" style={{ color: "black" }}>
  //                   Transgender
  //                 </option>
  //                 <option value="Two Spirit" style={{ color: "black" }}>
  //                   Two Spirit
  //                 </option>
  //                 <option value="dog" style={{ color: "black" }}>
  //                   Cat/Dog/Animals
  //                 </option>
  //                 <option value="other" style={{ color: "black" }}>
  //                   Other
  //                 </option>
  //                 <option
  //                   value="Prefer not to answer"
  //                   style={{ color: "black" }}
  //                 >
  //                   Prefer not to Answer
  //                 </option>
  //               </Form.Select>
  //             </div>
  //             <div>
  //               <Form>
  //                 <Form.Check
  //                   type="switch"
  //                   inline
  //                   id="custom-switch"
  //                   label="Remember me"
  //                   style={{ color: "#fff" }}
  //                 />
  //               </Form>
  //             </div>
  //             <div>
  //               <p style={{ color: "#fff" }}>
  //                 By creating an account <br /> you agree to our
  //                 <a href="https://safety.google/intl/en/principles/">
  //                   Terms & Privacy
  //                 </a>
  //                 .
  //               </p>
  //             </div>
  //           </Card>
  //           <Card
  //             className="bg-transparent text-white "
  //             style={{
  //               paddingLeft: "100px",
  //               paddingRight: "100px",
  //               borderColor: "transparent",
  //               paddingTop: "250px",
  //             }}
  //           >
  //             <div>
  //               <input
  //                 type="file"
  //                 accept=".jpg,.jpeg,.png"
  //                 onChange={onInputChange}
  //               />

  //               <FloatingLabel
  //                 controlId="floatingInput"
  //                 label="Email address"
  //                 className="mb-2"
  //                 style={{ color: "#fff" }}
  //               >
  //                 <Form.Control
  //                   pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
  //                   type="email"
  //                   placeholder=""
  //                   name="email"
  //                   onChange={handleFormChange}
  //                   value={values.email}
  //                   required
  //                   style={{ background: "transparent", color: "#fff" }}
  //                 />
  //               </FloatingLabel>
  //             </div>
  //             <div>
  //               <FloatingLabel
  //                 controlId="floatingInput"
  //                 label="Password"
  //                 className="mb-2"
  //                 style={{ color: "#fff" }}
  //               >
  //                 <Form.Control
  //                   type="password"
  //                   placeholder=""
  //                   name="password"
  //                   onChange={handleFormChange}
  //                   value={values.password}
  //                   required
  //                   style={{ background: "transparent", color: "#fff" }}
  //                 />
  //               </FloatingLabel>
  //             </div>
  //             <div>
  //               <FloatingLabel
  //                 controlId="floatingInput"
  //                 label="Repeat Password"
  //                 className="mb-2"
  //                 style={{ color: "#fff" }}
  //               >
  //                 <Form.Control
  //                   type="password"
  //                   placeholder=""
  //                   required
  //                   name="password2"
  //                   onChange={handleFormChange}
  //                   value={values.password2}
  //                   style={{ background: "transparent", color: "#fff" }}
  //                 />
  //               </FloatingLabel>
  //             </div>
  //             <div
  //               style={{
  //                 display: "flex",
  //                 alignItems: "center",
  //                 justifyContent: "center",
  //                 marginTop: "10px",
  //               }}
  //             >
  //               <button
  //                 onClick={HandleSubmit}
  //                 type="button"
  //                 className={styles.CoolButton}
  //                 text="SignUp"
  //                 style={{
  //                   cursor: "pointer",
  //                   border: "none",
  //                   position: "relative",
  //                   borderRadius: "4px",
  //                   fontWeight: "600",
  //                   margin: "0 20px",
  //                   width: "200px",
  //                   padding: "10px 0",
  //                   transition: "0.4s",
  //                   marginTop: "5px",
  //                   alignSelf: "center",
  //                   justifyContent: "center",
  //                   display: "flex",
  //                   textShadow:
  //                     "0 0 0.125em crimson hsl(0 0% 100%/ 0.3),0 0 0.45em crimson",
  //                   boxShadow:
  //                     "inset 0 0 0.5em 0 crimson,0 0 2em 0.5em crimson",
  //                 }}
  //               >
  //                 SignUp
  //               </button>
  //             </div>
  //             <div>
  //               <p
  //                 style={{
  //                   textAlign: "center",
  //                   color: "#fff",
  //                   marginTop: "10px",
  //                 }}
  //               >
  //                 Or Signup using
  //               </p>
  //             </div>
  //             <div style={{ display: "flex" }}>
  //               <Button
  //                 href="https://www.facebook.com/login/"
  //                 variant="primary"
  //                 style={{ margin: "6px" }}
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="35"
  //                   height="25"
  //                   fill="currentColor"
  //                   class="bi bi-facebook"
  //                   viewBox="0 0 16 16"
  //                 >
  //                   <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
  //                 </svg>
  //                 facebook
  //               </Button>
  //               <Button
  //                 href="https://accounts.google.com/signin"
  //                 variant="danger"
  //                 style={{ margin: "6px" }}
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="35"
  //                   height="25"
  //                   fill="currentColor"
  //                   className="bi bi-google"
  //                   viewBox="0 0 16 16"
  //                 >
  //                   <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
  //                 </svg>
  //                 Google
  //               </Button>
  //               <Button
  //                 href="https://github.com/login"
  //                 variant="dark"
  //                 style={{ margin: "6px" }}
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="25"
  //                   height="25"
  //                   fill="currentColor"
  //                   className="bi bi-github"
  //                   viewBox="0 0 16 16"
  //                 >
  //                   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
  //                 </svg>
  //                 Github
  //               </Button>
  //             </div>
  //             <Link
  //               to="/login"
  //               style={{ marginLeft: "20px", textDecoration: "none" }}
  //             >
  //               <h5 style={{ color: "#fff" }}>Already have an account</h5>
  //             </Link>
  //           </Card>
  //         </CardGroup>
  //       </CardGroup>
  //     </form>
  //   </div>
  // );
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
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <form className="flex flex-col" onSubmit={props.handleSubmit}>
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
                        value={props.values.name}
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
                        value={props.values.name}
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
                        value={props.values.name}
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
                        value={props.values.name}
                        className="text-white"
                        name="date"
                        type="date"
                        autoComplete="off"
                        variant="standard"
                        color="white"
                        label="Birthday"
                      />
                      <Form.Select
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        name="gender"
                        variant="standard"
                        label="gender"
                        color="red"
                        className="text-white mt-1"
                      >
                        <option color="black">Male</option>
                        <option>Female</option>
                        <option>Prefer not to say</option>
                      </Form.Select>
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
                        className="text-white"
                        accept=".jpg,.jpeg,.png"
                        onChange={onInputChange}
                      />
                      <Input
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
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
                        value={props.values.name}
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
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
