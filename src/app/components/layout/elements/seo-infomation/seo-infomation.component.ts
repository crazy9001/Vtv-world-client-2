import {Component, OnInit} from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
@Component({
    selector: 'app-seo-infomation',
    templateUrl: './seo-infomation.component.html',
    styleUrls: ['./seo-infomation.component.css'],
    viewProviders: [ { provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class SeoInfomationComponent implements OnInit {
    constructor(
    ) {
    }

    ngOnInit() {
    }

}
