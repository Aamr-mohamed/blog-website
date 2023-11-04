import React from "react";
import ProfilePic, { getProfilePic } from "../profilePic/profilePic";
import Like from "../likeButton/like";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Post({ postContent, title, createdAt }) {
  const userName = localStorage.getItem("currentUser");

  return (
    <Card className="mb-2" style={{ backgroundColor: "#fcfbf7" }}>
      <div className="flex pt-2.5 pb-2.5 pl-2.5">
        <ProfilePic className="w-11 h-11 " />
        <Typography className="pt-2 pl-3" variant="h5">
          {userName}
        </Typography>
      </div>
      <Typography className="pl-10">{title}</Typography>
      <Typography className="pl-6 pt-3">{postContent}</Typography>
      <Typography className="text-muted ml-auto pr-2.5 pb-2.5">
        {createdAt}
      </Typography>
      {/* <div className="likeComment" style={{}}>
          <Like />
        </div> */}
    </Card>
  );
}

export default Post;
