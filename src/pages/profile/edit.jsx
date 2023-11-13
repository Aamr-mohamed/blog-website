import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import { customToast } from "../../utils/toasts";

function Edit() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const initialValuesEdit = {
    username: "",
    about: "",
    password: "",
    gender: "",
    date: "",
  };

  const submitForm = async (values) => {
    try {
      // formData.append("picturePath", picturePath);
      // console.log(picturePath);

      const res = await axios.patch(
        `http://localhost:3001/users/${userId}/edit`,
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(res);

      toast.success("User updated successfully", {
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
    <>
      <Formik
        initialValues={initialValuesEdit}
        onSubmit={(values) => {
          console.log(values);
          const nonEmptyValues = Object.entries(values).reduce(
            (acc, [key, value]) => {
              if (value !== "" && value !== null && value !== undefined) {
                acc[key] = value;
              }
              return acc;
            },
            {}
          );

          // Now nonEmptyValues only contains fields with non-empty values
          console.log(nonEmptyValues);
          submitForm(nonEmptyValues);
        }}
      >
        {(props) => (
          <Form>
            <div className="flex flex-col gap-6">
              <Input
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.username}
                name="username"
                size="lg"
                autoComplete="off"
                variant="static"
                placeholder="Kevin malone - Noobslayer ,etc.."
                label="Username"
              />

              <Input
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                name="password"
                size="lg"
                autoComplete="off"
                placeholder="Must have at least 4 characters"
                variant="static"
                label="Password"
                type="password"
              />

              <Select
                onChange={(e) => {
                  props.handleChange("gender")(e);
                }}
                onBlur={props.handleBlur}
                value={props.values.gender}
                name="gender"
                variant="static"
                label="Gender"
                placeholder="Enter ur gender"
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Prefer not to say">Prefer not to say</Option>
              </Select>

              <Input
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.date}
                name="date"
                type="date"
                autoComplete="off"
                variant="static"
                label="Birthday"
              />

              <Textarea
                variant="static"
                placeholder="Enter stuff about yourself"
                label="About"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.about}
                name="about"
                autoComplete="off"
                size="lg"
                rows={6}
              />

              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Edit;
