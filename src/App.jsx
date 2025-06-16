import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'

import Home from '../components/Home'
function App() {
  return (
    <div className="Full">
      <Routes>
        <Route path='/' element={<Home/>}  />
      </Routes>
    </div>

  )
}

export default App