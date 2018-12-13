import {Component, OnInit} from '@angular/core';
import {Select2OptionData} from 'ng2-select2';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {NgProgress} from 'ngx-progressbar';
import {Subscription} from 'rxjs/Subscription';
import {VideoService} from '../../../services/video.service';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment.prod';

@Component({
    selector: 'app-create-video',
    templateUrl: './create-video.component.html',
    styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit {
    f: FormGroup;
    subScription: Subscription;

    public CategoryData: Array<Select2OptionData>;
    public currentValue: any;
    public category: any;
    receiveVideoInsert: any;
    CMSPreviewVideo: string;
    insertVideo = false;
    contentVideo: string;
    constructor(
        private formBuilder: FormBuilder,
        private videoService: VideoService,
        private routerService: Router,
        public progressService: NgProgress
    ) {

    }

    ngOnInit() {
        this.f = this.formBuilder.group({
            title: [null, [Validators.required]],
            description: [null, [Validators.required]],
            publish_at: [null, null],
            sub_category: [null, null],
            tags: [null, null],
            source: [null, null],
            content: [null, [Validators.required]],
            seo_title: '',
            seo_keywords: '',
            seo_description: ''
        });
        this.CategoryData = [
            {
                id: '1',
                text: 'Xã hội'
            },
            {
                id: '2',
                text: 'Chính sách và cuộc sống'
            }
        ];
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
        this.CMSPreviewVideo = '<video controls style="max-width:100%">' +
            '<source src="' + environment.storage_url + this.receiveVideoInsert.path + '" type="video/mp4">' +
            '</video>';
    }
}
