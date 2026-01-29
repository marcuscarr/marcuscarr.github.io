import React from 'react'

function Header() {
  return (
    <header className="header">
      <nav className="container">
        <div className="logo">Premium Dry-Mix</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
