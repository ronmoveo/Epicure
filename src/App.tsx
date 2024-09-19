import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantList from './pages/RestaurantList'
import RestaurantDetail from './pages/RestaurantDetail'
import './App.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurants" element={<RestaurantList />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
    </Routes>
  )
}

export default App