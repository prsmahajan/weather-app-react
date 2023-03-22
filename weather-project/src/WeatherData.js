import React from 'react';
import FormatDate from './FormatDate';
import WeatherIcon from './WeatherIcon';
import WeatherConvert from './WeatherConverter';

export default function WeatherData(props){
    return(
    <div className="WeatherData ps-3">
           <h1>{props.weather.city}</h1>
            <ul>
                <li><FormatDate date={props.weather.date} /></li>
                <li className='desc'>{props.weather.description}</li>
            </ul>
            <div className='row'>
                <div className='col-6 mt-2'>
                <WeatherIcon code={props.weather.icon} size={52} />
                    {/* <span className="temperature">{Math.round(props.weather.temperature)}</span> */}
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