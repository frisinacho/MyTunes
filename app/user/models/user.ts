import {IUser} from './iuser';

export class User implements IUser {

    userName:string;
    email:string;
    password:string;
    country:string;
    birthday:Date;

    /*
     constructor(public userName : string, public email : string, public password : string, public country? : string, public birthday? :Date) {
     }
     */
    constructor(authData:any) {
        this.email = authData.password.email;
    }

}
