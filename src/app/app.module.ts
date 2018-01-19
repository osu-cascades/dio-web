import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import {AppRoutingModule} from "./app-router.module";
import {DoService} from "./shared/do.service";
import {HttpClientModule} from "@angular/common/http";
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [DoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
