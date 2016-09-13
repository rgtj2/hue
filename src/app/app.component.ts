import { Component } from '@angular/core';
import { HueLights } from './lights/index';
import { HueService } from './shared/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HueLights, HueService],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(){
  }
  title = 'app works!';
}
