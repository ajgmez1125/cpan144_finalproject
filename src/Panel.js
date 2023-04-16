import { useState, useEffect } from 'react'

function Panel(props)
{
    const[weatherType, setWeatherType] = useState();
    const[description, setDescription] = useState();
    //const[weatherImg, setWeatherImg] = useState();

    const[temperature, setTemperature] = useState();
    const[feelsLike, setFeelsLike] = useState();

    const[humidity, setHumidity] = useState()
    const[windSpeed, setWindSpeed] = useState()
    
    const[time, setTime] = useState();
    const deg = '\u00B0'

    useEffect(() => {
        setTime(props.forecast.dt_txt)

        setWeatherType(props.forecast.weather[0].main)
        setDescription(props.forecast.weather[0].description)

        setTemperature(adjustTemp(props.forecast.main.temp))
        setFeelsLike(adjustTemp(props.forecast.main.feels_like));

        setHumidity(props.forecast.main.humidity)
        setWindSpeed(adjustSpeed(props.forecast.wind.speed))
    }, [props.measurementUnit])

    const adjustTemp = (temp) =>
    {
        var adjustedTemp = temp;
        if(props.measurementUnit === 'metric')
        {
            adjustedTemp = temp - 273.15
        }
        if(props.measurementUnit === 'imperial')
        {
            adjustedTemp = (temp - 273.15) * 9/5 + 32;
        }
        return Math.floor(adjustedTemp);
    }

    const adjustSpeed = (speed) => {
        var adjustedSpeed;
        switch(props.measurementUnit)
        {
            case 'metric':
                adjustedSpeed = speed * 3.6
            break;
            case 'imperial':
                adjustedSpeed = (speed * 3.6) * 0.621371
            break;
        }
        return Math.round(adjustedSpeed)
    }

    return(
        <div class = 'weather_panel'>
            <p>{time}</p>
            <h2>{weatherType}</h2>
            <p>{description}</p>
            <div class = 'temperature_subpanel'>
                <h4>Temperature is {temperature + deg}{props.tempUnit}</h4>
                <h4>Feels like {feelsLike + deg}{props.tempUnit}</h4>
                <h4>Humidity: {humidity}%</h4>
                <h4>Wind speed: {windSpeed}{props.speedUnit}</h4>
            </div>
        </div>
    )
}
export default Panel;