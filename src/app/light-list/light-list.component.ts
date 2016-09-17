import { Component, OnInit } from '@angular/core';
import { HueService }           from '../shared/index';
import { Light, LightHash }    from "../shared/index";

@Component({
  selector: 'hue-light-list',
  templateUrl: './light-list.component.html',
  providers: [HueService],
  styleUrls: ['./light-list.component.css']
})
export class LightListComponent implements OnInit {
  lights: Light[];
  constructor(private hueService: HueService){}

  ngOnInit(){
    this.getLights();
  }

  getLights(){
    this.hueService.getLights()
      .subscribe((r) => {
        this.lights = LightHash.toLightList(r.json());
      });
  }
}
