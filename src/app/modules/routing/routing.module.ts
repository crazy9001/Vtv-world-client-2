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

const appRoutes: Routes = [
    {
        path: 'DefaultV1',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
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
                        component: DraftComponent
                    },
                    {
                        path: 'Create',
                        component: CreateVideoComponent
                    },
                    {
                        path: 'Details/:id',
                        component: DetailVideoComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
    ],
    declarations: []
})
export class RoutingModule {
}
