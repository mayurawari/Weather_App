import React, { useEffect, useRef, useState } from "react";
import "../styles/DashB.css";
import "../styles/Nav.css";
import axios from "axios";
// import { Nav } from "./Nav";

// A search component to enter the city name.
// A weather display component for current weather and forecast.
// A favorite component to display and manage favorite cities.

// A main component to display the weather dashboard.
export const Dashboard = () => {
  const [color, setTheme] = useState({
    theme: "dark",
    buttontext: "Switch to Light Mode",
  });
  const [currdata, setCurrdata] = useState(null);
  const [cityname, setCityname] = useState("Bangalore");
  
  const toggletheme = () => {
    setTheme((prevtheme) => {
      let newtheme = prevtheme.theme === "dark" ? "light" : "dark";
      return {
        theme: newtheme,
        buttontext:
          newtheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode",
      };
    });
  };
  
  const handlecity = (e) => {
    setCityname(e.target.value);
  };

  const handlecurrent = (e) => {
    e.preventDefault();
    currentweather(cityname);
  };

  async function currentweather(city) {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4cf3bacbbc96663b0be8529f51b31905`
      );
      setCurrdata(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="themechange">
        <button id="btn-theme" onClick={toggletheme}>
          {color.buttontext}
        </button>
      </div>
      <div className="mainbox">
        <div className={`navbox-${color.theme}`}>
          <nav>
            <h1>Forecast Fusion</h1>

            <div className="searchcomp">
              <form action="">
                <label htmlFor="cityinp">Get Weather Updates By City....</label>
                <input
                  type="text"
                  id="cityinp"
                  placeholder="Typedown City Name Here ..."
                  onChange={handlecity}
                />
                <button id="btn-c" onClick={handlecurrent}>
                  Current
                </button>
                <button id="btn-f">Forecast</button>
              </form>
            </div>
          </nav>
        </div>
        <div className={`detailsbox-${color.theme}`}>
          {currdata ? (
            <div>
              <h1 style={{fontFamily:"Poppins, sans-serif"}}>{currdata.name}</h1>
              <p style={{fontWeight:"600"}}>Temperature: {Math.round(currdata.main.temp - 273.15)}°C</p>
              <p style={{fontWeight:"600"}}>
                Feels Like: {Math.round(currdata.main.feels_like - 273.15)}°C
              </p>
              <p style={{fontWeight:"600"}}>"{currdata.weather[0].main}"</p>
              <p style={{fontWeight:"600"}}>"{currdata.weather[0].description}"</p>
            </div>
          ):(
            <h2 id={`message-${color.theme}`}>Hey! there 🙋‍♂️ search for the city to get weather updates....</h2>
          )}
        </div>
      </div>
    </>
  );
};
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}//for current weather
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}//forecast
//4cf3bacbbc96663b0be8529f51b31905
