import { useState, useEffect } from 'react';
import TemperatureSwitch from './TemperatureSwitch.js';
import Panel from './Panel.js'

function Weather(props)
{
    // const[panels, setPanels] = useState([]);
    const[city, setCity] = useState();
    const[allForecasts, setAllForecasts] = useState()
    const[unit, setUnit] = useState();

    useEffect(() => {
        setCity(props.forecast.city.name)
        setAllForecasts(props.forecast)
    }, [])

    const returnPanel = () => {
        if(allForecasts !== undefined)
        {
            return <Panel forecast = {allForecasts.list[0]} unit = {unit}/>
        }
    }

    return(
        <div>
            <h1>{city}</h1>
            {
                returnPanel(0)
            }
            <TemperatureSwitch switcher = {setUnit}/>
        </div>
    )
}

export default Weather;