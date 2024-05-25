import React, { useContext, useEffect } from 'react'
import '../styles/pages/ContactList.css'
import ContactContext from '../context/ContactContext'
import { useNavigate } from 'react-router-dom'

const ContactList = () => {
  const { users, setUsers } = useContext(ContactContext)
  const navigate = useNavigate()



  const handleEditContact = (userId) => {
    navigate(`edit-contact/${userId}`)
  }

  return (
    <>
    <div className="contactlist-container">
      <h3>Contact List</h3>
      { users.length ? (
        <>
        <div className="contacts">
          { users.map((user) => (
            <ul key={user.id}>  
              <li>
                <p>Full Name:
                  <i>
                    {user.name}
                  </i>
                </p>
              </li>
              <li>
                <p>Username:
                  <i>
                    {user.username}
                  </i>
                </p>
              </li>
              <li>
                <p>Email Address:
                  <i>
                    {user.email}
                  </i>
                </p>
              </li>
              <li>
                <p>Phone Number:
                  <i>
                    {user.phone}
                  </i>
                </p>
              </li>
              <button onClick={() => handleEditContact(user.id)}>Edit Info</button>
              <button>Delete</button>
            </ul>
          ))}
        </div>
        </>
      ) : (
        <div>
          <p>No contacts</p>
        </div>
      )}
    </div>
    </>
  )
}

export default ContactList