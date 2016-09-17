import { Component, OnInit, Input } from '@angular/core';
import { Light, LightState, HueService } from "../shared/index";
import { Response } from "@angular/http"
import { HueDefaults } from "../shared/index";

@Component({
  selector: 'hue-light-fader',
  providers: [HueService],
  templateUrl: './light-fader.component.html',
  styleUrls: ['./light-fader.component.css']
})
export class LightFaderComponent implements OnInit {
  @Input() light: Light;
  @Input() turnUp: boolean;

  constructor(private hueService: HueService) { }

  ngOnInit() {
  }

  fade(){
    const currentBri = this.light.state.bri;
    let potentialBri: number = this.getPotentialBri(currentBri);
    if ( potentialBri !== currentBri) {
      this.hueService.setLightState(this.light.bridgeIdx, {bri: potentialBri})
        .subscribe( r => this.light.state.bri = potentialBri, () => {throw new Error("Oops!!")});
    }
  }

  getPotentialBri(currentBri: number): number {
    if (this.turnUp) {
      return LightState.adjustBrightnessPercent(this.light.state.brightnessPercent, 20, 10);
    } else {
      return LightState.adjustBrightnessPercent(this.light.state.brightnessPercent, -20, 10);
    }
  }


}
