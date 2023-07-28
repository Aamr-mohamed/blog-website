
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// or less ideally
import { Button } from 'react-bootstrap';   

export default function Root() {
  return (
    <div>
        <li>
            <a href={`/login`}>Login</a>
        </li>
        <li>
            <a href={`/signup`}>Signup</a>
        </li>
        <Button color="danger">Danger!</Button>;
    </div>
);}