import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import {environment} from './../../environments/environment.prod';
import { UserModel } from '../model/user.model';

@Injectable()
export class AuthService {
    constructor(
        private httpClient: HttpClient,
    ) {
    }

    check(): boolean {
        return localStorage.getItem('user') ? true : false;
    }

    login(credentials: { email: string, password: string }): Observable<boolean> {
        return this.httpClient.post<any>(`${environment.api_url}/auth/login`, credentials)
            .do(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', (JSON.stringify(data.user)));
            });
    }

    getUser(): UserModel {
        return localStorage.getItem('user') ? JSON.parse((localStorage.getItem('user'))) : null;
    }

    logout(): void {
        this.httpClient.get(`${environment.api_url}/auth/logout`);
        localStorage.clear();
    }
}
