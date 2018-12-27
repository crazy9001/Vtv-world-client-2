import {Component, OnInit} from '@angular/core';
import {PaginatedVideo} from '../../../model/video-paginate.model';
import {VideoService} from '../../../services/video.service';
import {environment} from '../../../../environments/environment.prod';

@Component({
    selector: 'app-waiting-editor',
    templateUrl: './waiting-editor.component.html',
    styleUrls: ['./waiting-editor.component.css']
})
export class WaitingEditorComponent implements OnInit {

    environment: any;
    videos: PaginatedVideo;
    constructor(
        private videoService: VideoService,
    ) {
        this.environment = environment;
    }

    ngOnInit() {
        this.videoService.getWaitingEditorVideo().then(videos => this.videos = videos);
    }

}
