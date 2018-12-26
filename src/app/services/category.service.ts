import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class CategoryService {
    private apiGetVideoCategory = 'video/user/category';
    constructor(
        private httpClient: HttpClient,
    ) {
    }

    getVideoCategoryByUser() {
        return this.httpClient.get(`${environment.api_url}` + this.apiGetVideoCategory)
            .toPromise()
            .then((response) => {
                console.log(response);
                return response ;
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
