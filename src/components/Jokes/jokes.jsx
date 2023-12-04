import React, { useState, useEffect } from "react";
import axios from "axios";

import { customToast } from "../../utils/toasts";
import { Card, CardBody, CardFooter, Button } from "@material-tailwind/react";
import { useTheme, Typography } from "@mui/material";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const GetJokes = (props) => {
  const [jokeText, setJokeText] = useState(""); // State to store the joke text
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const addNewJoke = async () => {
    try {
      const res = await axios.get(`${backendUrl}/getJoke`, {
        headers: { Accept: "application/json" },
      });
      setJokeText(res.data.joke);
    } catch (err) {
      customToast("error", "jokes " + err.message);
    }
  };

  useEffect(() => {
    addNewJoke();
  }, []);
  return (
    <Card
      className="mt-6 w-96 bg-transparent "
      {...props}
      style={{ backgroundColor: theme.palette.background.alt }}
    >
      <CardBody>
        <Typography variant="h5" color={theme.palette.neutral.dark}>
          {jokeText}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          onClick={addNewJoke}
          style={{ backgroundColor: "rgb(220 38 38)", border: "none" }}
        >
          Get Joke
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GetJokes;
