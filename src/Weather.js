import { useState, useEffect } from 'react'
import TemperatureSwitch from './TemperatureSwitch.js';

function Weather(props)
{
    const[city, setCity] = useState();
    const[weatherType, setWeatherType] = useState();
    const[description, setDescription] = useState();
    const[temperature, setTemperature] = useState();
    const[feelsLike, setFeelsLike] = useState();
    const[tempType, setTempType] = useState();
    const deg = '\u00B0'

    useEffect(() => {
        setTempType(props.tempType)
        setCity(formatString(props.city))
        setWeatherType(props.forecast.weather[0].main)
        setDescription(props.forecast.weather[0].description)
    }, [])

    useEffect(() => {
        setTemperature(adjustTemp(props.forecast.main.temp))
        setFeelsLike(adjustTemp(props.forecast.main.feels_like));
    }, [tempType])

    const formatString = (string) =>
    {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }

    const adjustTemp = (temp) =>
    {
        var adjustedTemp = temp;
        if(tempType === 'c')
        {
            adjustedTemp = temp - 273.15
        }
        if(tempType === 'f')
        {
            adjustedTemp = (temp - 273.15) * 9/5 + 32;
        }
        if(tempType === 'k')
        {
            adjustedTemp = temp;
        }
        return Math.floor(adjustedTemp);
    }

    return(
        <div>
            <h1>{city}</h1>
            <h3>{weatherType}</h3>
            <p>{description}</p>
            <h4>It is {temperature + deg}{tempType}</h4>
            <h4>Feels like {feelsLike + deg}{tempType}</h4>
            <TemperatureSwitch switcher = {setTempType}/>
        </div>
    )
}

export default Weather;