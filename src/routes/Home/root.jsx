<<<<<<< Updated upstream
export default function Root() {
  return (
    <div>
        <li>
            <a href={`/login`}>Login</a>
        </li>
        <li>
            <a href={`/signup`}>Signup</a>
        </li>
=======
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// or less ideally
import { Button,Alert } from 'react-bootstrap';   

export default function Root() {
  return (
    <div>
        <Header/>
        
        <Alert>Welcome "User"</Alert>;
        {/* <Button color="danger">Danger!</Button> */}
>>>>>>> Stashed changes
    </div>
);}