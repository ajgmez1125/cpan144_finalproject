import { useState, useEffect } from 'react';
import TemperatureSwitch from './TemperatureSwitch.js';
import Panel from './Panel.js'

function Weather(props)
{
    const[city, setCity] = useState();
    const[country, setCountry] = useState('test');
    const[unit, setUnit] = useState();

    useEffect(() => {
        setCity(props.forecast.city.name)
        setCountry(props.forecast.city.country)
    }, [])

    const returnPanel = () => {
        if(props.forecast !== undefined)
        {
            return <Panel forecast = {props.forecast.list[0]} unit = {unit}/>
        }
    }

    return(
        <div>
            <h1>{city} {country}</h1>
            {
                returnPanel(0)
            }
            <TemperatureSwitch switcher = {setUnit}/>
        </div>
    )
}

export default Weather;