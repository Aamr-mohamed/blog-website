import React from "react";

function ProfilePic({ style, ...rootDOMAttributes }) {
  return (
    <div>
      <img
        {...rootDOMAttributes}
        src=""
        alt="Profile"
        className="rounded-circle"
        style={style}
      />
    </div>
  );
}

export default ProfilePic;
