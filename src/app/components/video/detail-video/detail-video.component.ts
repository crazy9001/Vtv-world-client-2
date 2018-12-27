import {Component, OnInit, OnDestroy, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {VideoService} from '../../../services/video.service';
import {NgProgress} from 'ngx-progressbar';
import {VideoModel} from '../../../model/video.model';
import {environment} from '../../../../environments/environment.prod';
import {PlayerService} from '../../../services/player.service';
import {CategoryService} from '../../../services/category.service';
import {Select2OptionData} from 'ng2-select2';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-detail-video',
    templateUrl: './detail-video.component.html',
    styleUrls: ['./detail-video.component.css']
})
export class DetailVideoComponent implements OnInit, OnDestroy {

    @ViewChildren('previewDetail') previewDetail: QueryList<ElementRef>;
    video = {
        id: '',
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
        content: '',
        thumbnails: '',
        status: ''
    };

    f: FormGroup;
    environment: any;
    public CategoryData: Array<Select2OptionData>;
    currentValue: any;
    category: any;
    thumbsVideo: any;
    role: string;
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private videoService: VideoService,
        public progressService: NgProgress,
        public playerService: PlayerService,
        public categoryService: CategoryService,
        public authService: AuthService,
        private routerService: Router,
    ) {
        this.environment = environment;
    }

    ngOnInit() {
        const __this = this;
        this.f = this.formBuilder.group({
            id: '',
            title: [null, Validators.required],
            description: [null, [Validators.required]],
            publish_at: [null, null],
            sub_category: [null, null],
            tags: [null, null],
            source: [null, null],
            content: [[Validators.required]],
            highlight: [null, null],
            seo_title: '',
            seo_keywords: '',
            seo_description: '',
        });
        this.categoryService.getVideoCategoryByUser().then(category => {
            this.CategoryData = category;
        });
        this.role = this.authService.getRoleUser();
        this.progressService.start();
        this.videoService.getDetailVideoById(this.route.snapshot.paramMap.get('id')).then(video => {
            __this.video.id = video.id;
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
            __this.video.thumbnails = video.thumbnails;
            __this.video.status = video.status;
        });
        this.progressService.done();
    }
    ngOnDestroy() {
        this.playerService.dispose();
    }

    eventReceiveVideoInsert($event) {
        this.video.content = $event.path;
        this.thumbsVideo = Object.keys($event.thumbnails).map(key => ({type: key, value: $event.thumbnails[key]}));
    }

    valueChanged($evt) {
        this.category = $evt.value;
    }
    onSubmitSaveVideo() {
        this.f.value.category_id = this.category;
        this.videoService.update(this.f.value).subscribe(res => {
            this.f.reset();
            this.routerService.navigate(['DefaultV1/Video/Draft']);
        }, (errorRes: HttpErrorResponse) => {
            if (errorRes.status === 401) {
                this.progressService.done();
            }
        });
    }

    onSubmitVideoToEditor() {
        const video = {
            id: this.f.value.id
        };
        this.videoService.changeVideoToEditor(video).then( res => {
            this.routerService.navigate(['DefaultV1/Video/Draft']);
        }, (errorRes: HttpErrorResponse) => {
            if (errorRes.status === 401) {
                this.progressService.done();
            }
        });
    }
}
