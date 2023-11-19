import { Box } from "@mui/material";
import React from "react";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ProfilePic({ image, size = "60px" }) {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${backendUrl}/assets/${image}`}
      />
    </Box>
  );
}

export default ProfilePic;
