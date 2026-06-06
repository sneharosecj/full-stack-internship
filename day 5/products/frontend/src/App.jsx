
import './App.css'

import AddProduct from './components/AddProduct'
import ProductDetails from './components/ProductDetails'
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
              <NavLink to='/addproduct'>Add Product</NavLink>
             </li>
              
              
              <li>
              <NavLink to='/products'>Product</NavLink>
              </li>
       </ul>
      </div>

    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/edit-product/:id' element={<AddProduct />}/>
      <Route path='/products/:id' element={<ProductDetails />}/>
      

      </Routes>

    </BrowserRouter>
  )
}

export default App
