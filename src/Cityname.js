import {useState} from 'react'
import Showdata from './Showdata'
const Cityname = () => {
const apikey="191099ed8445fe8983972073b1d68dd9";
const [data,setData] = useState(null)
const [error,setError] = useState(null)
const [ispending,setPending] = useState(false)
const [cityName,setCity] = useState(null)
async function getWeather(city) { 
   try { 
     setData(null)
     let data = await fetch( 
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric` 
     ); 
     if (!data.ok) {
       throw Error('city not found!!!')
     }
     data = await data.json(); 
     setData(data)
     setPending(false)
     setError(null)
  } catch (err) { 
     setError(err.message)
     setPending(false)
   } 
 }
 function click () {
   setPending(true)
   setData(null)
   setError(null)
   getWeather(cityName.trim())
 }
 function del () {
   setCity('')
 }
  return (
    <div className="home">
    <div className="headtitle">
     <h2>Fetch Weather Data API</h2>
     <p>By City Name</p>
    </div>
    <div className="inputd">
    {cityName && <span onClick={del}>x</span>}
     <input 
       type="text" 
       name="city" 
       id="city" 
       value={cityName}
       onInput={(e)=> setCity(e.target.value.toLowerCase())}
       placeholder="Enter City Name"/>
       <button onClick={click}>Search</button>
    </div>
     {error && <div className="er">{error}</div>}
     {ispending && <div className="L"></div>}
     {data && <Showdata da={data}/>}
    </div>
    )
}
export default Cityname