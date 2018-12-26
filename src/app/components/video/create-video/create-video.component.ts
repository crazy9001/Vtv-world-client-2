import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Select2OptionData} from 'ng2-select2';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {NgProgress} from 'ngx-progressbar';
import {Subscription} from 'rxjs/Subscription';
import {VideoService} from '../../../services/video.service';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment.prod';
import {CategoryService} from '../../../services/category.service';

@Component({
    selector: 'app-create-video',
    templateUrl: './create-video.component.html',
    styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit, OnChanges {
    f: FormGroup;
    subScription: Subscription;
    environment: any;
    public CategoryData: Array<Select2OptionData>;
    public currentValue: any;
    public category: any;
    receiveVideoInsert: any;
    insertVideo = false;
    videoInsertUrl: string;
    idVideoInsert: number;
    contentVideo: string;
    thumbsVideo: any;
    listCategoryByUser: any;
    constructor(
        private formBuilder: FormBuilder,
        private videoService: VideoService,
        private categoryService: CategoryService,
        private routerService: Router,
        public progressService: NgProgress
    ) {
        this.environment = environment;
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes['videoInsertUrl'].currentValue);
    }

    ngOnInit() {
        this.f = this.formBuilder.group({
            title: [null, [Validators.required]],
            description: [null, [Validators.required]],
            publish_at: [null, null],
            sub_category: [null, null],
            thumbnails : [null, [Validators.required]],
            tags: [null, null],
            source: [null, null],
            content: [null, [Validators.required]],
            seo_title: '',
            seo_keywords: '',
            seo_description: ''
        });
        this.listCategoryByUser = this.categoryService.getVideoCategoryByUser();
        console.log( this.listCategoryByUser);
        this.CategoryData = this.listCategoryByUser;
        this.currentValue = null;
    }
    valueChanged($evt) {
        this.category = $evt.value;
    }

    onSubmit() {
        this.f.value.category_id = this.category;
        this.progressService.start();
        this.subScription = this.videoService.create(this.f.value).subscribe(res => {
            this.progressService.done();
            this.f.reset();
            this.routerService.navigate(['DefaultV1/Video/Draft']);
        }, (errorRes: HttpErrorResponse) => {
            if (errorRes.status === 401) {
                this.progressService.done();
            }
        });
    }
    eventReceiveVideoInsert($event) {
        this.receiveVideoInsert = $event;
        this.insertVideo = true;
        this.contentVideo = this.receiveVideoInsert.path;
        this.videoInsertUrl = this.receiveVideoInsert.path;
        this.idVideoInsert = this.receiveVideoInsert.id;
        this.thumbsVideo = Object.keys(this.receiveVideoInsert.thumbnails).map(key => ({type: key, value: this.receiveVideoInsert.thumbnails[key]}));
    }

}
