import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherDailyForecast(props){
    function minTempConverter(){
        const temperature=Math.round(props.data.temp.min)
        return `${temperature}`
    }

    function maxTempConverter(){
        const temperature=Math.round(props.data.temp.max)
        return `${temperature}`
    }

    function dayTo(){
        const date=new Date(props.data.dt*1000)
        const day=date.getDay()
        const weekdays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        return weekdays[day]
    }

    return(
        <div>
            <div className='weather-forecast-day'>{dayTo()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={42} />
            <div className='weather-forecast-temp'>
                <span className='weather-forecast-max'>{maxTempConverter()}°</span>
                <span className='weather-forecast-min'>{minTempConverter()}°</span>
            </div>
        </div>
    )
}

export default WeatherDailyForecast;