import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/contect" style={{ margin: "10px" }}>Contact</Link>
        <Link to="/about" style={{ margin: "10px" }}>About</Link>
        
      </nav>
    </div>
  )
}