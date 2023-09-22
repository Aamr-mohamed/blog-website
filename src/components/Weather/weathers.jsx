import React, { useState } from "react";
import axios from "axios";
import { Card, Button, FloatingLabel, Form } from "react-bootstrap";
import { ToastContainer, toast, Slide } from "react-toastify";

const Weather = (props) => {
  function convertion(val) {
    return (val - 273).toFixed(2);
  }
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState({ name: "" });

  const fetchWeatherData = async () => {
    const key = "7351e4b29d609b131709af3ef624cd77";
    const config = { headers: { Accept: "application/json" } };

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${key}`,
        config
      );
      const temp = res.data.main.temp;
      setWeatherData({
        name: res.data.name,
        temperature: convertion(temp),
        description: res.data.weather[0].description,
        windspeed: res.data.wind.speed,
      });
    } catch (error) {
      console.log("error", error);
      toast.error("please enter a valid city", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleCityChange = (e) => {
    setCity({
      ...city,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetWeather = () => {
    fetchWeatherData();
  };

  return (
    <div>
      <ToastContainer transition={Slide} />
      <Card {...props} style={{ width: "18rem" }}>
        <Card.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Enter City Name"
            className="mb-2"
          >
            <Form.Control type="text" name="name" onChange={handleCityChange} />
          </FloatingLabel>
          {weatherData.name && (
            <div>
              <p>City: {weatherData.name}</p>
              <p>Temperature: {weatherData.temperature} °C</p>
              <p>Description: {weatherData.description}</p>
              <p>Wind Speed: {weatherData.windspeed} m/s</p>
            </div>
          )}
          <Button onClick={handleGetWeather}>Get Weather</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Weather;
