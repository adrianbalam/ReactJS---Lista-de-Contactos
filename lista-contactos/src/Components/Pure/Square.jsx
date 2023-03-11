import React,{useState,useEffect} from 'react';

const Square = () => {

    const [bgColor, setBgColor] = useState(`rgb(${0},${0},${0})`);
    const [cambiarColor,setCambiarColor] = useState(false);
    let intervalID;

    const dimensStyle = {
        width: "255px",
        height: "255px",
        backgroundColor: bgColor
    }

    useEffect(() => {
        if (cambiarColor) {
            intervalID = setInterval(()=>{
                const red = Math.random() * (255 - 0) + 0;
                const green = Math.random() * (255 - 0) + 0;
                const blue = Math.random() * (255 - 0) + 0;
                setBgColor(`rgb(${red},${green},${blue})`);
            },1000);
        }else{
            clearInterval(intervalID);
            setBgColor(`rgb(${0},${0},${0})`);
        }
    });

    function iniciarCambioColor(){
        setCambiarColor(true);
    }

    function detenerCambioColor(){
        setCambiarColor(false);
    }

    return (
        <div>
            <div onMouseEnter={iniciarCambioColor} onMouseLeave={detenerCambioColor} onDoubleClick={detenerCambioColor} style={dimensStyle}></div>
        </div>
    );
};

export default Square;
