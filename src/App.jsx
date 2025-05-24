
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { Link } from 'react-router-dom'
import Cart from './pages/Cart'

function App() {


  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-green-600 text-white p-4 flex justify-between">
          <h1 className="text-4xl font-bold">Blinkit</h1>
          <Link to="/cart" className=" text-2xl hover:underline">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
