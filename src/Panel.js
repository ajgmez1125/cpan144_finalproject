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
        // setWeatherImg();

        setTemperature(adjustTemp(props.forecast.main.temp))
        setFeelsLike(adjustTemp(props.forecast.main.feels_like));

        setHumidity(props.forecast.main.humidity)
        setWindSpeed(props.forecast.wind.speed)
    }, [props.unit])

    // const setWeatherImg = () =>
    // {
    //     switch(weatherType)
    //     {
    //         case "cloudy":
    //             break;
    //         case "rainy":
    //             break;
    //         case "clear":
    //             break;
    //         case "windy":
    //             break;
    //         case "sunny":
    //             break;
    //         default:
    //             break;
    //     }
    // }

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
        <div class = 'weather_panel'>
            <p>{time}</p>
            <h2>{weatherType}</h2>
            <p>{description}</p>
            <div class = 'temperature_subpanel'>
                <h4>Temperature is {temperature + deg}{props.unit}</h4>
                <h4>Feels like {feelsLike + deg}{props.unit}</h4>
                <h4>Humidity: {humidity}%</h4>
                <h4>Wind speed: {windSpeed}mp/h</h4>
            </div>
        </div>
    )
}
export default Panel;