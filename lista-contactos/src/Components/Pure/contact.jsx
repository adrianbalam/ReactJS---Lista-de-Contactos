import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../Models/Contact.class';
import { getAllContacts } from '../../Services/FetchService';


const Contacts = ({contactitem, remove, block}) => {

    return (
        <div>
            <div>
                <h1>{contactitem.name+" "+contactitem.surname}</h1>
                <h3>{contactitem.phone}</h3>
                <h3>{contactitem.email}</h3>
                <h3>{contactitem.address}</h3>
                <h3>{contactitem.status?"Bloqueado":"Disponible"}</h3>
                <button onClick={()=>block(contactitem)}>Bloquear</button>
                <button onClick={()=>remove(contactitem)}>Eliminar</button>
            </div>
        </div>
    );
};


Contacts.propTypes = {
    contactitem: PropTypes.instanceOf(Contact).isRequired,
};


export default Contacts;
