import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Light, LightState, LightHash } from "./hue.model";
import { HueApiService } from "./api/index";

@Injectable()
export class HueService extends HueApiService {
    constructor(http: Http){
        super(http);
    }

    public getLights(): Observable<Response> {
        return this.getLightsObservable();
    }
}
