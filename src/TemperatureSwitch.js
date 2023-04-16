import { useState, useEffect } from 'react'

function TemperatureSwitch(props)
{
    const[measurementSystem, setMeasurementSystem] = useState('metric');

    useEffect(() => {
        props.switcher(measurementSystem)
    }, [measurementSystem])

    return(
        <div>
            <input name = 'metric' type = 'button' value = 'Metric' onClick={(e) => setMeasurementSystem(e.target.name)}/>
            <input name = 'imperial' type = 'button' value = 'Imperial' onClick={(e) => setMeasurementSystem(e.target.name)}/>
        </div>
    )
}

export default TemperatureSwitch;