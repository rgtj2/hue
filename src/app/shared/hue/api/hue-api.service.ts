import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HueAuth } from '../../../hue-auth';

export abstract class HueApiService {
    constructor(private http: Http){}

    setLightState(id: number, config: {[key: string]: any}): Observable<Response> { 
        return this.http.put(`${this.baseUrl}/lights/${id}/state`, config);
    }

    protected getLightsObservable(): Observable<Response> {
        return this.getEndpoint("lights");
    }

    private get baseUrl(){
        return this.formatBaseUrl;
    }

    private buildUrl(endpoint: string): string {
        return `${this.baseUrl}/${endpoint}/`;
    }

    private get config() {
        return HueAuth.config;
    }

    private get formatBaseUrl(): string {
        return `http://${this.config.ip}/api/${this.config.token}`; 
    }

    private get(endpoint: string): Observable<Response> {
        return this.http.get(this.buildUrl(endpoint));
    }

    private getEndpoint(endpoint: string): Observable<Response> {
        return this.get(endpoint);
    }

}