import './App.css'
import { useEffect, useState } from 'react';
import Weather from './Weather.js'
import Search from './Search.js'
import './styles.css'

function App() 
{
  const[forecastData, setForecastData] = useState();
  const[city, setCity] = useState()
  const[country, setCountry] = useState("")

  const key = "e91ab26fea321eaa5e3ede151671fa9d";
  const api = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&appid=" +key;

  useEffect(() => {
    if(city !== undefined)
    {
      console.log(api)
      fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setForecastData(json)
      })
      .catch(setForecastData(null))
    }
  }, [city, country])

  const renderScreen = () =>
  {
    if(forecastData != null)
    {
      if(forecastData.cod === '404')
      {
        console.log(forecastData.cod)
        return <p>Invalid location</p>
      }
      else
      {
        return <Weather forecast = {forecastData}/>
      }
    }
  }

  return (
    <div className="App">
      {
        renderScreen()
      }
      <Search searchCity = {setCity} searchCountry = {setCountry} />
    </div>

  );
}

export default App;
