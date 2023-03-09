import {STATUS} from "./Status.enum";

export class Contact {
    name = "";
    surname = "";
    phone = "";
    email = "";
    address = "";
    status = STATUS.UNBLOCKED;

    constructor(name,surname,phone,email,address,status){
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.status = status;
    }
}