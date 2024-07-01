import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import search from '../../assets/search.png';
import Netflix1 from '../../assets/Netflix1.png';
import Netflixprofile from '../../assets/Netflixprofile.png';
import { logout } from '../../Firebase';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, []);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    // Implement search logic here
  };

  return (
    <>
      <div ref={navRef} className="navbar">
        <div className="navbar-left">
          <img src={Netflix1} alt="" />
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/TV_shows/121-35-8-79/tv"}>TV Shows</Link></li>
            <li><Link to={"/Movies/414-3-76"}>Movies</Link></li>
            <li><Link to={"/My-list/630-42-12"}>My List</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <img
            src={search}
            alt="Search"
            className='search'
            onClick={handleSearchIconClick}
          />
          {isSearchOpen && (
            <form className="search-bar" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search"
                className="search-input"
              />
              <button type="submit" className="search-button">Search</button>
            </form>
          )}
          <div className="navbar-profile">
            <img src={Netflixprofile} alt="" className='profile'/>
            <div className="dropdown">
              <p onClick={() => { logout(); }}>Sign Out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
