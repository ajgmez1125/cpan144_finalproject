import { useState, useEffect } from 'react'

function Panel(props)
{
    const[weatherType, setWeatherType] = useState();
    const[description, setDescription] = useState();
    const[temperature, setTemperature] = useState();
    const[feelsLike, setFeelsLike] = useState();
    const[time, setTime] = useState();
    const deg = '\u00B0'

    useEffect(() => {
        setTime(props.forecast.dt_txt)
        setWeatherType(props.forecast.weather[0].main)
        setDescription(props.forecast.weather[0].description)
        setTemperature(adjustTemp(props.forecast.main.temp))
        setFeelsLike(adjustTemp(props.forecast.main.feels_like));
    }, [props.unit])

    const adjustTemp = (temp) =>
    {
        var adjustedTemp = temp;
        if(props.unit === 'c')
        {
            adjustedTemp = temp - 273.15
        }
        if(props.unit === 'f')
        {
            adjustedTemp = (temp - 273.15) * 9/5 + 32;
        }
        if(props.unit === 'k')
        {
            adjustedTemp = temp;
        }
        return Math.floor(adjustedTemp);
    }

    return(
        <div>
            <p>{time}</p>
            <h2>{weatherType}</h2>
            <p>{description}</p>
            <h4>Temperature is {temperature + deg}{props.unit}</h4>
            <h4>Feels like {feelsLike + deg}{props.unit}</h4>
        </div>
    )
}
export default Panel;