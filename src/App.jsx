import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home'
import NotFound from './components/Notfound'
import Services from './components/Services'
import Login from './components/Login'
import Signup from './components/Signup'
import Customerservice from './components/Customerservice'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/customer-service' element={<Customerservice />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

