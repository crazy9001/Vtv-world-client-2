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
    seo: object;
    source: string;
    status: number;
    highlight: number;
    thumbnails: string;
    created_at: string;
    element: object;
    category: object;
    content: object;
}
