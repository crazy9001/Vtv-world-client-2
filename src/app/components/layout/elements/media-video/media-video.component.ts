import {Component, OnInit} from '@angular/core';
import {PaginatedMedia} from '../../../../model/media-paginate.model';
import {MediaService} from '../../../../services/media.service';
import {environment} from './../../../../../environments/environment.prod';

@Component({
    selector: 'app-media-video',
    templateUrl: './media-video.component.html',
    styleUrls: ['./media-video.component.css'],
})
export class MediaVideoComponent implements OnInit {
    environment: any;
    mediaVideos: PaginatedMedia;
    loadDetail = false;
    selected: any;
    playVideo = false;
    constructor(
        private mediaVideoService: MediaService,
    ) {
    }

    ngOnInit() {
        this.environment = environment;
    }

    loadMediaVideo() {
        this.loadDetail = false;
        this.mediaVideoService.getMediaVideo().then(mediaVideos => this.mediaVideos = mediaVideos);
    }
    isActive(item) {
        return this.selected === item;
    }
    loadDetailVideoEvent(item) {
        this.loadDetail = true;
        this.playVideo = false;
        this.selected = item;
        console.log(this.playVideo);
    }
}
