import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighLightDirective } from './highlight.directive';
import { PreventDefault } from './preventDefault.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective,
    PreventDefault
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
