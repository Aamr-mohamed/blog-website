import male from "../assets/profilePics/male.jpg";
import female from "../assets/profilePics/woman.jpg";
import nonBinary from "../assets/profilePics/non-binary.jpg";
import dog from "../assets/profilePics/dog.jpg";
import trans from "../assets/profilePics/trans.jpg";
import genderfluid from "../assets/profilePics/gender fluid.jpg";
import weird from "../assets/profilePics/weirdGender.jpg";

export const getProfilePic = () => {
  const userGender = localStorage.getItem("usergender");
  switch (userGender) {
    case "male":
      return male;

    case "female":
      return female;

    case "non-binary":
      return nonBinary;

    case "dog":
      return dog;

    case "Transgender":
      return trans;

    case "Genderfluid":
      return genderfluid;

    default:
      return weird;
  }
};
