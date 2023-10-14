import React, { useState } from "react";
import axios from "axios";
import { Card, Button, FloatingLabel, Form } from "react-bootstrap";
import { ToastContainer, toast, Slide } from "react-toastify";
import { customToast } from "../../utils/toasts";

const Weather = (props) => {
  function convertion(val) {
    return (val - 273).toFixed(2);
  }
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState({ name: "" });
  const [user, setUser] = useState(null);

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
      customToast("error", error.message);
    }
  };

  const handleCityChange = (e) => {
    setCity({
      ...city,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetWeather = async () => {
    const res = await axios.post("http://localhost:5000/message", {
      username: "from front",
      email: "from front",
      password: "from front",
      timestamp: Date.now(),
    });
    if (res.status === 200) {
      setUser(res.data);
    }
    // fetchWeatherData();
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

          {user && (
            <>
              <h1>Username: {user.username}</h1>
            </>
          )}
          <Button
            onClick={handleGetWeather}
            style={{ backgroundColor: "#14DCB4", border: "none" }}
          >
            Get Weather
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Weather;
