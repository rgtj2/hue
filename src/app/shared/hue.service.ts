import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable}     from 'rxjs/Observable';
import { Light, ILightList } from "./hue.model";
import { HueAuth } from '../hue-auth';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HueService {
    constructor(private http: Http){} 

    public getLights(): Promise<Light[]> {
        return this.http.get(`${this.baseUrl}/lights/`).toPromise().then( (r) => {
          let response: ILightList = r.json();
          return Object.keys(response).map((id: string) => {
              return Light.fromResult(response[id], +id);
          });
      });
    }

    public setLightState(id: number, onValue: boolean): Promise<boolean> { 
        return this.http.put(`${this.baseUrl}/lights/${id}/state`, {on: onValue})
            .toPromise().then(r => onValue).catch(r => !onValue);
    }

    private get baseUrl(): string {
        return `http://${this.config.ip}/api/${this.config.token}`; 
    }

    private get config() {
        return HueAuth.config;
    }

}
