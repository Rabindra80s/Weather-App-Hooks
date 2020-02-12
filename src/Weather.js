import React from "react";

const Weather = ({ city, country, temperature, description, error }) => {

  /* var imagePhoto = {

    thunder: "https://s-media-cache-ak0.pinimg.com/originals/2e/43/73/2e4373184057ab029b5ca15aca484b09.jpg",
    rainy: "https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg",
    cloudy: "https://static1.squarespace.com/static/57523357c2ea515ccf6c1adb/58dcea75bebafb06e997da9c/58dcece61e5b6cf38585d46b/1490873606398/mostly+cloudy.jpg",
    snow: "https://static.bhphotovideo.com/explora/sites/default/files/Correct.jpg",
    clear: "https://mota.ru/upload/wallpapers/2010/05/14/08/01/22099/mota_ru_0051405-2560x1600.jpg",
    drizzle: "https://s-media-cache-ak0.pinimg.com/736x/e4/43/f5/e443f59b4f03dd487d090a279c2f08ab--rain-drops-water-drops.jpg",
    haze: "https://ak3.picdn.net/shutterstock/videos/3578564/thumb/1.jpg",
    tornado: "https://i.ytimg.com/vi/5QnsRXUbsK4/maxresdefault.jpg",
    cold: "https://static.pexels.com/photos/374/snow-dawn-sunset-winter.jpg",
    windy: "https://ak9.picdn.net/shutterstock/videos/4337360/thumb/1.jpg",
    hail: "https://s-media-cache-ak0.pinimg.com/236x/7c/60/3d/7c603d9183ff32c92330780a2ebdcfca--rainy-weather-rainy-days.jpg",
    sunny: "https://i.ytimg.com/vi/rG9fev-m0ag/maxresdefault.jpg"
  }; */


  function matchValues() {
    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["cloudy", "clouds", "cloud", "overcast"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["thunder", "thunders", "lightning"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://s-media-cache-ak0.pinimg.com/originals/2e/43/73/2e4373184057ab029b5ca15aca484b09.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["rainy", "rain"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["snow", "snowy"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://static.bhphotovideo.com/explora/sites/default/files/Correct.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["clear", "open"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://mota.ru/upload/wallpapers/2010/05/14/08/01/22099/mota_ru_0051405-2560x1600.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["drizzle"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://s-media-cache-ak0.pinimg.com/736x/e4/43/f5/e443f59b4f03dd487d090a279c2f08ab--rain-drops-water-drops.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["haze"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://ak3.picdn.net/shutterstock/videos/3578564/thumb/1.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["tornado"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://i.ytimg.com/vi/5QnsRXUbsK4/maxresdefault.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["cold"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://static.pexels.com/photos/374/snow-dawn-sunset-winter.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["windy"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://static.pexels.com/photos/374/snow-dawn-sunset-winter.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["hail"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://s-media-cache-ak0.pinimg.com/236x/7c/60/3d/7c603d9183ff32c92330780a2ebdcfca--rainy-weather-rainy-days.jpg" alt="weather" />
        }
      }
    }

    if (description) {
      const weatherDescription = description.split(" ");
      const keyWords = ["sunny"];

      for (let i = 0; i < weatherDescription.length; i++) {
        if (keyWords.includes(weatherDescription[i])) {
          return <img src="https://i.ytimg.com/vi/rG9fev-m0ag/maxresdefault.jpg" alt="weather" />
        }
      }
    }
  }

  return (
    <div>
      {city && country && (
        <p>
          {city}, {country}
        </p>
      )}
      {temperature && <p>{temperature} °C</p>}
      {description && <p>{description}</p>}
      {error && <p>{error}</p>}
      {description && matchValues()}
    </div>
  );

}

export default Weather;
