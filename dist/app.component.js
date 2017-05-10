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
var test_1 = require("./models/test");
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.events = new Array();
        this.message = 'This is the sample message.';
        http.get("https://app.ticketmaster.com/discovery/v2/events.json?locale=DA&venueId=Z598xZC4Zakk1&apikey=nUcqNQCvk1d3yZQytK7V6s2Z9R9wsA3o")
            .subscribe(function (data) {
            for (var _i = 0, _a = data.json()._embedded.events; _i < _a.length; _i++) {
                var item = _a[_i];
                var event_1 = new test_1.Event();
                event_1.name = item.name;
                event_1.image = item.images[3].url;
                console.log(item.name);
                _this.events.push(event_1);
            }
            ;
            console.log(_this.events.length);
            //console.log(data.json()._embedded.events[0].name); //this.ticketmaster = data.json()
            //console.log(data.json()._embedded.events[0].images[2].url);
            //this.test.name = data.json()._embedded.events;
        });
    }
    AppComponent.prototype.consoleLog = function () {
        console.log(this.events);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['./app/home.css'],
        templateUrl: './app/home.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
// Tapperiet ID: Z598xZC4Zakk1
//# sourceMappingURL=app.component.js.map