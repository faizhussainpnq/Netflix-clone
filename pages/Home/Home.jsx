import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import rideordie from '../../assets/rideordie.jpg';
import caption from '../../assets/caption.png';
import Npng from '../../assets/Npng.png';
import { IoIosPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <>
  <div className="home">
    <Navbar/>
    <div className="banner">
      <img src={rideordie} alt="" className='banner-img'/>
       <div className="banner-caption">
       <div className="nseries">
        <img src={Npng} alt="" className='caption-img' /><p>SERIES</p>
        </div>
        <h2>Bad Boys: Ride or Die</h2>
        
        <p className='date'>2024 | <span>🄰</span> | 4 Seasons | Drama</p>
        <p className='detail'>When their late police captain gets linked to drug 
        cartels, wisecracking Miami cops Mike Lowrey and Marcus Burnett embark on a 
        dangerous mission to clear his name.</p>
         <div className="hero-btns">
          <button className='play-btn'><IoIosPlay  size={20}/><span>Play</span></button>
           <button className='info-btn'><a href="https://en.wikipedia.org/wiki/Bad_Boys:_Ride_or_Die" target='_blank'><IoIosInformationCircleOutline size={20}/><span>More Info</span></a></button>
         </div>
         <div className="movie">
         <TitleCards/>
         </div>
      </div>
    <div className="more-cards">
    <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
    <TitleCards title={"Only on Netflix"} category={"popular"}/>
    <TitleCards title={"Upcoming"} category={"upcoming"}/>
    <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
    </div>
    <Footer/>
    </div>
  </div>
    </>
  )
}

export default Home 