const Header = () => {
  const chat = () => {
    window.open( "https://wa.me/+201066103501")
  }
  return (
  <header className="site-header">
    <div className="site-identity">
     <h1>WeatherApp</h1>
   </div>  
   <nav className="site-navigation">
     <ul class="nav">
       <li onClick={chat}><a href="/">Contact</a></li> 
     </ul>
   </nav>
</header>
   )
}
export default Header