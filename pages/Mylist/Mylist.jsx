import React from 'react';
import './Mylist.css';
import TitleCards from '../../components/TitleCards/TitleCards';
import Navbar from '../../components/Navbar/Navbar';

const Mylist = () => {
  return (
    <>
        
    <div className="TV_shows-main">
    <Navbar/>
    <div className="TV_shows">
    <TitleCards title={"My List"} category={"upcoming"}/>
    <TitleCards title={"-"} category={"top_rated"}/>
    </div>
    </div>
    </>
  )
}

export default Mylist