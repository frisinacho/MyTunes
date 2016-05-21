import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService} from './services/user.srv';

@Component({
    selector : 'login-component',
    template : `
        <form #loginForm="ngForm">
            <div class="alert alert-danger" role="alert" *ngIf="error">{{ error }}</div>
            <div class="form-group">
                <label for="login">Login</label>
                <input type="text" placeholder="Login" class="form-control" required ngControl="userName" #userName="ngForm"/>
                <div [hidden]="userName.valid || userName.pristine" class="alert alert-danger">Login required</div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" class="form-control" required ngControl="password" #password="ngForm"/>
                <div [hidden]="password.valid || password.pristine" class="alert alert-danger">Password required</div>
            </div>
            <button type="submit" class="btn btn-default" (click)="login(userName.value, password.value)" [disabled]="!loginForm.form.valid">Login</button>
        </form>
    `,
    providers : [UserService]
})
export class LoginComponent {

    public error : string;

    constructor(private userService:UserService, private router:Router) {

    }

    public login(userName, password) {
        this.userService.login(userName, password)
            .subscribe(result => {
                this.router.navigateByUrl("/");
            }, error => {
                this.error = error;
            });

    }
}
