import { useState } from 'react'
import '../styles/App.css'
import { Outlet } from 'react-router-dom'
import SideBarNav from '../components/SideBarNav'

function App() {

  return (
    <>
      <div className="app-container">
        {/* <h3>Test App Component</h3> */}
        <div className="nav-outlet-container">
          <SideBarNav />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
