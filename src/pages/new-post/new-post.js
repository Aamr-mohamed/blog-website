import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../layouts/wrapper";
import { customToast } from "../../utils/toasts";
import * as yup from "yup";
import { Form, Formik } from "formik";
import {
  Avatar,
  Card,
  Textarea,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProfilePic from "../../components/profilePic/profilePic";

const initialPostValues = {
  Title: "",
  postContent: "",
};
const postSchema = yup.object().shape({
  Title: yup.string().required("required"),
  postContent: yup.string().required("required"),
});

export default function NewPost() {
  const [picturePath, setpicturePath] = useState(null);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const pictureName = localStorage.getItem("pictureName");
  const username = localStorage.getItem("username");

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
      if (pictureName) {
        formData.append("userPicturePath", pictureName);
      }
      formData.append("username", username);
      formData.append("userId", userId);
      formData.append("picturePath", picturePath);
      console.log("formData:", formData);

      await axios
        .post(`http://localhost:3001/posts/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          console.log(response);
        });

      toast.success("Posted successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      customToast("error", error.message);
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialPostValues}
        validationSchema={postSchema}
        onSubmit={(values) => {
          console.log(values);
          submitForm(values);
        }}
      >
        {(props) => (
          <Form>
            <Card className="w-3/5 bg-transparent shadow-none lg:mt-10 lg:ml-20 gap-3">
              <div className="flex flex-row">
                <ProfilePic
                  variant="circular"
                  size="lg"
                  alt="userPicture"
                  className="border border-gray-900 p-0.5"
                  image={pictureName}
                />
                <Typography className="mt-4 ml-2">{username}</Typography>
              </div>
              <Input
                variant="outlined"
                name="Title"
                label="Title"
                className=""
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.firstname}
              />
              <Input
                type="file"
                name="pictureName"
                className="text-white"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => {
                  const pictPath = e.target.value.split("\\")[2];
                  console.log(pictPath);
                  props.setFieldValue("PictureName", pictPath);
                  onInputChange(e);
                }}
              />
              {props.errors.postPictureName && (
                <div id="feedback" className="text-light-green-600">
                  {props.errors.postPictureName}
                </div>
              )}
              <Textarea
                className=""
                rows={8}
                variant="outlined"
                label="what's on your mind"
                name="postContent"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.postContent}
              />
              <Button ripple={true} type="submit" className="w-1/4 ml-auto">
                Post
              </Button>
            </Card>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}
