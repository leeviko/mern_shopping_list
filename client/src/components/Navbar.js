import React, { useState } from 'react'
import { Link, BrowserRouter as Router } from "react-router-dom"

import MenuImg from "../img/menu.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <div className="navbar">
        <nav className="nav">
          <div className="nav-items">
            <img className="nav-hamburger" src={MenuImg} onClick={() => toggle()} />
            <Link to="/" className="nav-item nav-item-logo">Shopping List</Link>
            <a href="https://github.com/leeviko" className="nav-item">Github</a>
            <div className="collapse">
              <nav className={"nav-collapse " + (isOpen ? "open" : "")}>
                <a href="https://github.com/leeviko" className="nav-item">Github</a>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </Router>
  )
}

export default Navbar
