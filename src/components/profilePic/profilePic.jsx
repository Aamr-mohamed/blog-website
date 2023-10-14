import React from "react";
import { getProfilePic } from "../../utils/common";

function ProfilePic({ style, ...rootDOMAttributes }) {
  const profilePic = getProfilePic();
  return (
    <div>
      <img
        {...rootDOMAttributes}
        src={profilePic}
        alt="Profile"
        className="rounded-circle"
        style={style}
      />
    </div>
  );
}

export default ProfilePic;
