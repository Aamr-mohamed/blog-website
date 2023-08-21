import Header from "../components/Header";
import React from "react";
import { Alert } from 'reactstrap';



// import "bootstrap/dist/css/bootstrap.min.css";


export default function Root() {
  const userName=localStorage.getItem("currentUser")
  const isLoggedIn=localStorage.getItem("currentEmail")
  
    return (
      <div>
        <Header/>
      </div>  
    );
  
}