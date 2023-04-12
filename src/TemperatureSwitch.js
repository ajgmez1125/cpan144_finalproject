import { useState, useEffect } from 'react'

function TemperatureSwitch(props)
{
    const[currentUnit, setCurrentUnit] = useState('c');
    useEffect(() => {
        props.switcher(currentUnit)
    }, [currentUnit])

    return(
        <div>
            <input name = 'c' type = 'button' value = 'Celsius' onClick={(e) => setCurrentUnit(e.target.name)}/>
            <input name = 'f' type = 'button' value = 'Fahrenheit' onClick={(e) => setCurrentUnit(e.target.name)}/>
            <input name = 'k' type = 'button' value = 'Kelvin' onClick={(e) => setCurrentUnit(e.target.name)}/>
        </div>
    )
}

export default TemperatureSwitch;