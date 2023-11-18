import React, { useState } from "react";
import ProfilePic from "../../components/profilePic/profilePic";
import "../../index.css";
import Wrapper from "../../layouts/wrapper";
import {
  Card,
  Typography,
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

export default function Profile() {
  const [activeTab, setActiveTab] = React.useState("post");
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.token);
  const { userId } = useParams();

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

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
      <div className="w-full flex flex-col">
        <Card
          className="w-full bg-transparent shadow-none flex flex-row"
          style={{ height: "10rem" }}
        >
          {/* <input type="file" hidden accept="image/*" /> */}

          <ProfilePic
            size="150px"
            image={user.pictureName}
            onClick={() => {
              console.log("nice");
            }}
          />
          <div>
            <Typography variant="h3" className="mt-8 ml-8">
              {user.username}
            </Typography>
            <Typography className="ml-10">@{user.username}</Typography>
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
                {value === "post" ? (
                  <PostCard isProfile userId={userId} />
                ) : (
                  desc
                )}
                {value === "edit" ? <Edit /> : desc}
                {value === "about" ? <About userId={userId} /> : desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </Wrapper>
  );
}
