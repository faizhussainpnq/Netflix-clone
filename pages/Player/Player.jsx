import React, { useEffect, useState } from 'react';
import './Player.css';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";

const Player = () => {

  const {id} = useParams();

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDAzNTgxMjMzNGZhYTRjMzA1NzQxMzYyNDZhNDAxMyIsInN1YiI6IjY2NzQzOGM1Yzk4YTczMGM5ZTFkYzZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQGVGcNZFLD26Q83yTiw40cUaV34kfPxniOc2r1pmFA'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <>
      <div className="player">
        <Link to='/'><IoArrowBackCircleOutline size={50} className='back-btn' /></Link>
        <iframe width="90%" height="90%" 
        src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' 
        frameborder="0"
          allowFullScreen></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      </div>
    </>
  )
}

export default Player