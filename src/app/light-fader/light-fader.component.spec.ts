/* tslint:disable:no-unused-variable */
import { HueService } from "../shared/index";

import { TestBed, async } from '@angular/core/testing';
import { LightFaderComponent } from './light-fader.component';

describe('Component: LightFader', () => {
  let mockHue = jasmine.createSpyObj("HueService", ["setLightState"]);
  it('should create an instance', () => {
    let component = new LightFaderComponent(<HueService>mockHue);
    expect(component).toBeTruthy();
  });
});
