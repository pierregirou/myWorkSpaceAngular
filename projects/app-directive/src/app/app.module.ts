import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickDirective } from './clickDetection.directive';
import { DumbComponent } from './dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickDirective,
    DumbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ClickDirective,
    DumbComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
