import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllContacts, loginUser } from '../../Services/FetchService';

const Fetch = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getContacts();
    },[]);

    function getContacts(){
        getAllContacts().then((response)=>{
            setUsers(response.data);
        }).catch((error)=>{
            alert(error);
        }).finally(()=>{
            console.log("Proceso finalizado");
        })
    }

    const loginUsers = () => {
        loginUser().then((response)=>{
            console.log(response.token);
        }).catch((error)=>{
            alert(error);
        }).finally(()=>{
            console.log("Proceso finalizado");
        })
    }

    return (
        <div>
            <h1>Contacts from API</h1>
            {users.map((value,index)=>(<h3 key={index}> {value.first_name} {value.last_name} </h3>)
            )}
            <button onClick={loginUsers}>Login</button>
        </div>
    );
};


Fetch.propTypes = {

};


export default Fetch;
