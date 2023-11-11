import { Avatar } from "@material-tailwind/react";
import React from "react";

function ProfilePic({ image, style, ...rootDOMAttributes }) {
  return (
    <div>
      <Avatar
        {...rootDOMAttributes}
        src={`http://localhost:3001/assets/${image}`}
        alt="Profile"
        className="rounded-circle"
        style={style}
      />
    </div>
  );
}

export default ProfilePic;
