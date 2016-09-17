import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { Light } from "../shared/index";
import { LightToggleOnComponent } from '../light-toggle-on/index';
import { LightFaderComponent } from "../light-fader/index";

@Component({
  selector: 'hue-light-preview',
  directives: [LightToggleOnComponent, LightFaderComponent],
  templateUrl: './light-preview.component.html',
  styleUrls: ['./light-preview.component.css']
})
export class LightPreviewComponent implements OnInit {
  @Input() light: Light;
  constructor() { }

  ngOnInit() {
    console.log(this.light);
  }

  setLightStyle(): {[key: string]: number|string} {
    let styles = {
      "background-color": this.light.state.on && this.light.state.reachable ? "yellow": "gray" 
    };
    return styles;
  }

}
