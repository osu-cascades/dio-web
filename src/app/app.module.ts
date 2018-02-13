import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import {ChartsModule} from 'ng2-charts';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SensorDetailComponent} from './sensor-detail/sensor-detail.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {GraphComponent} from './graph/graph.component';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {HistoryComponent} from './history/history.component';
import {AboutComponent} from './about/about.component';
import {DateRangePickerComponent} from './date-range-picker/date-range-picker.component';
import {FormsModule} from '@angular/forms';
import {GraphService} from './services/graph.service';
import {DatetimeService} from './services/datetime.service';
import {HarvestsComponent} from './harvests/harvests.component';
import {HarvestListComponent} from './harvest-list/harvest-list.component';
import {HarvestDetailComponent} from './harvest-detail/harvest-detail.component';
import {HarvestsService} from './services/harvests.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SensorDetailComponent,
    HomeComponent,
    GraphComponent,
    HistoryComponent,
    AboutComponent,
    DateRangePickerComponent,
    HarvestsComponent,
    HarvestListComponent,
    HarvestDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule
  ],
  providers: [ApiService, GraphService, DatetimeService, HarvestsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
