import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HueLights } from './lights/index';
import { HueService } from './shared/index';

@NgModule({
  declarations: [AppComponent, HueLights],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
