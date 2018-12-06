import {Component, OnInit} from '@angular/core';
import {PaginatedVideo} from '../../../model/video-paginate.model';
import {VideoService} from '../../../services/video.service';

@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

    videos: PaginatedVideo;
    constructor(
        private videoService: VideoService,
    ) {
    }

    ngOnInit() {
        this.videoService.getDraftVideo().then(videos => this.videos = videos);
    }

}
