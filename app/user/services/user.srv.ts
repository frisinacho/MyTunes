import {Observable} from 'rxjs/Observable';
import {IUser} from '../models/iuser';
import {User} from '../models/user';

export class UserService {

    firebaseUrl:string = "https://mytunes-ils.firebaseio.com/";
    firebaseRef:Firebase;

    constructor() {
        this.firebaseRef = new Firebase(this.firebaseUrl);
    }

    getUser () : Observable {
        return new Observable(observable => {
            this.firebaseRef.onAuth(authData => {
                let authData = this.firebaseRef.getAuth();
                let user;
                if (authData) {
                    user = new User(authData);
                }

                observable.next(user);
            });
        });
    }

    login(userName:string, password:string) : Observable {
        return new Observable(observable => {
            this.firebaseRef.authWithPassword({
                email    : userName,
                password : password
            }, (error, authData) => {
                if (error) {
                    observable.error(error);
                } else {
                    observable.next(new User(authData));
                }
            });
        });
    }

    register(userName:string, email:string, password:string, country?:string, birthday?:Date) : Observable {
        return new Observable(observable => {
            this.firebaseRef.createUser({
                userName : userName,
                email    : email,
                password : password
            }, (error, userData) => {
                if (error) {
                    observable.error(error);
                } else {
                    observable.next(userData);
                }
            });
        });
    }

    logout() {
        return new Observable(observable => {
            this.firebaseRef.unauth();
            observable.next();

        });
    }
}
