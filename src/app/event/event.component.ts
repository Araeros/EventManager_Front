import { Event } from './../../../model/event';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  hasComment = false;
  hasLabel = false;
  eventDate = "";
  eventValue = "";
  eventLabels = "";
  eventComment = "";

  constructor() { }

  ngOnInit(): void {
  }

}


