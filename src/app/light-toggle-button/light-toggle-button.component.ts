import { Component, OnInit, Input } from '@angular/core';
import { Light, HueService } from "../shared/index";
import { Response } from "@angular/http"

@Component({
  selector: 'hue-light-toggle-button',
  providers: [HueService],
  templateUrl: './light-toggle-button.component.html',
  styleUrls: ['./light-toggle-button.component.css']
})
export class LightToggleButtonComponent implements OnInit {
  @Input() light: Light
  @Input() onUpdate: (r: Response) => void;
  constructor(private hueService: HueService) { }

  ngOnInit() {
  }

  toggleLight(){
    let newState = !this.light.state.on;
    this.hueService.setLightState(this.light.bridgeIdx, {on: newState})
      .subscribe( r => this.light.state.on = newState, () => this.light.state.on = !newState);
  }

}
