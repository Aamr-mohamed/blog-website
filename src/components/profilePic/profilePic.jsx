import React from "react";
import male from "../../assets/profilePics/male.jpg";
import female from "../../assets/profilePics/woman.jpg";
import nonBinary from "../../assets/profilePics/non-binary.jpg";
import dog from "../../assets/profilePics/dog.jpg";
import trans from "../../assets/profilePics/trans.jpg";
import genderfluid from "../../assets/profilePics/gender fluid.jpg";
import weird from "../../assets/profilePics/weirdGender.jpg";

function ProfilePic({ style }) {
  const userGender = localStorage.getItem("usergender");
  if (userGender === "male") {
    var profilePic = male;
  } else if (userGender === "female") {
    var profilePic = female;
  } else if (userGender === "non-binary") {
    var profilePic = nonBinary;
  } else if (userGender === "dog") {
    var profilePic = dog;
  } else if (userGender === "Transgender") {
    var profilePic = trans;
  } else if (userGender === "Genderfluid") {
    var profilePic = genderfluid;
  } else {
    var profilePic = weird;
  }

  return (
    <div>
      <img
        src={profilePic}
        alt="Profile"
        className="rounded-circle"
        style={style}
      />
    </div>
  );
}

export default ProfilePic;
