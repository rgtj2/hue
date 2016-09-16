import { Component, OnInit } from '@angular/core';
import { HueService }           from '../shared/index';
import { Light, ILightList }    from "../shared/index";

@Component({
  selector: 'hue-light-list',
  templateUrl: './light-list.component.html',
  providers: [HueService],
  styleUrls: ['./light-list.component.css']
})
export class LightListComponent implements OnInit {
  lights: Light[];
  loading: boolean;
  constructor(private hueApi: HueService){}

  ngOnInit(){
    this.loading = true;
    this.getLights();
  }

  getLights(){
    this.hueApi.getLights().then( ( lights: Light[] ) => {
      this.lights = lights;
      this.loading = false;
    });
  }
}
