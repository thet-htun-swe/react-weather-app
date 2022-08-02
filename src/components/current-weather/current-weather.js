import "./current-weather.css"

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description" >{data.weather[0].description}</p>
        </div>
        <img src={`icons/${data.weather[0].icon}.png`} className="weather-icon" alt="weather" />
      </div>
      <div className="bottom">
        <p className="temperature" >{data.main.temp.toFixed(0)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{data.main.feels_like.toFixed(0)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;