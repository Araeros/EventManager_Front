import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent {

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

  popUpName = "Création d'un Évènement";

  //Fields for Add Appointment PopUp
  @ViewChild('seriesTitle') eventValue! : ElementRef;
  @ViewChild('seriesDescription') eventComment! : ElementRef;

  constructor(private httpClient: HttpClient) {
    this.popUpName = "Création d'un Évènement";
  }


  ngOnInit(): void {
  }

  resetForm() {
    this.eventValue.nativeElement.value = "";
    this.eventComment.nativeElement.value = "";
  }

  openAddSeriesForm() {
    
  }

  confirmAddUser() {
    console.log("Call Web Service - Create event");

    const newValue = this.eventValue.nativeElement.value;
    const newComment = this.eventComment.nativeElement.value;
    //TODO : get SeriesId
    let userId = "1"

    const creationUrl = this._addEventUrl;
    this.httpClient
      .post(creationUrl, newValue, newComment)
      .subscribe(
        () => {
          console.log('Event créée avec succès !');
          },
          (error: string) => {
            console.log(`Erreur création Event ! : ${error}`);
          }
      );
    }
}

