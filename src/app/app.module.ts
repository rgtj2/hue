import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HueService } from './shared/index';
import { LightListComponent } from './light-list/light-list.component';
import { LightPreviewComponent } from './light-preview/light-preview.component';
import { LightToggleOnComponent } from './light-toggle-on/light-toggle-on.component';
import { LightFaderComponent } from './light-fader/light-fader.component';

@NgModule({
  declarations: [AppComponent, LightListComponent, LightPreviewComponent, LightToggleOnComponent, LightFaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
