import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextboxComponentComponent } from './textbox-component/textbox-component.component';
import { BoxComponentComponent } from './box-component/box-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponentComponent,
    BoxComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
