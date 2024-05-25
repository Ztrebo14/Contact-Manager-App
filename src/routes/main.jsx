import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/main.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContactProvider } from '../context/ContactContext'
import ContactList from '../pages/ContactList'
import AddContact from '../pages/AddContact'
import EditContact from '../pages/EditContact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <ContactProvider>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<ContactList/>} />
          <Route path='add-contact' element={<AddContact/>} />
          <Route path='edit-contact/:userId' element={<EditContact />} />
        </Route>
      </Routes>
    </Router>
  </ContactProvider>
  </>
)
