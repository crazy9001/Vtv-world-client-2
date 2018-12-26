import {Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {VideoService} from '../../../services/video.service';
import {NgProgress} from 'ngx-progressbar';
import {VideoModel} from '../../../model/video.model';
import {environment} from '../../../../environments/environment.prod';
import {PlayerService} from '../../../services/player.service';

@Component({
    selector: 'app-detail-video',
    templateUrl: './detail-video.component.html',
    styleUrls: ['./detail-video.component.css']
})
export class DetailVideoComponent implements OnInit, OnDestroy {

    @ViewChildren('previewDetail') previewDetail: QueryList<ElementRef>;
    video = {
        title: '',
        description: '',
        publish_at: '',
        category: '',
        sub_category: '',
        tags: '',
        source: '',
        highlight: '',
        seo_title: '',
        seo_keywords: '',
        seo_description: '',
        content: ''
    };

    f: FormGroup;
    environment: any;
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private videoService: VideoService,
        public progressService: NgProgress,
        public playerService: PlayerService
    ) {
        this.environment = environment;
    }

    ngOnInit() {
        const __this = this;
        this.f = this.formBuilder.group({
            title: [null, Validators.required],
            description: [null, [Validators.required]],
            publish_at: [null, null],
            sub_category: [null, null],
            thumbnails : [[Validators.required]],
            tags: [null, null],
            source: [null, null],
            content: [[Validators.required]],
            highlight: [null, null],
            seo_title: '',
            seo_keywords: '',
            seo_description: ''
        });
        this.progressService.start();
        this.videoService.getDetailVideoById(this.route.snapshot.paramMap.get('id')).then(video => {
            __this.video.title = video.title;
            __this.video.description = video.description;
            __this.video.publish_at = video.element.publish_at;
            __this.video.category = video.category;
            __this.video.sub_category = '';
            __this.video.tags = '';
            __this.video.source = video.source;
            __this.video.highlight = video.highlight;
            __this.video.seo_title = video.seo.seo_title;
            __this.video.seo_description = video.seo.seo_description;
            __this.video.seo_keywords = video.seo.seo_keywords;
            __this.video.content = video.content.content;
        });
        this.progressService.done();
    }
    ngOnDestroy() {
        this.playerService.dispose();
    }

    eventReceiveVideoInsert($event) {
        this.video.content = $event.path;
    }
}
