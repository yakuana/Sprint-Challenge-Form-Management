import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import GetUsers from './GetUsers.js';

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {

    // hook for keeping track of users 
    const [users, setUsers] = useState([]);
    
    // updates users if change has occured 
    useEffect(() => {
        if (status) {
            // change has occured, so update users array 
            setUsers(users => [...users, status])
        }
    }, [status]);
    
    return (
      <div className="form-container">
       
        <h1>Sign Up</h1>

        <Form className="form">
            
            {/* name */}
            <Field 
                type="name" 
                name="name" 
                placeholder="Name"
                className="field" 
                component={TextField}
            />
            {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}

            {/* password */}
            <Field 
                type="text" 
                name="password" 
                placeholder="Password" 
                className="field" 
                component={TextField}
            />
            {touched.password && errors.password && <p className="error">{errors.password}</p>}

            <button type="submit" className="button">Submit</button>
        </Form>

        <GetUsers />

      </div>
    );
};

// using formik 
const FormikUserForm = withFormik({
    
    // making sure each prop has a default value if given value is undefined 
    mapPropsToValues({ name, password }) {
      return {
        name: name || "",
        password: password || "",
      };
    },
    
    // use yup to enforce input requirements 
    validationSchema: Yup.object().shape({
        name: Yup
        .string()
        .required("Please enter your name"),
        password: Yup
        .string()
        .min(8)
        .required("Password must be atleast 8 characters"),
    }),
    
    // update values and set status 
    handleSubmit(values, { setStatus, resetForm }) {
        axios
            // free api that simulates a post request for any data 
            .post('http://localhost:5000/api/register', values)

            .then(response => {
                // successful 
                console.log("post api response object", response)
                resetForm(); 
                console.log("current user", values);
            })

            .catch(error => {
                // unsuccessful 
                console.log("The api is currently down.", error.response);
                resetForm();
            });
    }

})(UserForm); // currying functions
  
export default FormikUserForm;
  
