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
var router_1 = require("@angular/router");
var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) { return _this.users = data.users; });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about-page',
        styles: ["\n    .test {\n      position: relative;\n      top: -117px;\n      background-image: url(http://www.tapperiet.nu/files/layout/main_background_repeat.jpg);\n      z-index: 1;\n      padding-bottom: 117px;\n    }\n\n    .test img {\n      position: relative;\n      z-index: 5;\n      top: 70px;\n    }\n  "],
        template: "\n    <div class=\"test\">\n\n      <img src=\"./app/about/page1.png\">\n\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map