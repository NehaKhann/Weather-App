import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [city, setcity] = useState();

  const [search, setsearch] = useState("Karachi");
  const Event = (event) => {
    setsearch(event.target.value);
  };
  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=235c5e8070d3eb15579f34d4e9e49a2c`;
      const response = await fetch(url);
      const data = await response.json();
      setcity(data.main);
    };
    fetchAPI();
  }, [search]);

  return (
    <div>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Simple Weather App </h1>
          <form>
            <input
              type="search"
              placeholder="Search for a city"
              onChange={Event}
              value={search}
            />

            <span className="msg"></span>
          </form>
        </div>
      </section>
      {!city ? (
        <section className="ajax-section">
          <ul className="city">
            <p> No Data found</p>
          </ul>
        </section>
      ) : (
        <section className="ajax-section">
          <ul className="city">
            <h1>Current Temperature is</h1>
            <p className="city-temp">{city.temp} °C </p>
            <p>
              Min temp is {city.temp_min} °C | Max temp is {city.temp_max} °C
            </p>
          </ul>
        </section>
      )}

      <footer className="page-footer">
        <div className="container">
          <small>
            Made with <span>❤</span> by Neha Khan
          </small>
        </div>
      </footer>
    </div>
  );
}
export default App;
