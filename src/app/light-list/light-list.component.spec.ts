/* tslint:disable:no-unused-variable */
import { HueService } from "../shared/index";

import { TestBed, async } from '@angular/core/testing';
import { LightListComponent } from './light-list.component';

describe('Component: LightList', () => {
  it('should create an instance', () => {
    let mockHue = <HueService>{};
    let component = new LightListComponent(mockHue);
    expect(component).toBeTruthy();
  });
});
