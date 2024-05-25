import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditContact = () => {
    const { userId } = useParams()
    const navigate = useNavigate()
  return (
    <>
        <div className="edit-contact-container">
            <button onClick={() => navigate(-1)} >Back</button>
            <h3>Edit Contact</h3>
            <p>{userId}</p>

        </div>
    </>
  )
}

export default EditContact