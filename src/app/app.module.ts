import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LayoutModule} from './modules/layout/layout.module';
import {RoutingModule} from './modules/routing/routing.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './modules/auth/auth.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgProgressModule } from 'ngx-progressbar';
import {TokenInterceptor} from './guards/intercreptors/token.intercreptor';
import {RefreshTokenInterceptor} from './guards/intercreptors/refreshToken.intercreptor';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        LayoutModule,
        AppRoutingModule,
        RoutingModule,
        AuthModule,
        NgProgressModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
        },
        {
            provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
