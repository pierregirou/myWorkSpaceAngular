import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfirmDirective } from './confirm.directive';
import { CounterComponent } from './counter.component';
import { HighLightDirective } from './highlight.directive';
import { UserInfoComponent } from './infoUser.component';
import { PreventDefault } from './preventDefault.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    HighLightDirective,
    PreventDefault,
    ConfirmDirective,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
