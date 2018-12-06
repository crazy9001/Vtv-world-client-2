import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class VideoModel {
    id: number;
    title: string;
    slug: string;
    description: string;
    category_id: number;
    element_id: number;
    content_id: number;
    seo_id: number;
    source: string;
    status: number;
    highlight: number;
    thumbnails: string;
    created_at: string;
    element: any;
}
