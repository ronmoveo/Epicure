import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Epicure - Top Chef Restaurants in Tel Aviv</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurant, cuisine, chef" />
      </div>
      <Link to="/restaurants" className="view-all">All Restaurants</Link>
    </div>
  )
}

export default Home