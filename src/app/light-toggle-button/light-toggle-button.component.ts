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
    this.hueService.setLightState(this.light.bridgeIdx, !this.light.state.on)
      .then( (onValue: boolean) => this.light.state.on = onValue);
  }

}
