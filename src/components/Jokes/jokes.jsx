import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { ToastContainer,toast,Slide } from "react-toastify";
import { customToast } from "../../utils/toasts";

const GetJokes = (props) => {
  const [jokeText, setJokeText] = useState(""); // State to store the joke text

  const addNewJoke = async () => {
    try {
      const config = { headers: { Accept: "application/json" } };
      const res = await axios.get("http://icanhazdadjoke.com/", config);
      setJokeText(res.data.joke); 
    } catch (err) {
        customToast("error", err.message)
    }
  }

    useEffect(() => {
      
      addNewJoke();
    }, []);
    return (
      <div>        
        <Card {...props}>
          <Card.Body>
            <Card.Text>
              <p>{jokeText}</p>
            </Card.Text>
            <Button onClick={addNewJoke}>Get Joke</Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  export default GetJokes;
