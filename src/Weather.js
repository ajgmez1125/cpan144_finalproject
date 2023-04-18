import { useState, useEffect } from 'react';
import TemperatureSwitch from './TemperatureSwitch.js';
import Panel from './Panel.js'

function Weather(props)
{
    const[city, setCity] = useState();
    const[country, setCountry] = useState('');
    const[measurementUnit, setMeasurementUnit] = useState();
    const[tempUnit, setTempUnit] = useState();
    const[speedUnit, setSpeedUnit] = useState();

    useEffect(() => {
        setCity(props.forecast.city.name)
        setCountry(props.forecast.city.country)
    }, [country, city])

    useEffect(() => {
        switch(measurementUnit)
        {
            case 'metric':
                setTempUnit('c')
                setSpeedUnit('km/h')
            break;
            case 'imperial':
                setTempUnit('f')
                setSpeedUnit('m/h')
            break;
        }
    }, [measurementUnit])

    const returnPanel = () => {
        if(props.forecast !== undefined)
        {
            return (
                returnEachNthElement(8, props.forecast.list).map((data) => {
                    return <Panel forecast = {data} measurementUnit = {measurementUnit} tempUnit = {tempUnit} speedUnit = {speedUnit}/>
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
            <TemperatureSwitch switcher = {setMeasurementUnit}/>
            {
                returnPanel()
            }
        </div>
    )
}

export default Weather;