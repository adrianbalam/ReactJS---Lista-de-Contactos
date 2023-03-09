import React, {useState,useEffect} from 'react';
import Contacts from '../Pure/contact';
import { Contact } from '../../Models/Contact.class';
import PropTypes from 'prop-types';
import { STATUS } from '../../Models/Status.enum';
import NewContactForm from '../Pure/newContactForm';


const ContactsList = () => {

    const contact1 = new Contact("Usuario","1","1234567890","usuario1@gmail.com","Calle 1",STATUS.UNBLOCKED);
    const contact2 = new Contact("Usuario","2","1234567890","usuario2@gmail.com","Calle 2",STATUS.UNBLOCKED);
    const contact3 = new Contact("Usuario","3","1234567890","usuario3@gmail.com","Calle 3",STATUS.UNBLOCKED);

    const [contactss, setContacts] = useState([contact1,contact2,contact3]);

    function deleteContact(contactItem){
        const contactIndex = contactss.indexOf(contactItem)
        const tempContacts = [...contactss];
        tempContacts.splice(contactIndex,1);
        setContacts(tempContacts);
    }

    function bloquearDesbContacto(contactItem){
        const contactIndex = contactss.indexOf(contactItem);
        const tempContacts = [...contactss];
        tempContacts[contactIndex].status=!tempContacts[contactIndex].status;
        setContacts(tempContacts);
    }

    function addContact(contactItem){
        const tempContacts = [...contactss];
        tempContacts.push(contactItem);
        setContacts(tempContacts);
    }

    const items = contactss.map((contact,index) =>
        <Contacts key={index} contactitem={contact} remove={deleteContact} block={bloquearDesbContacto}></Contacts>
    )

    return (
        <div>
            {items}
            <NewContactForm add={addContact}></NewContactForm>
        </div>
    );
};

export default ContactsList;
