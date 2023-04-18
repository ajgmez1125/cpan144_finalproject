import { useState, useEffect } from 'react'

function TemperatureSwitch(props)
{
    const[measurementSystem, setMeasurementSystem] = useState('metric');

    useEffect(() => {
        props.switcher(measurementSystem)
    }, [measurementSystem])

    return(
        <div className='tempswitch'>
            <input name = 'metric' className='button' type = 'button' value = 'Metric' onClick={(e) => setMeasurementSystem(e.target.name)}/>
            <input name = 'imperial' className='button' type = 'button' value = 'Imperial' onClick={(e) => setMeasurementSystem(e.target.name)}/>
        </div>
    )
}

export default TemperatureSwitch;