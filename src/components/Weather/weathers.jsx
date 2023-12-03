import React, { useState } from "react";
import axios from "axios";
import { Card, Button, Input, CardBody } from "@material-tailwind/react";
import { customToast } from "../../utils/toasts";
import { Typography, useTheme } from "@mui/material";

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

  return (
    <Card {...props} style={{ backgroundColor: theme.palette.background.alt }}>
      <CardBody>
        <Input
          name="name"
          onChange={handleCityChange}
          className="mb-2"
          variant="outlined"
          label="enter a city"
        />
        {weatherData.name && (
          <div>
            <Typography variant="h5" color={theme.palette.neutral.dark}>
              City: {weatherData.name}
            </Typography>
            <Typography variant="h5" color={theme.palette.neutral.dark}>
              Temperature: {weatherData.temperature} °C
            </Typography>
            <Typography variant="h5" color={theme.palette.neutral.dark}>
              Description: {weatherData.description}
            </Typography>
            <Typography variant="h5" color={theme.palette.neutral.dark}>
              Wind Speed: {weatherData.windspeed} m/s
            </Typography>
          </div>
        )}

        {user && (
          <>
            <h1>Username: {user.username}</h1>
          </>
        )}
        <Button
          onClick={fetchWeatherData}
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
