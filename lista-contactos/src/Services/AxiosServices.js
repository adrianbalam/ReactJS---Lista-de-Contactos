import APIRequest from  '../Utils/Config/axios.config';
import APIRequestC from '../Utils/chuck.config';

 function getAllUsers(){
    let bodyLogin = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }

    return APIRequest.post("/login",bodyLogin);

}

export default function generateCNJ(){
    return APIRequestC.get('/jokes/random');
}