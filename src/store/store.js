export default function handleCredentials(username, id, pictureName, token) {
  localStorage.setItem("username", username);
  localStorage.setItem("userId", id);
  localStorage.setItem("pictureName", pictureName);
  localStorage.setItem("token", token);
  console.log("success");
}
