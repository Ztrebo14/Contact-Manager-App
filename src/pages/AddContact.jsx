import React, { useContext } from 'react'
import '../styles/pages/AddContact.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { v4 as uuidv4 } from 'uuid'
import ContactContext from '../context/ContactContext'

const AddContact = () => {
    const { users, setUsers } = useContext(ContactContext)

  return (
    <>
    <div className="add-contact-container">
       <h3>Add User Contact</h3>
            <div className="form-container">
                <Formik
                    initialValues={{
                        id: users.length + 1,
                        name: '',
                        username: '',
                        email: '',
                        phone: ''
                    }}
                    validationSchema={ Yup.object({
                        name: Yup.string().max(25, 'Must be 25 charcters or less')
                        .required('Required'),
                        username: Yup.string().max(15, 'Must be 12 charcters or less')
                        .required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                        phone: Yup.string().max(11, 'Must be 11 digits').required('Require')
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(
                            alert(JSON.stringify(values, null, 2)),
                            setUsers(([...users, values])),
                            setSubmitting(false)
                        , 4000)
                        resetForm()
                        
                    }}
                >
                <Form>
                    <label>Full name: </label>
                    <Field name='name' type='text' />
                    <ErrorMessage name='name'/>
                    <br />
                    <label>Username:</label>
                    <Field name='username' type='text' />
                    <ErrorMessage name='username'/>
                    <br />
                    <label>Email :</label>
                    <Field name='email' type='email' />
                    <ErrorMessage name='email'/>
                    <br />
                    <label>Phone Number: </label>
                    <Field name='phone' type='text' />
                    <ErrorMessage name='phone'/>
                    <br />
                    <button>Submit</button>
                </Form>
                </Formik>
            </div>
    </div>
    </>
  )
}

export default AddContact