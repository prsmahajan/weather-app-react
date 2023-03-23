import React from 'react'
import WeatherIcon from './WeatherIcon'
import './WeatherDaily.css'
import axios from 'axios';

export default function WeatherForecast(props) {
    function handleResponse(response){
        console.log(response.data)
    }
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return ( 
    <div className='weather-forecast'>
        <div className="row" >
            <div className="col" >
                <div className='weather-forecast-day'>Thu</div>
                <WeatherIcon code='01d' size={42} />
                <div className='weather-forecast-temp'>
                    <span className='weather-forecast-max'>19°</span>
                    <span className='weather-forecast-min'>12°</span>
                </div>
            </div> 
        </div>
    </div>
    )
}