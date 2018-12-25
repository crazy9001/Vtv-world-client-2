import {Component, OnInit,  Output, EventEmitter } from '@angular/core';
import {PaginatedMedia} from '../../../../model/media-paginate.model';
import {MediaService} from '../../../../services/media.service';
import {environment} from './../../../../../environments/environment.prod';
import { PusherService } from '../../../../services/pusher.service';
declare var jQuery: any;

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
    progressGenthumb = false;
    @Output() messageEvent = new EventEmitter<string>();
    constructor(
        private mediaVideoService: MediaService,
        private pusherService: PusherService
    ) {
        this.pusherService.channel.bind('App\\Events\\GenerateThumbPusherEvent', data => {
            console.log(data);
            if (data.success === true) {
                this.progressGenthumb = true;
            }
        });
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
    }
    CMSInsertVideo() {
        console.log(this.selected);
        this.messageEvent.emit(this.selected);
        this.loadDetail = false;
        jQuery('#__mediaUploadVideo').modal('hide');
    }





}
