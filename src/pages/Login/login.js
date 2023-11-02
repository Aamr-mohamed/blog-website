import React, { useRef } from "react";
import "./login.module.css";
import styles from "./login.module.css";
import bcrypt from "bcryptjs-react";
import { Link, useNavigate } from "react-router-dom";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import background from "../../assets/images/background.jpg";
import logoNew from "../../assets/logo/logo-no-background.png";
import { ToastContainer, toast, Slide } from "react-toastify";
import { customToast } from "../../utils/toasts";
import axios from "axios";
import * as yup from "yup";

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
    } else {
      // axios.
      toast.success("Logged In successfully", {
        position: "top-right",
        autoClose: 800,
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

  return <></>;
}
