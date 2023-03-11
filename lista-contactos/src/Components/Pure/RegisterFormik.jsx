import React from 'react';
import { User } from '../../Models/User.class';
import { ROLES } from '../../Models/Roles.enum';
import {Formik,Field,Form,ErrorMessage} from 'formik';
import * as Yup from 'yup';

const RegisterFormik = () => {

    const initialValues = {
        name: "",
        surname: "",
        username: "",
        email:"",
        password:"",
        confirm: "",
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape({
        name: Yup.string().min(2,"Name's too short").required("Name's mandatory"),
        surname: Yup.string().min(2,"Surname's too short").required("Surname's mandatory"),
        username: Yup.string().min(6,"Username's too short").max(12,"Username's too long").required("Username's mandatory"),
        email: Yup.string().email("Email must be an Email").required("Email's mandatory"),
        password: Yup.string().min(8,"Password's too short").required("Password's mandatory"),
        /*confirm: Yup.string().when("password", {
            is: value => (value && value.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref("password")],"Password must match")
        })*/
    })

    return (
        <div>
            <h4>Formulario Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({values,touched,errors,isSubmitting,handleChange,handleBlur})=>(
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" type="text" name="name" placeholder="Name"/>

                        {/**name Errors*/}
                        {
                            touched.name && errors.name &&
                            <ErrorMessage name="name" component="div"></ErrorMessage>
                        }

                        <label htmlFor="surname">Surname</label>
                        <Field id="surname" type="text" name="surname" placeholder="Surname"/>
                        
                        {/**surname Errors*/}
                        {
                            touched.surname && errors.surname &&
                            <ErrorMessage name="surname" component="div"></ErrorMessage>
                        }

                        <label htmlFor="username">Username</label>
                        <Field id="username" type="text" name="username" placeholder="Username"/>

                        {/**username Errors*/}
                        {
                            touched.username && errors.username &&
                            <ErrorMessage name="username" component="div"></ErrorMessage>
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com"/>

                        {/**email Errors*/}
                        {
                            touched.email && errors.email &&
                            <ErrorMessage name="email" component="div"></ErrorMessage>
                        }

                        <label htmlFor="password">Password</label>
                        <Field id="password" type="password" name="password" placeholder="Password"/>
                        
                        {/**password Errors*/}
                        {
                            touched.password && errors.password &&
                            <ErrorMessage name="password" component="div"></ErrorMessage>
                        }

                        <label htmlFor="confirm">Confirm Password</label>
                        <Field id="confirm" type="password" name="confirm" placeholder="Confirm Password"/>

                        {/**confirm Errors*/}
                        {
                            touched.confirm && errors.confirm &&
                            <ErrorMessage name="confirm" component="div"></ErrorMessage>
                        }

                        <button type='submit'>Registrar</button>
                        {isSubmitting?( <p>Registrando datos</p>):null}

                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;
