import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Products from './components/Products'

const App = () => {
  return (
    <div className='bg-zinc-900 min-h-screen text-white'>
      <nav className='flex justify-center text-lg gap-10 p-8'>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App