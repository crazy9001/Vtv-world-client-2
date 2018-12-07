import {Component, OnInit} from '@angular/core';
import {Select2OptionData} from 'ng2-select2';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-create-video',
    templateUrl: './create-video.component.html',
    styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit {
    f: FormGroup;

    public CategoryData: Array<Select2OptionData>;
    public currentValue: any;
    public valueChangeValue: any;
    constructor(
        private formBuilder: FormBuilder,
    ) {

    }

    ngOnInit() {
        this.f = this.formBuilder.group({
            title: [null, [Validators.required]],
            category: [null, null],
            description: [null, [Validators.required]],
            publish_at: [null, null],
            sub_category: [null, null],
            tags: [null, null],
            source: [null, null],
            seo_infomation: this.formBuilder.group({
                seo_title: '',
                seo_keywords: '',
                seo_description: ''
            })
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
        this.valueChangeValue = $evt.value;
        console.log(this.valueChangeValue);
    }

    onSubmit() {
        console.log(this.f.value);
    }
}
