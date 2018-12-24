import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/DefaultV1',
                pathMatch: 'full',
            },
            {
                path: 'Login',
                component: LoginComponent
            },
        ]),
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
