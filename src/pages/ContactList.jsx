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
              <li>
                <p>First Name:
                  <i>
                    {user.firstName}
                  </i>
                </p>
              </li>
              <li>
                <p>Last Name:
                  <i>
                    {user.lastName}
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
                    {user.phoneNum}
                  </i>
                </p>
              </li>
              <button>Edit Info</button>
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