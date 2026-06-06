import Greeting from './components/greeting'
import './App.css'
import Counter from './components/counter'
import Toggle from './components/Toggle'
import Home from './pages/Home'
import Products from './components/Products'

import {BrowserRouter, Routes, Route,NavLink} from 'react-router-dom'

function App() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' })

  return (
    <BrowserRouter>
    <nav className= 'bg-gray-800 shadow-lg text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
       <ul className='flex justify-around gap3 py-4'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
             <li>
              <NavLink to='/counter'>Counter</NavLink>
             </li>
              
              <li>
              <NavLink to='/toggle'>Toggle</NavLink>
              </li>
              <li>
              <NavLink to='/products'>Product</NavLink>
              </li>
       </ul>
      </div>

    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/toggle' element={<Toggle />} />
      <Route path='/products' element={<Products />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
