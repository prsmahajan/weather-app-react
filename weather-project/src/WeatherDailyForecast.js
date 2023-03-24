import React, {useState, useEffect} from 'react'
import './WeatherDaily.css'
import axios from 'axios';
import WeatherDailyForecast from './WeatherForecastConvert'

export default function WeatherForecast(props) {
    const [loaded, setLoaded]= useState(false)
    const [forecast, setForecast]= useState(null)
    function handleResponse(response){
        setForecast(response.data.daily)
        setLoaded(true)
    }

    useEffect(function(){
        setLoaded(false);
    }, [props.coordinates]);

    if(loaded){
        console.log(props.coordinates)
        console.log(forecast)
        return ( 
        <div className='weather-forecast'>
            <div className="row">
                {forecast.map((forecastDaily, index)=>{
                    if(index < 7){
                        return (
                        <div className="col" key={index}>
                             <WeatherDailyForecast data={forecastDaily} />
                         </div> 
                         );
                      }
                })}
            </div>
        </div>
        )
    }
    else
    {
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return null
    }
}