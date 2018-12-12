import {Component, OnInit} from '@angular/core';
import {PaginatedMedia} from '../../../../model/media-paginate.model';
import {MediaService} from '../../../../services/media.service';

@Component({
    selector: 'app-media-image',
    templateUrl: './media-image.component.html',
    styleUrls: ['./media-image.component.css']
})
export class MediaImageComponent implements OnInit {

    mediaImages: PaginatedMedia;

    constructor(
        private mediaVideoService: MediaService,
    ) {
    }

    ngOnInit() {
    }

    loadMediaImage() {
        this.mediaVideoService.getMediaImage().then(mediaImages => this.mediaImages = mediaImages);
    }
}
