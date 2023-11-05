import React from "react";
import { Card, Typography, Avatar } from "@material-tailwind/react";

function Post() {
  return (
    <Card className="mb-2" style={{ backgroundColor: "#fcfbf7" }}>
      <div className="flex pt-2.5 pb-2.5 pl-2.5">
        <Avatar
          variant="circular"
          size="sm"
          alt="tania andrew"
          className="border border-gray-900 p-0.5"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
        <Typography className="pt-2 pl-3" variant="h5">
          userName
        </Typography>
      </div>
      <Typography className="pl-10">title</Typography>
      <Typography className="pl-6 pt-3">postContent</Typography>
      <Typography className="text-muted ml-auto pr-2.5 pb-2.5">
        createdAt
      </Typography>
    </Card>
  );
}

export default Post;
