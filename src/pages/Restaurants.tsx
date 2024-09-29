import React from 'react'
import { Link } from 'react-router-dom'
import {  mockRestaurants} from "../mockData"
import { POPULAR_RESTAURANTS_IN_EPICURE } from '../utils/constants'

const RestaurantList: React.FC = () => {

  return (
    <div className="restaurant-list">
      <h2>{POPULAR_RESTAURANTS_IN_EPICURE}</h2>
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