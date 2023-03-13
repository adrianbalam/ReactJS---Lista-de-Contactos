import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const rutaActual = useLocation();
    const history = useNavigate();

    console.log(rutaActual.pathname);

    return (
        <div>
            <h1>ABOUT Y FAQS</h1>
            <div>
                <button onClick={()=>history(-1)}>Go Back</button>
                <button onClick={()=>history("/")}>Go to Home</button>
                <button onClick={()=>history(+1)}>Go Forward</button>
            </div>
        </div>
    );
}

export default AboutPage;
