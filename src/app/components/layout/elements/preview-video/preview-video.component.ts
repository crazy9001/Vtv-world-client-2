import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';

declare var videojs: any;

@Component({
    selector: 'app-preview-video',
    templateUrl: './preview-video.component.html',
    styleUrls: ['./preview-video.component.css']
})
export class PreviewVideoComponent implements OnInit, OnChanges {
    private _videoUrl = '';
    @Input() set videoUrl(value: string) {
        this._videoUrl = value;
    }

    get videoUrl() {
        return this._videoUrl;
    }

    constructor() {
    }

    ngOnInit() {
        if (this.videoUrl && this.videoUrl !== '') {
            this.loadVideo(this.videoUrl);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes['videoUrl'].isFirstChange()) {
            const url = changes['videoUrl'].currentValue;
            this.loadVideo(url);
        }
    }

    private loadVideo(url?: string) {
        const player = videojs('preview_video_content', {
            controls: true,
            sources: [{src: '', type: 'video/mp4'}],
        });
        const sources = [{'src': `${environment.storage_url}${url}`}];
        player.pause();
        player.src(sources);
        player.load();
        player.play();
    }
}
