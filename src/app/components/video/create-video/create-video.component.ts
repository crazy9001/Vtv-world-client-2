import {Component, OnInit} from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
    selector: 'app-create-video',
    templateUrl: './create-video.component.html',
    styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit {
    public CategoryData: Array<Select2OptionData>;

    constructor() {

    }

    ngOnInit() {
        this.CategoryData = [
            {
                id: 'basic1',
                text: 'Basic 1'
            },
            {
                id: 'basic2',
                text: 'Basic 2'
            },
            {
                id: 'basic3',
                text: 'Basic 3'
            },
            {
                id: 'basic4',
                text: 'Basic 4'
            }
        ];
        console.log(this.CategoryData);
    }

}
