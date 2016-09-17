/* tslint:disable:no-unused-variable */
import { HueService } from "../shared/index";

import { TestBed, async } from '@angular/core/testing';
import { LightToggleOnComponent } from './light-toggle-on.component';

describe('Component: LightToggleOn', () => {
  it('should create an instance', () => {
    let mockHue = <HueService>{};
    let component = new LightToggleOnComponent(mockHue);
    expect(component).toBeTruthy();
  });
});
