import React, { useEffect, useRef, useState} from 'react';
import './TitleCards.css';
import TheBody from '../../assets/TheBody.jpg';
import shaitaan1 from '../../assets/shaitaan1.webp';
import Journey2 from '../../assets/Journey2.jpg';
import ittefaq from '../../assets/ittefaq.jpg';
import Lucifer from '../../assets/Lucifer.jpg';
import classof83 from '../../assets/classof83.jpeg';
import Jawan from '../../assets/Jawan.jpg';
import underparis1 from '../../assets/underparis1.jpg';
import Damsel from '../../assets/Damsel.jpg';
import Nowhere from '../../assets/Nowhere.webp';
import Theghost from '../../assets/Theghost.jpg';
import Godzilla from '../../assets/Godzilla.jpg';
import Gumraah from '../../assets/Gumraah.webp';
import Sherdil from '../../assets/Sherdil.jpg';
import Drishyam from '../../assets/Drishyam.jpg';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {
  const titles = [
    { src: TheBody, title: 'The Body' },
    { src: shaitaan1, title: 'Shaitaan' },
    { src: Journey2, title: 'Journey 2' },
    { src: ittefaq, title: 'Ittefaq' },
    { src: Lucifer, title: 'Lucifer' },
    { src: classof83, title: 'Class of 83' },
    { src: Jawan, title: 'Jawan' },
    { src: underparis1, title: 'Under Paris' },
    { src: Damsel, title: 'Damsel' },
    { src: Nowhere, title: 'Nowhere' },
    { src: Theghost, title: 'The Ghost' },
    { src: Godzilla, title: 'Godzilla vs Kong' },
    { src: Gumraah, title: 'Gumraah' },
    { src: Sherdil, title: 'Sherdil' },
    { src: Drishyam, title: 'Drishyam' },
  ];

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDAzNTgxMjMzNGZhYTRjMzA1NzQxMzYyNDZhNDAxMyIsInN1YiI6IjY2NzQzOGM1Yzk4YTczMGM5ZTFkYzZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQGVGcNZFLD26Q83yTiw40cUaV34kfPxniOc2r1pmFA'
    }
  };



  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link className="card" to={`/player/${card.id}`} key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.title} className='card_img' />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  );
};

export default TitleCards;