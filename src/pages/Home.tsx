import React from 'react'
import { Link } from 'react-router-dom'
import Hero
 from '../components/Hero'
const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurant, cuisine, chef" />
      </div>
      <Link to="/restaurants" className="view-all">All Restaurants</Link>
    </div>
  )
}

export default Home