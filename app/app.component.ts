import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {LoginComponent} from './user/login.component';
import {RegistrationComponent} from './user/registration.component';
import {HeaderComponent} from './common/header.component';
import {AlbumsComponent} from './music/albums.component';
import {AlbumComponent} from './music/album.component';
import {WelcomeComponent} from './common/welcome.component';
import {FooterComponent} from './common/footer.component';

@Component({
    selector : 'my-app',
    template : ``,
    directives : [RouterOutlet, RouteConfig, LoginComponent, RegistrationComponent, AlbumComponent, AlbumsComponent, HeaderComponent, WelcomeComponent, FooterComponent]
})
export class AppComponent {

    constructor() {}
}