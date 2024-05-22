import React, { useContext } from 'react'
import '../styles/pages/ContactList.css'
import ContactContext from '../context/ContactContext'

const ContactList = () => {
  const { users, setUsers } = useContext(ContactContext)
  return (
    <>
    <div className="contactlist-container">
      <h3>Contact List</h3>
      { users.length ? (
        <>
        <div className="contacts">
          { users.map((user) => (
            <ul key={user.id}>
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>
              <li>{user.email}</li>
              <li>{user.phoneNum}</li>
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