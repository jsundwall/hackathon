import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Http, JsonpModule } from '@angular/http';

import { Event } from './models/test';


@Component({
  selector: 'my-app',
  styleUrls: ['./app/home.css'],
  templateUrl: './app/home.html'
})


export class AppComponent
{

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
             console.log(item.name);
             this.events.push(event);
           };
           console.log(this.events.length);
           //console.log(data.json()._embedded.events[0].name); //this.ticketmaster = data.json()
           //console.log(data.json()._embedded.events[0].images[2].url);
           //this.test.name = data.json()._embedded.events;
       });
    }

      consoleLog()
      {
          console.log(this.events);
      }

      message = 'This is the sample message.';
}

// Tapperiet ID: Z598xZC4Zakk1
