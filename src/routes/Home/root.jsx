import Header from "../components/Header";
import React from "react";
import { Alert } from 'reactstrap';
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Root() {
  const userName=localStorage.getItem("currentUser")
  return (
    <div>
        <Header/>
        <Alert>Welcome {userName}</Alert>;
        {/* <Button color="danger">Danger!</Button> */}
    </div>
);}