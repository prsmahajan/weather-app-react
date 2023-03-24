import React from 'react';
import FormatDate from './FormatDate';
import WeatherIcon from './WeatherIcon';
import WeatherConvert from './WeatherConverter';

export default function WeatherData(props){
    return(
    <div className="WeatherData">
           <h1>{props.weather.city}</h1>
            <ul>
                <li><FormatDate date={props.weather.date} /></li>
                <li className='desc'>{props.weather.description}</li>
            </ul>
            <div className='row mb-5'>
                <div className='col-6 mt-2'>
                    <WeatherIcon code={props.weather.icon} size={52} />
                    <WeatherConvert celsius={props.weather.temperature} />
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.weather.humidity}%</li>
                        <li>Wind: {props.weather.wind}km/h</li>
                    </ul>
                 </div>
            </div>
    </div>
)
}