import React, {useState,useEffect} from 'react';
import generateCNJ from '../../Services/AxiosServices';
import PropTypes from 'prop-types';


const Chuck = () => {

    const [joke, setJoke] = useState();
    const [likes,setLikes] = useState(0);
    const [dislikes,setDislikes] = useState(0);

    useEffect(() => {
        generateJoke();
    }, []);

    const generateJoke = () => {
        generateCNJ().then((response) => {
            if(response.status === 200){
                setJoke(response.data.value);
            }
        });
    }

    return (
        <div>
            {joke}
            <br />
            <button onClick={generateJoke}>Generate Another Joke</button>
            <button onClick={()=>{
                setLikes(likes+1);
                generateJoke();
            }}>I like it</button>
            <button onClick={()=>{
                setDislikes(dislikes+1);
                generateJoke();
            }}>I dislike it</button>
            <p>Likes: {likes} Dislikes: {dislikes} </p>
        </div>
    );
};


Chuck.propTypes = {

};


export default Chuck;
