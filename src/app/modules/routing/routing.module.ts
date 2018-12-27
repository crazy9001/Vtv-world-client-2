import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from '../../components/layout/layout.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {AuthGuard} from '../../guards/auth.guard';
import {VideoComponent} from '../../components/video/video.component';
import {DraftComponent} from '../../components/video/draft/draft.component';
import {CreateVideoComponent} from '../../components/video/create-video/create-video.component';
import {DetailVideoComponent} from '../../components/video/detail-video/detail-video.component';
import {WaitingEditorComponent} from '../../components/video/waiting-editor/waiting-editor.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'DefaultV1',
                component: LayoutComponent,
                canActivate: [AuthGuard],
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: '',
                        component: DashboardComponent
                    },
                    {
                        path: 'Video',
                        component: VideoComponent,
                        children: [
                            {
                                path: 'Draft',
                                component: DraftComponent,
                            },
                            {
                                path: 'WaitingEditor',
                                component: WaitingEditorComponent,
                            },
                            {
                                path: 'Create',
                                component: CreateVideoComponent
                            },
                            {
                                path: 'Detail/:id',
                                component: DetailVideoComponent
                            }
                        ]
                    }
                ]
            }
        ]),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class RoutingModule {
}
