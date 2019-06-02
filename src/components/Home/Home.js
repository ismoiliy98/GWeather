import React, { useState, useEffect } from "react";
import getUserLocation from "../../services/GeolocationService";
import { Link } from "react-router-dom";
import "./Home.scss";
import { WeatherService } from "../../services/WeatherService";

const weatherService = new WeatherService();

const Home = () => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weekDaysFull = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const [location, setLocation] = useState([]);

  const [weather, setWeather] = useState([]);

  const [data, setData] = useState({ loaded: false });

  useEffect(() => {
    getUserLocation().then(res => {
      setLocation(res);
      console.log("Location resolved");
      weatherService.getFiveDaysWeather(res.id, false).then(data => {
        setWeather(data);
        setData({ loaded: true });
      });
    });
  }, []);

  return (
    <div className="Home">
      <p className="Title">5 days weather forecast in {location.city}</p>
      {data.loaded ? (
        <div className="CardList">
          {weather.map((value, index) => {
            return (
              <Link
                to={"/" + weekDaysFull[value.day]}
                key={index}
                className={index == 0 ? "Card Current" : "Card"}
              >
                <h1 className="DayName">{weekDays[value.day]}</h1>
                <img
                  className="WeatherIcon"
                  src={require("../../assets/weather_icons/" +
                    value.icon +
                    ".svg")}
                  alt="Weather Icon"
                />
                <div className="Info">
                  <span className="Max">
                    Max: <strong>{value.temp_max}&deg;</strong>
                  </span>
                  <span className="Min">
                    Min: <strong>{value.temp_min}&deg;</strong>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="Loading">
          <img src={require("../../assets/loading.svg")} alt="Loading..." />
        </div>
      )}
    </div>
  );
};

export default Home;
