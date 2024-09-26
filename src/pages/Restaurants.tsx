import React from 'react'
import { Link } from 'react-router-dom'
import {  mockRestaurants} from "../mockData"

const RestaurantList: React.FC = () => {

  return (
    <div className="restaurant-list">
      <h2>Popular Restaurants in Epicure</h2>
      <div className="restaurant-grid">
        {mockRestaurants.map((restaurant) => (
          <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id} className="restaurant-card">
            <h3>{restaurant.name}</h3>
            <p>{restaurant.chef}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList