import './App.css';
import { useEffect, useState } from 'react';
import Weather from './Weather.js'
import Search from './Search.js'
import temp from './temp_json.json'

function App() 
{

  const[forecastData, setForecastData] = useState();
  const[currentCity, setCurrentCity] = useState()
  const[success, isSuccess] = useState('false');

  const key = "e91ab26fea321eaa5e3ede151671fa9d";
  const api = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid="+key;

  useEffect(() => {
    if(currentCity != undefined)
    {
      console.log(api)
      fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setForecastData(json)
        isSuccess(true)
      })
      .catch(isSuccess(false))
    }
  }, [currentCity])

  const renderScreen = () =>
  {
    if(success === true)
    {
      if(forecastData.cod === '404')
      {
        console.log(forecastData.cod)
        return <p>Invalid location</p>
      }
      else
      {
        return <Weather city = {forecastData.name} forecast = {forecastData} tempType = "c"/>
      }
    }
  }

  return (
    <div className="App">
      {
        renderScreen()
      }
      <Search search = {setCurrentCity} />
    </div>
  );
}

export default App;
