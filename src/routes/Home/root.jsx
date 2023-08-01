import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// or less ideally
import { Alert } from 'reactstrap';

export default function Root() {
  const userName=localStorage.getItem("currentUser")
  return (
    <div>
        <Header/>
        
        <Alert>Welcome {userName}</Alert>;
        {/* <Button color="danger">Danger!</Button> */}
        
      

    </div>
);}