import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OTFModule } from './on-the-fly/otf.module';
import { NMLModule } from './ng-module-loader/nml.module';
import { LACModule } from './loaded-and-compiled/lac.module';
import { FRModule } from './factory-resolver/fr.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FRModule, LACModule, NMLModule, OTFModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
