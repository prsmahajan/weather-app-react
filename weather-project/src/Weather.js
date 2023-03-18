import React, {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

export default function Weather(){
    const [weather, setWeather] = useState({ ready: false })

    function handleResponse(response){
        setWeather({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: 'Wednesday 07:00'
            // date: new Date(response.data.dt*1000)
        })
    }
    if(weather.ready){
        return (
        <div className="Weather">
        <div className="container">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder={weather.city} className='form-control' autoFocus='on' />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className='btn btn-primary w-100'/>
                    </div>
                </div>
            </form>
            <h1>{weather.city}</h1>
            <ul>
                <li>{weather.date}</li>
                <li class='desc'>{weather.description}</li>
            </ul>
            <div className='row'>
                <div className='col-6'>
                    <img src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' alt='Mostly Cloudy'/>
                    <span className="temperature">{Math.round(weather.temperature)}</span>
                    <span className="unit">°C</span>
                </div>
            <div className="col-6">
                <ul>
                    {/* <li>Precipitation: 15%</li> */}
                    <li>Humidity: {weather.humidity}%</li>
                    <li>Wind: {weather.wind}km/h</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    )}
    else{
        const apiKey=`ca35573e56f9c2d39e2edcd6425fd8b7`
        let city='london'
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(url).then(handleResponse)
        return <h2>'Loading...'</h2>    
    }
}