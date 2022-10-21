const Showdata = ({da}) => {
  return (
    <div className="content">
     <h3>{da.name}, {da.sys.country}</h3>
     <p>{da.weather[0].description}</p>
     <p>Temp: <span>{da.main.temp.toFixed(0)}&deg;C</span></p>
     <div>
      <img src={`http://openweathermap.org/img/wn/${da.weather[0].icon}@2x.png`} alt="img"/>
      </div>
   </div>
    )
}
export default Showdata