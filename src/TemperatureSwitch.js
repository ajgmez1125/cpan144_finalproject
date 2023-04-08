import { useState, useEffect } from 'react'

function TemperatureSwitch(props)
{
    const[currentType, setCurrentType] = useState();
    useEffect(() => {
        props.switcher(currentType)
    }, [currentType])

    return(
        <div>
            <input name = 'c' type = 'button' value = 'Celsius' onClick={(e) => setCurrentType(e.target.name)}/>
            <input name = 'f' type = 'button' value = 'Fahrenheit' onClick={(e) => setCurrentType(e.target.name)}/>
            <input name = 'k' type = 'button' value = 'Kelvin' onClick={(e) => setCurrentType(e.target.name)}/>
        </div>
    )
}

export default TemperatureSwitch;