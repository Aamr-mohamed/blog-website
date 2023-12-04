import { Typography, useTheme } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { customToast } from "../../utils/toasts";
import { useSelector } from "react-redux";
import { getUser } from "../../utils/quickfoo";

function About({ userId }) {
  const token = useSelector((state) => state.token);
  const [about, setAbout] = useState("");
  const { palette } = useTheme();
  const dark = palette.neutral.dark;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(token, userId);
        setAbout(userData.about);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token, userId]);
  return (
    <div>
      <Typography variant="h5" color={dark}>
        {about}
      </Typography>
    </div>
  );
}

export default About;
