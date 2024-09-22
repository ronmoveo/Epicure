import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  
  const restaurant = {
    name: 'Claro',
    chef: 'Ran Shmueli',
    signatureDish: 'Colorful Salad'
  }

  return (
    <div className="restaurant-detail">
      <h2>{restaurant.name}</h2>
      <p>Chef: {restaurant.chef}</p>
      <div className="signature-dish">
        <h3>Signature Dish</h3>
        <img src="/path-to-dish-image.jpg" alt={restaurant.signatureDish} />
        <p>{restaurant.signatureDish}</p>
      </div>
    </div>
  )
}

export default RestaurantDetail