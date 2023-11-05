import React from "react";
import { Card, Typography, Avatar } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { setPosts } from "../../state/index";

function Post() {
  const dispatch = useDispatch();
  const { _id, pictureName, token, firstname, lastname } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${_id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    getPosts();
  }, []);

  const fullName = `${firstname} ${lastname}`;
  return (
    <Card className="mb-2" style={{ backgroundColor: "#fcfbf7" }}>
      <div className="flex pt-2.5 pb-2.5 pl-2.5">
        <Avatar
          variant="circular"
          size="sm"
          alt="tania andrew"
          className="border border-gray-900 p-0.5"
          src={`http://localhost:3001/assets/${pictureName}`}
        />
        <Typography className="pt-2 pl-3" variant="h5">
          {fullName}
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
