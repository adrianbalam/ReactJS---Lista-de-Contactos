import { ROLES } from "./Roles.enum";

export class User {
    name="";
    surname="";
    username="";
    email="";
    password="";
    role=ROLES.USER;

    constructor(name,surname,username,email,password,role){
        this.name=name;
        this.surname=surname;
        this.username=username;
        this.email=email;
        this.password=password;
        this.role=role;
    }
}