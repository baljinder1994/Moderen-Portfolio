import React, { useState } from 'react'

const Navbar = () => {
    const[isMenuOpen,setIsMenuOpen]=useState(false)
    const toogleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <nav className='navbar3d'>
        <div className='navbar3d-brand'>My Portfolio</div>
        <ul className={`navbar3d-menu ${isMenuOpen ? 'show' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='hamburger' onClick={toogleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default Navbar
