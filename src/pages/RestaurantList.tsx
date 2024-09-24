import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantList: React.FC = () => {
  const restaurants = [
    { id: 1, name: 'Claro', chef: 1 },
    { id: 2, name: 'Lumia', chef: 2 },
  ]

  return (
    <div className="restaurant-list">
      <h2>Popular Restaurants in Epicure</h2>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
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