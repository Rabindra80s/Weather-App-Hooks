import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';

function App() {

  const [weather, setWeather] = useState([]);
  const APIKEY = '7c7a282bf8828c30f596aa7f3d85ccc6';

  async function fetchData(e) {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const apiData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      //Prepend https://cors-anywhere.herokuapp.com/ to your API’s URL if CORS proxy request error exist in this way - https://cors-anywhere.herokuapp.com/http://api.openweathermap.org...
      .then(res => res.json())
      .then(data => data);
    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp - 273.15),// Converting temperature from Kelvin to Celsius
        error: ''
      });
    } else {
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        error: 'Please enter city and country'
      });
    }
  }


  return (
    <div className="App">
      <h3>Weather App</h3>
      <Form getWeather={fetchData} />
      <Weather
        city={weather.city}
        country={weather.country}
        temperature={weather.temperature}
        description={weather.description}
        error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
