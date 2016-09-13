import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable}     from 'rxjs/Observable';

import { HueAuth } from '../hue-auth';

@Injectable()
export class HueService {
    constructor(private http: Http){} 

    public getLights(): Observable<Response>{
        return this.http.get(`${this.baseUrl}/lights/`);
    }

    private get baseUrl(): string {
        return `http://${this.config.ip}/api/${this.config.token}`; 
    }

    private get config() {
        return HueAuth.config;
    }

}
