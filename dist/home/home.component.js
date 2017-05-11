"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var event_1 = require("../models/event");
var HomeComponent = (function () {
    function HomeComponent(http) {
        var _this = this;
        this.http = http;
        this.events = new Array();
        http.get("https://app.ticketmaster.com/discovery/v2/events.json?locale=DA&venueId=Z598xZC4Zakk1&apikey=nUcqNQCvk1d3yZQytK7V6s2Z9R9wsA3o")
            .subscribe(function (data) {
            for (var _i = 0, _a = data.json()._embedded.events; _i < _a.length; _i++) {
                var item = _a[_i];
                var event_2 = new event_1.Event();
                event_2.name = item.name;
                event_2.image = item.images[3].url;
                event_2.url = item.url;
                _this.events.push(event_2);
            }
            ;
            console.log(_this.events.length);
            //console.log(data.json()._embedded.events[0].name); //this.ticketmaster = data.json()
            console.log(data.json()._embedded);
            //this.test.name = data.json()._embedded.events;
        });
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-page',
        templateUrl: './app/home/home.component.html',
        styleUrls: ['./app/home/home.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map