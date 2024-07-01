import React from 'react';
import './TVshows.css';
import TitleCards from '../../components/TitleCards/TitleCards';
import Navbar from '../../components/Navbar/Navbar';

function TVshows() {
  return (
    <>
    <div className="TV_shows-main">
    <Navbar/>
    <div className="TV_shows">
    <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
    <TitleCards title={"Only on Netflix"} category={"popular"}/>
    <TitleCards title={"Upcoming"} category={"upcoming"}/>
    <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
    </div>
    </div>
    </>
  )
}

export default TVshows
