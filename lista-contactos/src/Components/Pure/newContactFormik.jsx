import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { STATUS } from '../../Models/Status.enum';
import { Contact } from '../../Models/Contact.class';

const NewContactFormik = ({add}) => {

    /*
    * EJEMPLO DE USO DE YUP PARA VALIDAR LOS CAMPOS DEL FORMULARIO
      Y EL USO DE FORMIK PARA CREAR DICHO FORMULARIO
    */

    const initialValues = {
        name:"",
        surname:"",
        phone:"",
        email:"",
        address:"",
        status:STATUS.UNBLOCKED
    }

    const schema = Yup.object().shape({
        name: Yup.string().required("Name's required"),
        surname: Yup.string().required("Surname's required"),
        phone: Yup.string().required("Phone's required"),
        email: Yup.string().email("Email format required").required("Email's required"),
        address: Yup.string().required("Address's required"),
    })

    return (
        <div>
            <h1>Añadir Contacto</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    const newContact = new Contact(values.name,values.surname,values.phone,values.email,values.address,STATUS.UNBLOCKED);
                    add(newContact);
                }}
            >

                {({values,touched,errors,handleChange,handleBlur})=>(
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" type="text" name="name" placeholder="Name"/>
                        {
                            touched.name && errors.name &&
                            <ErrorMessage name="name" component="div"></ErrorMessage>
                        }
                        <label htmlFor="surname">Surname</label>
                        <Field id="surname" type="text" name="surname" placeholder="Surname"/>
                        {
                            touched.surname && errors.surname &&
                            <ErrorMessage name="surname" component="div"></ErrorMessage>
                        }
                        <label htmlFor="phone">Phone</label>
                        <Field id="phone" type="text" name="phone" placeholder="Phone"/>
                        {
                            touched.phone && errors.phone &&
                            <ErrorMessage name="phone" component="div"></ErrorMessage>
                        }
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="text" name="email" placeholder="Email"/>
                        {
                            touched.email && errors.email &&
                            <ErrorMessage name="email" component="div"></ErrorMessage>
                        }
                        <label htmlFor="address">Address</label>
                        <Field id="address" type="text" name="address" placeholder="Address"/>
                        {
                            touched.address && errors.address &&
                            <ErrorMessage name="address" component="div"></ErrorMessage>
                        }
                        <button type='submit'>Enviar</button>
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default NewContactFormik;
