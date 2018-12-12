import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import {environment} from './../../environments/environment.prod';
import {PaginatedMedia} from './../model/media-paginate.model';
import {NgProgress} from 'ngx-progressbar';

@Injectable()
export class MediaService {
    private apiMediaVideo = '/media/gallery?action=video';
    private apiMediaImage = '/media/gallery?action=image';
    constructor(
        private httpClient: HttpClient,
        public progressService: NgProgress
    ) {
    }

    getMediaVideo(): Promise<PaginatedMedia> {
        this.progressService.start();
        return this.httpClient.get(`${environment.api_url}` + this.apiMediaVideo)
            .toPromise()
            .then((response) => {
                this.progressService.done();
                return response as PaginatedMedia;
            })
            .catch(this.handleError);
    }

    getMediaImage(): Promise<PaginatedMedia> {
        this.progressService.start();
        return this.httpClient.get(`${environment.api_url}` + this.apiMediaImage)
            .toPromise()
            .then((response) => {
                this.progressService.done();
                return response as PaginatedMedia;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        this.progressService.done();
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
