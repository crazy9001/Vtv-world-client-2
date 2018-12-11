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
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import {environment} from './../../../environments/environment.prod';

const token = localStorage.getItem('token');
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    url: `${environment.api_url}/media/upload`,
    chunking: true,
    method: 'POST',
    maxFilesize: 2048,
    chunkSize: 2000000,
    acceptedFiles: 'image/*,.mp4',
    dictDefaultMessage : '<img src="assets/images/graphic-upload-area.svg" class="upload-aria"><div class="uploader-active-text">Drag and drop files here</div>',
    headers: {'Authorization': `Bearer ${token}`},
};

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        Select2Module,
        DropzoneModule.forRoot(DEFAULT_DROPZONE_CONFIG)
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
        VideoService,
    ]
})
export class LayoutModule {
}
