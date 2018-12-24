declare var videojs: any;
import {Component, OnInit, Input, OnChanges, OnDestroy, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {environment} from './../../../../../environments/environment.prod';

import 'rxjs/operators/filter';
import 'rxjs/operators/map';

@Component({
    selector: 'app-media-detail-video',
    templateUrl: './media-detail-video.component.html',
    styleUrls: ['./media-detail-video.component.css']
})

export class MediaDetailVideoComponent implements OnInit, OnChanges, OnDestroy {
    @Input() video;
    @Input() playVideo;

    @ViewChildren('videoTest') videoTest: QueryList<ElementRef>;

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
    eventPlayPreview() {
        const __this = this;
        this.playVideo = true;
        this.id = this.video.id;
        this.videoUrl = environment.storage_url + this.video.path;

        this.videoTest.changes
            .filter(data => data.first)
            .map(data => data.first)
            .subscribe(element => {
                __this.videoJSplayer = videojs(element.nativeElement, {}, () => {
                    (element.nativeElement as HTMLVideoElement).play();
                });
        });
    }

    ngOnDestroy() {
        if ( this.videoJSplayer) {
            this.videoJSplayer.dispose();
        }
    }
}
