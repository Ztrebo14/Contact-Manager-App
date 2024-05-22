import React, { createContext, useState } from 'react'

const ContactContext = createContext()

export const ContactProvider = ({children}) => {
    const [ users, setUsers ] = useState([])

  return (
    <>
        <ContactContext.Provider value={{ users, setUsers }}>
            {children}
        </ContactContext.Provider>
    </>
  )
}

export default ContactContext