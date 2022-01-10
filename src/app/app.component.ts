import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TimeSeries } from 'model/timeSeries';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

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
  @ViewChild('seriesTitle') userLastname! : ElementRef;
  @ViewChild('seriesDescription') userFirstname! : ElementRef;

  constructor(private httpClient: HttpClient) {
    this.popUpName = "Création d'un Utilisateur";
  }


  ngOnInit(): void {
  }

  resetForm() {
    this.userFirstname.nativeElement.value = this.userFirstname;
    this.userLastname.nativeElement.value = this.userLastname;
  }

  openAddSeriesForm() {
    
  }

  confirmAddUser() {
    console.log("Call Web Service - Create user");

    let newUserId:String;
    const newFirstName = this.userFirstname.nativeElement.value;
    const newLastName = this.userLastname.nativeElement.value;

    const creationUrl = this._addUserUrl;
      this.httpClient
          .post(creationUrl, newFirstName, newLastName)
          .subscribe(
            () => {
              console.log('TimeSeries crée avec succès !');
            },
            (error: string) => {
              console.log('Erreur création TimeSeries ! : ' + error);
            }
          );
    }
  }
/*
  showPromptDelete() {
    //TODO : Find how to choose tab position
    if(confirm("Voulez vous vraiment supprimer ce rendez-vous ?")) {
      Gestion de la supression WS deletion
      const deletionUrl = this._deleteUrl + "/" + this.selectedEvent.event.id.toString();
      this.deleteMock(this.selectedEvent.event.id.toString())
        .subscribe(response => {
          this.mocksList = this.mocksList.filter((mock: { id: any; }) => mock.id !== this.selectedEvent.event.id.toString());
        });
      this.deleteEvent(this.selectedEvent.event.id);
      
    }
  }
*/
