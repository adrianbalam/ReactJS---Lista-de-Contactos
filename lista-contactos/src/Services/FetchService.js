export const getAllContacts = async () => {
    let queryResponse = await fetch("https://reqres.in/api/users");
    return queryResponse.json();
}

export const loginUser = async () => {
    let bodyLogin = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    }

    let config = {
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(bodyLogin)
    }

    let queryResponse = await fetch("https://reqres.in/api/login",config)

    return queryResponse.json();
}