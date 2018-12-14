import {Component, OnInit} from '@angular/core';
import {PaginatedVideo} from '../../../model/video-paginate.model';
import {VideoService} from '../../../services/video.service';
import {environment} from '../../../../environments/environment.prod';

@Component({
    selector: 'app-draft',
    templateUrl: './draft.component.html',
    styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
    environment: any;
    videos: PaginatedVideo;
    constructor(
        private videoService: VideoService,
    ) {
        this.environment = environment;
    }

    ngOnInit() {
        this.videoService.getDraftVideo().then(videos => this.videos = videos);
    }

}
