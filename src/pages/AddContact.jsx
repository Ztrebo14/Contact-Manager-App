import React, { useContext } from 'react'
import '../styles/pages/AddContact.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
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
                        firstName: '',
                        lastName: '',
                        email: '',
                        phoneNum: ''
                    }}
                    validationSchema={ Yup.object({
                        firstName: Yup.string().max(15, 'Must be 15 charcters or less')
                        .required('Required'),
                        lastName: Yup.string().max(15, 'Must be 12 charcters or less')
                        .required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                        phoneNum: Yup.string().max(11, 'Must be 11 digits').required('Require')
                    })}
                    onSubmit={(values, setSubmitting) => {
                        setTimeout(
                            alert(JSON.stringify(values, null, 2)),
                            setUsers(([...users, values])),
                            setSubmitting(false)
                        , 4000)
                    }}
                >
                <Form>
                    <label>First name: </label>
                    <Field name='firstName' type='text' />
                    <ErrorMessage name='firstName'/>
                    <br />
                    <label>Last name:</label>
                    <Field name='lastName' type='text' />
                    <ErrorMessage name='lastName'/>
                    <br />
                    <label>Email :</label>
                    <Field name='email' type='email' />
                    <ErrorMessage name='email'/>
                    <br />
                    <label>Phone Number: </label>
                    <Field name='phoneNum' type='text' />
                    <ErrorMessage name='phoneNum'/>
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