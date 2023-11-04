import React, { useState, useEffect } from "react";
import axios from "axios";

import { customToast } from "../../utils/toasts";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const GetJokes = (props) => {
  const [jokeText, setJokeText] = useState(""); // State to store the joke text

  const addNewJoke = async () => {
    try {
      const config = { headers: { Accept: "application/json" } };
      const res = await axios.get("http://icanhazdadjoke.com/", config);
      setJokeText(res.data.joke);
    } catch (err) {
      customToast("error", "jokes " + err.message);
    }
  };

  useEffect(() => {
    addNewJoke();
  }, []);
  return (
    <Card className="mt-6 w-96 bg-transparent " {...props}>
      <CardBody>
        <Typography>{jokeText}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={addNewJoke}
          style={{ backgroundColor: "#14DCB4", border: "none" }}
        >
          Get Joke
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GetJokes;
