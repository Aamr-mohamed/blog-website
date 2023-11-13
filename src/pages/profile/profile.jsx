import React, { useState, useRef } from "react";
import "./profile.module.css";
import ProfilePic from "../../components/profilePic/profilePic";
import "../../index.css";
import Wrapper from "../../layouts/wrapper";
import {
  Card,
  Breadcrumbs,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import PostCard from "../../components/posts/postCard";
import Edit from "./edit";
import About from "./about";

export default function Profile() {
  const [activeTab, setActiveTab] = React.useState("post");

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

  // image picker form userPC to database "Coming soon"

  const username = localStorage.getItem("username");
  const image = localStorage.getItem("pictureName");

  const [values, setValues] = useState({ password: "" });
  const handleFormChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log("working");
  };
  return (
    <Wrapper>
      <div className="w-full flex flex-col">
        {/* <Typography variant="h3">Profile</Typography>
          <Breadcrumbs>
            <a href="/">
              <Typography>Home</Typography>
            </a>
            <a href="/profile">
              {" "}
              <Typography>Profile</Typography>
            </a>
          </Breadcrumbs> */}

        <Card
          className="w-full bg-transparent shadow-none flex flex-row"
          style={{ height: "10rem" }}
        >
          {/* <input type="file" hidden accept="image/*" /> */}

          <ProfilePic
            style={{
              marginTop: "20px",
              width: "150px",
              height: "150px",
            }}
            image={image}
            onClick={() => {
              console.log("nice");
            }}
          />
          <div>
            <Typography variant="h3" className="mt-8 ml-8">
              {username}
            </Typography>
            <Typography className="ml-10">@{username}</Typography>
          </div>
        </Card>
      </div>
      <div className="w-3/5 mt-10">
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {value === "post" ? <PostCard isProfile /> : desc}
                {value === "edit" ? <Edit /> : desc}
                {value === "about" ? <About /> : desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </Wrapper>
  );
}
