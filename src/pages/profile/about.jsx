import { Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { customToast } from "../../utils/toasts";
import { useSelector } from "react-redux";

function About() {
  const userId = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.token);
  const [about, setAbout] = useState("");

  const getUser = async () => {
    try {
      const user = await axios.get(`http://localhost:3001/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAbout(user.data.about);
    } catch (error) {
      customToast("error", error.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Typography>{about}</Typography>
    </div>
  );
}

export default About;
