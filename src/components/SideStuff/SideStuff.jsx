import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

function SideStuff() {
  const renderApi = async () => {
    try {
      const res = await axios.get("https://swapi.dev/api/people/1");
      console.log(res.data);
    } catch (e) {
      console.log("ERROR:", e);
    }
  };
  return (
    <div>
      <Button onClick={renderApi}>name</Button>
    </div>
  );
}

export default SideStuff;
