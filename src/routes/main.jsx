import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/main.css'
import App from './App'
import ContactList from '../pages/ContactList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddContact from '../pages/AddContact'
import { ContactProvider } from '../context/ContactContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ContactProvider>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<ContactList/>} />
          <Route path='add-contact' element={<AddContact/>} />
        </Route>
      </Routes>
    </Router>
  </ContactProvider>
  </>
)
