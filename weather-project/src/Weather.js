import React, {useState} from 'react'
import './Weather.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import WeatherData from './WeatherData'
import WeatherForecast from './WeatherDailyForecast'

export default function Weather(props){
    const [weather, setWeather] = useState({ ready: false })
    const [city, setCity]=useState(props.defaultCity)
    function handleSubmit(e){
        e.preventDefault()
        searchCity()
    }

    function handleCity(e){
        e.preventDefault()
        setCity(e.target.value)
    }

    function searchCity(){
        const apiKey=`ca35573e56f9c2d39e2edcd6425fd8b7`
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(url).then(handleResponse)
    }

    function handleResponse(response){
        setWeather({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
        })
    }
    if(weather.ready){
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder='Type a city...' className='form-control' autoFocus='on' onChange={handleCity}/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className='btn btn-primary w-100'/>
                    </div>
                </div>
            </form>
            <WeatherData weather={weather} />
            <WeatherForecast />
    </div>
    )}
    else{
        searchCity()
        return <h2>Loading...</h2>    
    }
}