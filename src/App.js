import './App.css'
import './styles.css'
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import Forecast from './Forecast.js'
import Home from './Home.js'
import Error from './Error.js'

function App() 
{
  return (
    <div>
      <Link to='/'> Home </Link>
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/weather/:cityParam' element={<Forecast />}/>
        <Route path = '/weather/:cityParam/:countryParam' element={<Forecast />}/>
        <Route path = '*' element = {<Error />} />
        <Route path = '/error' element = {<Error />} />
      </Routes>
    </div>
  );
}

export default App;
