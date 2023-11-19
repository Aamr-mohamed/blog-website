import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import ProfilePic from "../profilePic/profilePic";
import FlexBetween from "../Buttons/flexBetween";
import { EditOutlined, ManageAccountsOutlined } from "@mui/icons-material";
import linkedIn from "../../assets/logo/linkedin.png";
import twiter from "../../assets/logo/twitter.png";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function Profiler() {
  const token = useSelector((state) => state.token);
  const { _id, pictureName } = useSelector((state) => state.user);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = axios.get(`${backendUrl}/users/${_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response;
    setUser(data.data);
    // setUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }
  return (
    <>
      <FlexBetween>
        <FlexBetween
          onClick={() => {
            navigate(`/profile/${_id}`);
          }}
        >
          <ProfilePic image={pictureName} />
          <Box className="pl-3">
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {user.username}
            </Typography>
            <Typography color={medium}>
              {user.friends.length} friends
            </Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      <FlexBetween mb="0.5rem" mt="1.5rem">
        <Typography color={medium}>Who's viewed your profile</Typography>
        <Typography color={main} fontWeight="500">
          {user.viewedProfile}
        </Typography>
      </FlexBetween>
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src={twiter} alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src={linkedIn} alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </>
  );
}

export default Profiler;
