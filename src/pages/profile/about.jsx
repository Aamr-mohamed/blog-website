import { Typography, useTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { customToast } from "../../utils/toasts";
import { useSelector } from "react-redux";

function About({ userId }) {
  const token = useSelector((state) => state.token);
  const [about, setAbout] = useState("");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  const getUser = async () => {
    try {
      const user = await axios.get(`http://localhost:3001/users/${userId}`, {
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
      <Typography variant="h5" color={dark}>
        {about}
      </Typography>
    </div>
  );
}

export default About;
