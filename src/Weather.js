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
    }, [country, city])

    const returnPanel = () => {
        if(props.forecast !== undefined)
        {
            return (
                returnEachNthElement(8, props.forecast.list).map((data) => {
                    return <Panel forecast = {data} unit = {unit}/>
                })
            )
        }
    }

    const returnEachNthElement = (n, arr) => {
        var newArr = []
        for(var i = 0; i < arr.length; i = i + n)
        {
            newArr.push(arr[i])
        }
        return newArr
    }

    return(
        <div>
            <h1>{city} {country}</h1>
            <TemperatureSwitch switcher = {setUnit}/>
            {
                returnPanel()
            }
            <TemperatureSwitch switcher = {setUnit}/>
        </div>
    )
}

export default Weather;