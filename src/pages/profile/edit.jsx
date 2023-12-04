import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { Form, Formik } from "formik";
import React from "react";
import { customToast } from "../../utils/toasts";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/store";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Edit() {
  const userId = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const initialValuesEdit = {
    username: "",
    about: "",
    password: "",
    gender: "",
    date: "",
  };

  const submitForm = async (values) => {
    try {
      const response = await axios.patch(
        `${backendUrl}/users/${userId}/edit`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        setLogin({
          user: response.data.result,
          token: token,
        })
      );
      console.log(response.data.result);
      customToast("success", "User updated successfully");
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
                color="red"
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
                color="red"
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
                color="red"
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
                color="red"
              />

              <Input
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.key}
                name="key"
                size="lg"
                autoComplete="off"
                placeholder="Enter the secret key"
                variant="static"
                label="Apply for admin"
                type="password"
                color="red"
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
                color="red"
              />

              <Button
                type="submit"
                style={{ backgroundColor: "rgb(220 38 38)" }}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Edit;
