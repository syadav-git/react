import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Nevbar from './components/Nevbar'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Notfound from './pages/Notfound'

function App() {

  return (
    <>
      <Router>
        <Nevbar/>
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/about" element={<About/>} />
          <Route path ="/contect" element={<Contect/>} />

          <Route path ="/" element={<Notfound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
