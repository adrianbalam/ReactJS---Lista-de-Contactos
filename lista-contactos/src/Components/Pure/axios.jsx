import React, {useState,useEffect} from 'react';
import getAllUsers from '../../Services/AxiosServices';
import PropTypes from 'prop-types';


const Axios = () => {

    const [token, setToken] = useState();

    useEffect(() => {
        getAllUsers().then((response)=>{
            console.log(response.data.token);
            setToken(response.data.token);
        }).catch((error)=>{
            alert(error);
        })
    }, []);

    return (
        <div>
            {token}
        </div>
    );
};


Axios.propTypes = {

};


export default Axios;
