import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ApiModule } from '../../api.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';
import { TimeSeriesComponent } from './time-series/time-series.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { EventCreationComponent } from './event-creation/event-creation.component';
import { SeriesCreationComponent } from './series-creation/series-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TimeSeriesComponent,
    UserCreationComponent,
    EventCreationComponent,
    SeriesCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
