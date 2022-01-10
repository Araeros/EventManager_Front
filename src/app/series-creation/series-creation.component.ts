import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-series-creation',
  templateUrl: './series-creation.component.html',
  styleUrls: ['./series-creation.component.css']
})
export class SeriesCreationComponent {

  //Variable to link Backend
  private eventUrl = '/event'
  private seriesUrl = '/series'
  private userUrl = '/user'
  private APIEndpoint = environment.APIEndpoint;
  _addEventUrl = this.APIEndpoint + this.eventUrl; //{seriesId}
  _deleteEventUrl = this.APIEndpoint + this.eventUrl; //{eventId}
  _findEventsByLabelUrl = this.APIEndpoint + '/event/findByLabels'; //{labelsName}
  _getEventsBySeriesUrl = this.APIEndpoint + this.eventUrl; //{seriesId}
  _updateEventUrl = this.APIEndpoint + this.eventUrl; //Event en paramètre
  _addTimeSeriesUrl = this.APIEndpoint + this.seriesUrl; //{userId}
  _deleteTimeSeriesUrl = this.APIEndpoint + this.seriesUrl; //{seriesId}
  _getTimeSeriesByUserUrl = this.APIEndpoint + this.seriesUrl; //{userId}
  _updateTimeSeriesUrl = this.APIEndpoint + this.seriesUrl; //Series en paramètre
  _addUserUrl = this.APIEndpoint + this.userUrl; //FirstName & LastName

  popUpName = "Création Utilisateur";

  //Fields for Add Appointment PopUp
  @ViewChild('seriesTitle') seriesTitle! : ElementRef;
  @ViewChild('seriesDescription') seriesDescription! : ElementRef;

  constructor(private httpClient: HttpClient) {
    this.popUpName = "Création d'une Série";
  }


  ngOnInit(): void {
  }

  resetForm() {
    this.seriesTitle.nativeElement.value = this.seriesTitle;
    this.seriesDescription.nativeElement.value = this.seriesDescription;
  }

  openAddSeriesForm() {
    
  }

  confirmAddUser() {
    console.log("Call Web Service - Create series");

    const newTitle = this.seriesTitle.nativeElement.value;
    const newDesc = this.seriesDescription.nativeElement.value;

    const creationUrl = this._addUserUrl;
    this.httpClient
      .post(creationUrl, newTitle, newDesc)
      .subscribe(
        () => {
          console.log('TimeSeries créée avec succès !');
          },
          (error: string) => {
            console.log(`Erreur création TimeSeries ! : ${error}`);
          }
      );
    }
}
