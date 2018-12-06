import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {UserModel} from '../../../model/user.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user: UserModel;

    constructor(
        private authService: AuthService,
        private routerService: Router
    ) {

    }

    ngOnInit() {
        this.user = this.authService.getUser();
    }

    onLogout(event) {
        event.preventDefault();
        this.authService.logout();
        this.routerService.navigate(['Login']);
    }

}
