import {Component, OnInit} from '@angular/core';
import 'dropzone/dist/min/dropzone.min.css';
import {PaginatedMedia} from '../../../../model/media-paginate.model';
import {MediaService} from '../../../../services/media.service';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

    mediaVideos: PaginatedMedia;

    constructor(
        private mediaVideoService: MediaService,
    ) {
    }

    ngOnInit() {
    }

    loadMediaVideo() {
        this.mediaVideoService.getMediaVideo().then(mediaVideos => this.mediaVideos = mediaVideos);
    }

}
