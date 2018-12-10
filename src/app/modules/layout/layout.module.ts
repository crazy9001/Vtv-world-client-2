import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LayoutComponent} from '../../components/layout/layout.component';
import {HeaderComponent} from '../../components/layout/header/header.component';
import {NavbarComponent} from '../../components/layout/navbar/navbar.component';
import {FooterComponent} from '../../components/layout/footer/footer.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {LoginComponent} from '../../components/login/login.component';
import {VideoComponent} from '../../components/video/video.component';
import {DraftComponent} from '../../components/video/draft/draft.component';
import {VideoService} from '../../services/video.service';
import {CreateVideoComponent} from '../../components/video/create-video/create-video.component';
import { MediumEditorDirective } from 'angular-medium-editor/medium-editor.directive';
import { Select2Module } from 'ng2-select2';
import {SeoInfomationComponent} from '../../components/layout/elements/seo-infomation/seo-infomation.component';
import {VideoContentComponent} from '../../components/layout/elements/video-content/video-content.component';
import {DetailVideoComponent} from '../../components/video/detail-video/detail-video.component';
import {MediaComponent} from '../../components/layout/elements/media/media.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        Select2Module
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        DashboardComponent,
        LoginComponent,
        VideoComponent,
        DraftComponent,
        CreateVideoComponent,
        MediumEditorDirective,
        SeoInfomationComponent,
        VideoContentComponent,
        DetailVideoComponent,
        MediaComponent
    ],
    providers: [
        VideoService
    ]
})
export class LayoutModule {
}
