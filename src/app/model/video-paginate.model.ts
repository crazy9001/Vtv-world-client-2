import {VideoModel} from './video.model';

export class PaginatedVideo {
    current_page: number;
    data: VideoModel[];
    from: number;
    last_page: number;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
}
