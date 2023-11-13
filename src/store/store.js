export default function handleCredentials(
  username,
  id,
  pictureName,
  token,
  friends
) {
  localStorage.setItem("username", username);
  localStorage.setItem("userId", id);
  localStorage.setItem("pictureName", pictureName);
  localStorage.setItem("token", token);
  localStorage.setItem("friends", JSON.stringify(friends));
  console.log("success");
}
