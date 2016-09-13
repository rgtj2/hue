import { Component, OnInit }    from '@angular/core';
import { HueService }           from '../shared/index';
import { Light, ILightList }    from "../shared/index";

@Component({
  selector: 'hue-lights',
  template: `
    <a (click)="getLights()">Refresh</a>
    <div *ngFor="let light of lights">
        <div>{{light.name}}: {{light.state.on ? 'ON' : 'OFF'}} - {{light.state.brightnessPercent}}%</div>
    </div>
  `,
  providers: [HueService],
  styleUrls: []
})

export class HueLights implements OnInit {
  lights: ILightList;
  constructor(private hueApi: HueService){}

  ngOnInit(){
      this.getLights();
  }

  getLights(){
      this.hueApi.getLights().subscribe( (r) => {
          console.log(r);
          let response: ILightList = r.json();
          this.lights = Object.keys(response).map((id) => {
              return Light.fromResult(response[id]);
          });
      });
  }
}
