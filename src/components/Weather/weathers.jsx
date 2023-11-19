import React, { useState } from "react";
import axios from "axios";
import { Card, Button, Input, CardBody } from "@material-tailwind/react";
import { customToast } from "../../utils/toasts";
import { useTheme } from "@mui/material";

const Weather = (props) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

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
      customToast("error", "weather" + error.message);
    }
  };

  const handleCityChange = (e) => {
    setCity({
      ...city,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetWeather = async () => {
    try {
      const res = await axios.post("http://localhost:5000/message", {
        username: "from front",
        email: "from front",
        password: "from front",
        timestamp: Date.now(),
      });
      if (res.status === 200) {
        setUser(res.data);
      }
      fetchWeatherData();
    } catch (error) {
      customToast("error", "Weather " + error.message);
    }
  };

  return (
    <Card {...props} style={{ backgroundColor: theme.palette.background.alt }}>
      <CardBody>
        <Input
          onChange={handleCityChange}
          className="mb-2"
          variant="outlined"
          label="enter a city"
        ></Input>
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
          style={{
            backgroundColor: "rgb(220 38 38)",
            border: "none",
            marginTop: "20px",
          }}
        >
          Get Weather
        </Button>
      </CardBody>
    </Card>
  );
};

export default Weather;
