import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Http, JsonpModule } from '@angular/http';

import { Event } from '../models/event';

@Component({
  selector: 'home-page',
  templateUrl: './app/home/home.component.html',
  styleUrls: ['./app/home/home.component.css']
})

export class HomeComponent {

  public events:Array<Event> = new Array<Event>();

  constructor(public http:Http)
  {
    http.get("https://app.ticketmaster.com/discovery/v2/events.json?locale=DA&venueId=Z598xZC4Zakk1&apikey=nUcqNQCvk1d3yZQytK7V6s2Z9R9wsA3o")
    .subscribe(
       data => {

         for (let item of data.json()._embedded.events)
         {
           let event:Event = new Event();
           event.name = item.name;
           event.image = item.images[3].url;
           event.url = item.url;
           this.events.push(event);
         };
         console.log(this.events.length);
         //console.log(data.json()._embedded.events[0].name); //this.ticketmaster = data.json()
         console.log(data.json()._embedded);
         //this.test.name = data.json()._embedded.events;
     });
  }
}
