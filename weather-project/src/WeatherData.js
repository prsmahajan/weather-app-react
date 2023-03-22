import React from 'react';
import FormatDate from './FormatDate';
export default function WeatherData(props){
    return(
    <div className="Weather">
        <div className="container">
            <form onSubmit={props.handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder='Type a city...' className='form-control' autoFocus='on' onChange={props.handleCity}/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className='btn btn-primary w-100'/>
                    </div>
                </div>
            </form>
            <h1>{props.weather.city}</h1>
            <ul>
                <li><FormatDate date={props.weather.date} /></li>
                <li class='desc'>{props.weather.description}</li>
            </ul>
            <div className='row'>
                <div className='col-6'>
                    <img src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' alt='Mostly Cloudy'/>
                    <span className="temperature">{Math.round(props.weather.temperature)}</span>
                    <span className="unit">°C</span>
                </div>
            <div className="col-6">
                <ul>
                    {/* <li>Precipitation: 15%</li> */}
                    <li>Humidity: {props.weather.humidity}%</li>
                    <li>Wind: {props.weather.wind}km/h</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
)
}