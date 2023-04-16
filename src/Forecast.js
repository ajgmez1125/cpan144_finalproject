import './App.css'
import { useEffect, useState } from 'react';
import Weather from './Weather.js'
import Search from './Search.js'
import './styles.css'
import { useParams, useNavigate } from 'react-router-dom'

function Forecast() 
{
    var nav = useNavigate();
    var {cityParam, countryParam} = useParams()

    const[forecastData, setForecastData] = useState();
    const[city, setCity] = useState('')
    const[country, setCountry] = useState('')

    const key = "e91ab26fea321eaa5e3ede151671fa9d";
    const api = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&appid=" +key;

    useEffect(() => {
        setCity(cityParam)
        if(countryParam != null)
        {
            setCountry(countryParam)
        }
    })

    useEffect(() => {
        if(city !== '')
        {
            fetch(api)
            .then((response) => response.json())
            .then((json) => setForecastData(json))
            .catch(<h1>There was an error</h1>)
        }
        console.log(api)
    }, [city, country])

    const renderScreen = () =>
    {
    if(forecastData != null)
    {
        if(forecastData.cod === '404')
        {
            nav('/error')
        }
        else
        {
            return <Weather forecast = {forecastData}/>
        }
    }
    }

    return (
    <div className="App">
        {
            renderScreen()
        }
    </div>
    );
    }

    export default Forecast;
