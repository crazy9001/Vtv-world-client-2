import {Component, OnInit, Input} from '@angular/core';
import {environment} from './../../../../../environments/environment.prod';

@Component({
    selector: 'app-media-detail-video',
    templateUrl: './media-detail-video.component.html',
    styleUrls: ['./media-detail-video.component.css']
})

export class MediaDetailVideoComponent implements OnInit {
    @Input() video;
    @Input() playVideo;
    environment: any;
    CMSPlayVideoWrapper: string;
    constructor() {
    }

    ngOnInit() {
        this.environment = environment;
    }
    eventPlayPreview() {
        this.playVideo = true;
        this.CMSPlayVideoWrapper = '<video width="320" height="240" controls>' +
            '<source src="' + this.video.path + '" type="video/mp4">' +
            '</video>';
        console.log(this.playVideo);
    }
}
