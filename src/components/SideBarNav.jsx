import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/SideBarNav.css'

const SideBarNav = () => {
  return (
    <> 
    <div className="nav-bar-container">
        <h3>Contact Manager App</h3>
        <div className="nav-links">
          <Link to={'/'}>Contact List</Link>
          <Link to={'add-contact'}>Add Contact</Link>
        </div>
    </div>

    </>
  )
}

export default SideBarNav