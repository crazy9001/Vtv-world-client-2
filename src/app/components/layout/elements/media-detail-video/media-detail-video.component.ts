declare var videojs: any;
import {Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import {environment} from './../../../../../environments/environment.prod';

@Component({
    selector: 'app-media-detail-video',
    templateUrl: './media-detail-video.component.html',
    styleUrls: ['./media-detail-video.component.css']
})

export class MediaDetailVideoComponent implements OnInit, OnChanges, OnDestroy {
    @Input() video;
    @Input() playVideo;
    environment: any;
    videoJSplayer: any;
    videoUrl: string;
    id: number;
    constructor() {
    }

    ngOnInit() {
        this.environment = environment;
    }
    ngOnChanges() {
        this.playVideo = false;
    }
    async eventPlayPreview() {
        this.playVideo = true;
        this.id = this.video.id;
        this.videoUrl = environment.storage_url + this.video.path;
        await this.loadPlayer();
    }
    loadPlayer() {
        const _this = this;
        setTimeout(function(){
            _this.videoJSplayer = videojs(document.getElementById('video_player_id_' + _this.id), {}, function() {
                this.play();
            });
        }, 1);
    }
    ngOnDestroy() {
        this.videoJSplayer.dispose();
    }
}
