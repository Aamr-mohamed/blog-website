import React, { useState } from "react";
import ProfilePic from "../../components/profilePic/profilePic";
import "../../index.css";
import Wrapper from "../../layouts/wrapper";
import {
  Card,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import PostCard from "../../components/posts/postCard";
import Edit from "./edit";
import About from "./about";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme, Typography } from "@mui/material";
import FlexBetween from "../../components/Buttons/flexBetween";
import { getUser } from "../../utils/quickfoo";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export default function Profile() {
  const [activeTab, setActiveTab] = React.useState("post");
  const [user, setUser] = useState(null);
  const id = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.token);
  const { userId } = useParams();
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = axios.get(`${backendUrl}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response;
    setUser(data.data);
    // setUser();
  };

  useEffect(() => {
    getUser();
  }, []);

  const data = [
    {
      label: "Post",
      value: "post",
      desc: ``,
    },
    {
      label: "About",
      value: "about",
      desc: ``,
    },
    {
      label: "Edit",
      value: "edit",
      desc: ``,
    },
  ];

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;
  return (
    <Wrapper>
      <div className="w-3/5 mt-10">
        <FlexBetween pl={2}>
          <FlexBetween gap="1rem">
            <ProfilePic image={user.pictureName} size="100px" />
            <Typography variant="h4">{user.username}</Typography>
          </FlexBetween>
        </FlexBetween>
        <Tabs value={activeTab}>
          <TabsHeader
            color={dark}
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                color={dark}
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
              >
                <span style={{ color: dark }}>{label}</span>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {value === "post" ? (
                  <PostCard isProfile userId={userId} />
                ) : (
                  desc
                )}
                {value === "edit" && userId === id ? <Edit /> : null}
                {value === "about" ? <About userId={userId} /> : desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </Wrapper>
  );
}
