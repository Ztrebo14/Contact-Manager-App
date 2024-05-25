import React, { createContext, useState, useEffect } from 'react'

const ContactContext = createContext()

export const ContactProvider = ({children}) => {
    const [ users, setUsers ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
      const fetchFakeUserApi = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
          const fakeUserData = await response.json()
          setUsers(fakeUserData)
          setLoading(false)
        } catch (error) {
          console.error(`Error fetch data`)
          setLoading(false)
        }
      }
  
      fetchFakeUserApi()
    }, [])

  return (
    <>
        <ContactContext.Provider value={{ users, setUsers, loading }}>
            {children}
        </ContactContext.Provider>
    </>
  )
}

export default ContactContext