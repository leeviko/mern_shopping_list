import React from 'react'
import { Link, BrowserRouter as Router } from "react-router-dom"

import MenuImg from "../img/menu.svg"

const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <nav className="nav">
          <div className="nav-items">
            <Link to="/" className="nav-item nav-item-logo">Shopping List</Link>
            <a href="https://github.com/leeviko" className="nav-item">Github</a>
          </div>
        </nav>
      </div>
    </Router>
  )
}

export default Navbar
