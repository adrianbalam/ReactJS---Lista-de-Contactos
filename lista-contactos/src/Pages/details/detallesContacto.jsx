import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation } from 'react-router-dom';


const DetallesContacto = () => {

    const {id} = useParams();
    const locat = useLocation();

    return (
        <div>
            <h1>Contacto {+" "+id} </h1>
            <h2> {locat.state.desc} </h2>
        </div>
    );
};


DetallesContacto.propTypes = {

};


export default DetallesContacto;
