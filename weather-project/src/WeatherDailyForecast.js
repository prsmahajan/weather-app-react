import React from 'react'
import WeatherIcon from './WeatherIcon'
import './WeatherDaily.css'

export default function WeatherForecast(props) {
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