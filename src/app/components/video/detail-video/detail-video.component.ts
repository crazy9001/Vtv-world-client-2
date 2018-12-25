import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {VideoService} from '../../../services/video.service';
import {NgProgress} from 'ngx-progressbar';
import {VideoModel} from '../../../model/video.model';
import {environment} from '../../../../environments/environment.prod';
@Component({
    selector: 'app-detail-video',
    templateUrl: './detail-video.component.html',
    styleUrls: ['./detail-video.component.css']
})
export class DetailVideoComponent implements OnInit {

    video: VideoModel;
    f: FormGroup;
    environment: any;
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private videoService: VideoService,
        public progressService: NgProgress
    ) {
        this.environment = environment;
    }

    ngOnInit() {
        this.f = this.formBuilder.group({
            title: [Validators.required],
            description: [[Validators.required]],
            publish_at: [null, null],
            sub_category: [null, null],
            thumbnails : [[Validators.required]],
            tags: [null, null],
            source: [null, null],
            content: [[Validators.required]],
            seo_title: '',
            seo_keywords: '',
            seo_description: ''
        });
        this.videoService.getDetailVideoById(this.route.snapshot.paramMap.get('id')).then(video => {
            console.log(video.content.content);
            this.video = video;
        });
    }

}
