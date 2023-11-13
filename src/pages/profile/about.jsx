import { Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function About() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [about, setAbout] = useState("");

  const getUser = async () => {
    const user = await axios.get(`http://localhost:3001/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setAbout(user.data.about);
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
