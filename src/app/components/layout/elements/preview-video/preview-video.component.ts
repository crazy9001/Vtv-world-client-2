declare var videojs: any;
import {Component, OnInit, Input, ViewChildren, QueryList, ElementRef, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';

@Component({
    selector: 'app-preview-video',
    templateUrl: './preview-video.component.html',
    styleUrls: ['./preview-video.component.css']
})
export class PreviewVideoComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    @Input() videoUrl;
    @ViewChildren('videoTest') videoTest: QueryList<ElementRef>;
    environment: any;
    videoJSplayer: any;

    constructor() {
        this.environment = environment;
    }

    ngOnInit() {

    }
    ngOnChanges() {
        if (this.videoJSplayer) {
            this.test();
        }
    }

    ngAfterViewInit() {
        const element = document.getElementById('preview_video_content');
        this.videoJSplayer = videojs(element, {}, () => {
            (element as HTMLVideoElement).play();
        });
    }
    ngOnDestroy() {
        console.log(this.videoJSplayer);
        this.videoJSplayer.dispose();
    }
    test() {
        this.videoTest.changes
            .filter(data => data.first)
            .map(data => data.first)
            .subscribe(element => {
                console.log(element);
                this.videoJSplayer = videojs(element.nativeElement, {}, () => {
                    (element.nativeElement as HTMLVideoElement).play();
                });
            });
    }
}
