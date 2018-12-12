import {MediaModel} from './media.model';

export class PaginatedMedia {
    current_page: number;
    data: MediaModel[];
    from: number;
    last_page: number;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
    files: object;
}
