import React from 'react';
import './Movies.css';
import TitleCards from '../../components/TitleCards/TitleCards';
import Navbar from '../../components/Navbar/Navbar';


function Movies() {
  return (
    <>
        <div className="Movies-main">
    <Navbar/>
    <div className="movies">
    <TitleCards title={"Blockbuster Movies"} category={"upcoming"}/>
    <TitleCards title={"Only on Netflix"} category={"popular"}/>
    <TitleCards title={"Upcoming"} category={"top_rated"}/>
    <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
    </div>
    </div>
    </>
  )
}

export default Movies