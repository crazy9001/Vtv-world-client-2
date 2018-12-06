import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/DefaultV1',
        pathMatch: 'full',
    },
    {
        path: 'Login',
        component: LoginComponent
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: []
})
export class AppRoutingModule {
}
