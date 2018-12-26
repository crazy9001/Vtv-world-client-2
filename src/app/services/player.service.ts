import {Injectable} from '@angular/core';
import {environment} from './../../environments/environment.prod';
declare var videojs: any;

@Injectable()
export class PlayerService {
    player: any;
    constructor(
    ) {
    }
    private controls = {
        controls: true,
        height: 280,
        preload: true,
        controlBar: {
            volumePanel: {
                vertical: true,
                inline: false,
                volumeLevel: true
            }
        }
    };
    initPlayer (target?: string, url?: string) {
        this.player = videojs(target, this.controls);
        const sources = [{'src': `${environment.storage_url}${url}`}];
        this.player.src(sources);
        this.player.play();
    }
    dispose() {
        this.player.dispose();
    }
}


