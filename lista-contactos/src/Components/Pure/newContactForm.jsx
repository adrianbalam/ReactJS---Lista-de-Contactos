import React, { useRef } from 'react';
import { Contact } from '../../Models/Contact.class';
import { STATUS } from '../../Models/Status.enum';

const NewContactForm = ({add}) => {

    const nameRef = useRef();
    const surnameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    function createContact(e){
        e.preventDefault();
        const newContact = new Contact(nameRef.current.value,surnameRef.current.value,phoneRef.current.value,emailRef.current.value,STATUS.UNBLOCKED);
        add(newContact);
    }

    return (
        <form onSubmit={createContact}>
            <input ref={nameRef} type="text" name="name" id="name" required/>
            <input ref={surnameRef} type="text" name="surname" id="surname" required/>
            <input ref={phoneRef} type="text" name="phone" id="phone" required/>
            <input ref={emailRef} type="text" name="email" id="email" required/>
            <button type="submit">Agregar</button>
        </form>
    );
}

export default NewContactForm;
