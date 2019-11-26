(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");




var routes = [
    { path: "", redirectTo: 'home', pathMatch: "full" },
    { path: "home", component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AFMS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_homepage_background_header_background_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/homepage/background-header/background-header.component */ "./src/app/components/homepage/background-header/background-header.component.ts");
/* harmony import */ var _components_homepage_background_footer_background_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/homepage/background-footer/background-footer.component */ "./src/app/components/homepage/background-footer/background-footer.component.ts");
/* harmony import */ var _components_homepage_soft_services_soft_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/homepage/soft-services/soft-services.component */ "./src/app/components/homepage/soft-services/soft-services.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
                _components_homepage_background_header_background_header_component__WEBPACK_IMPORTED_MODULE_6__["BackgroundHeaderComponent"],
                _components_homepage_background_footer_background_footer_component__WEBPACK_IMPORTED_MODULE_7__["BackgroundFooterComponent"],
                _components_homepage_soft_services_soft_services_component__WEBPACK_IMPORTED_MODULE_8__["SoftServicesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/homepage/background-footer/background-footer.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/homepage/background-footer/background-footer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  background-footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/homepage/background-footer/background-footer.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/homepage/background-footer/background-footer.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvYmFja2dyb3VuZC1mb290ZXIvYmFja2dyb3VuZC1mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/homepage/background-footer/background-footer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/homepage/background-footer/background-footer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BackgroundFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundFooterComponent", function() { return BackgroundFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackgroundFooterComponent = /** @class */ (function () {
    function BackgroundFooterComponent() {
    }
    BackgroundFooterComponent.prototype.ngOnInit = function () {
    };
    BackgroundFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-background-footer',
            template: __webpack_require__(/*! ./background-footer.component.html */ "./src/app/components/homepage/background-footer/background-footer.component.html"),
            styles: [__webpack_require__(/*! ./background-footer.component.scss */ "./src/app/components/homepage/background-footer/background-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackgroundFooterComponent);
    return BackgroundFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/background-header/background-header.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/homepage/background-header/background-header.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  background-header works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/homepage/background-header/background-header.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/homepage/background-header/background-header.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvYmFja2dyb3VuZC1oZWFkZXIvYmFja2dyb3VuZC1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/homepage/background-header/background-header.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/homepage/background-header/background-header.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BackgroundHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundHeaderComponent", function() { return BackgroundHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackgroundHeaderComponent = /** @class */ (function () {
    function BackgroundHeaderComponent() {
    }
    BackgroundHeaderComponent.prototype.ngOnInit = function () {
    };
    BackgroundHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-background-header',
            template: __webpack_require__(/*! ./background-header.component.html */ "./src/app/components/homepage/background-header/background-header.component.html"),
            styles: [__webpack_require__(/*! ./background-header.component.scss */ "./src/app/components/homepage/background-header/background-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackgroundHeaderComponent);
    return BackgroundHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"red\" viewBox=\"-250 0 350 100\" style=\"display: block; position: fixed;top: 0px;\">\n    <path d=\"M 10 0 c -1 -1 -4 7 -2 15 c 4 20 43 24 45 25 c 42 10 49 76 47 40 v -80\"></path>\n    \n  </svg>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"red\" viewBox=\"0 -1 70 14.5\" style=\"display: block; bottom: -80px; position: fixed;\">\n    <path d=\"m 0 12 c 0 -8 8 -18 40 -4 c 13 4 35 -18 30 0 v 12 h -70 \"></path>\n  </svg>\n  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"red\" viewBox=\"0 -1 120 50\" style=\"display: block;left: 30%;position: fixed;opacity: 0.1;margin-top: 5%;\">\n    <path d=\"m 25 2 l -8 14 l 4 8 l 4 -7 l 5 7 l 3 -7 l -8 -15 M 0 50 l 15 -32 l 9 17 l -4 8 l -5 -10 l -7 17 z m 20 0 l 16 -33 l 14 34 l -6 0 l -8 -21 l -9 21 M 33 43 l -3 7 l 7 0 l -4 -7\"></path>\n  </svg>\n  <div class=\"row\">\n      <div class=\"col\"style=\"color: red;position: absolute;top: 23%;margin-left: 6%;font-family: sans-serif;font-size: 6vw;\">Good</div>\n      <div class=\"col\"style=\"color: red;position: absolute;top: 36%;margin-left: 6%;font-family: sans-serif;font-size: 6vw;font-weight: bold;\">DAY</div>\n      <div class=\"col\"style=\"color: red;position: absolute;top: 49%;margin-left: 6%;font-family: sans-serif;font-size: 6vw;\">Everyday</div>\n    </div>\n\n  <app-soft-services></app-soft-services>"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/components/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/soft-services/soft-services.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/homepage/soft-services/soft-services.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height: 150px;\">\n  <div class=\"row\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"red\" viewBox=\"0 -1 750 50\" style=\"display: block;margin-left: 7%;position: fixed;\">\n      <path d=\"m 25 2 l -8 14 l 4 8 l 4 -7 l 5 7 l 3 -7 l -8 -15 M 0 50 l 15 -32 l 9 17 l -4 8 l -5 -10 l -7 17 z m 20 0 l 16 -33 l 14 34 l -6 0 l -8 -21 l -9 21 M 33 43 l -3 7 l 7 0 l -4 -7\"></path>\n    </svg>\n        <div class=\"row\">\n          <div class=\"col-6\" style=\"margin-top: 1%;margin-left: 15%;position: fixed;font-family: sans-serif;font-size: 3vw;\">\n            <p> ASSIMILATED</p>\n          </div>\n          <div class=\"col-6\" style=\"margin-top: 4.7%;margin-left: 15%;position: fixed;font-family: sans-serif;font-size: 1.47vw;\">\n            <p>Facility Management Services</p>\n          </div>\n      </div>\n        <div class=\"row\">\n            <div class=\"col\" style=\"position: absolute;top: 13%;margin-left: 8%;\"> A </div>\n            <div class=\"col\" style=\"position: absolute;top: 13%;margin-left: 10.5%;\"> F </div>\n            <div class=\"col\" style=\"position: absolute;top: 13%;margin-left: 11.8%;\"> M </div>\n            <div class=\"col\" style=\"position: absolute;top: 13%;margin-left: 13.5%;\"> S </div>\n          </div>\n        </div>\n          \n<nav class=\"nav nav-default\" role=\"navigation\">\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n    <ul class=\"nav navbar-nav\" style=\"float: right; margin-top: 4.1%; margin-right: 15%;\">\n      <li class=\"active\"><a href=\"#\" style=\"color: white;background: red none repeat scroll 0 0 !important;display: block;font-size: 12px;padding: 8px 12px;border-radius: 4px;letter-spacing: 0.5px;font-weight: 700;position: relative;z-index: 999;text-transform: uppercase;\">Home</a></li>\n      <li class=\"dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;background: red none repeat scroll 0 0 !important;display: block;font-size: 12px;padding: 8px 12px;border-radius: 4px;letter-spacing: 0.5px;font-weight: 700;position: relative;z-index: 999;text-transform: uppercase;\"> Soft Services <b class=\"caret\"></b></a>\n        <ul class=\"dropdown-menu\" style=\"color: white;background: red none repeat scroll 0 0 !important;\">\n          <ng-container *ngIf=\"softService\">\n            <li *ngFor=\"let item of softService\" class=\"softService-list-item\">  \n              <a class=\"softService-container-link\" routerLinkActive=\"active\" (click)=\"onSelect(item)\" style=\"background-color: red;\">\n                <div class = \"softService-list-title\">\n                  <li><a href=\"{{item.href}}\" style=\"color: white;text-decoration: none;\"><h5 >{{item.id}}</h5></a></li>\n                </div>\n              </a>\n            </li>\n          </ng-container>\n        </ul>\n      </li>\n      <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;background: red none repeat scroll 0 0 !important;display: block;font-size: 12px;padding: 8px 12px;border-radius: 4px;letter-spacing: 0.5px;font-weight: 700;position: relative;z-index: 999;text-transform: uppercase;\"> Operations & Maintenance <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\" style=\"color: white;background: red none repeat scroll 0 0 !important;\">\n              <ng-container *ngIf=\"softService\">\n                  <li *ngFor=\"let item of operationsAndMaintenance\" class=\"softService-list-item\">  \n                    <a class=\"softService-container-link\" routerLinkActive=\"active\" (click)=\"onSelect(item)\" style=\"background-color: red;\">\n                      <div class = \"softService-list-title\">\n                        <li><a href=\"{{item.href}}\" style=\"color: white;text-decoration: none;\"><h5 >{{item.id}}</h5></a></li>\n                      </div>\n                    </a>\n                  </li>\n                </ng-container>\n          </ul>\n        </li>\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"color: white;background: red none repeat scroll 0 0 !important;display: block;font-size: 12px;padding: 8px 12px;border-radius: 4px;letter-spacing: 0.5px;font-weight: 700;position: relative;z-index: 999;text-transform: uppercase;\"> Others <b class=\"caret\"></b></a>\n            <ul class=\"dropdown-menu\" style=\"color: white;background: red none repeat scroll 0 0 !important;\">\n                <ng-container *ngIf=\"softService\">\n                    <li *ngFor=\"let item of other\" class=\"softService-list-item\">  \n                      <a class=\"softService-container-link\" routerLinkActive=\"active\" (click)=\"onSelect(item)\" style=\"background-color: red;\">\n                        <div class = \"softService-list-title\">\n                          <li><a href=\"{{item.href}}\" style=\"color: white;text-decoration: none;\"><h5 >{{item.id}}</h5></a></li>\n                        </div>\n                      </a>\n                    </li>\n                  </ng-container>\n            </ul>\n          </li>\n    </ul>\n  </div><!-- /.navbar-collapse -->\n</nav>\n</div>"

/***/ }),

/***/ "./src/app/components/homepage/soft-services/soft-services.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/homepage/soft-services/soft-services.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav_primary-menu {\n  float: right;\n  padding: 10px;\n  padding-top: 0;\n  padding-right: 40px;\n  padding-bottom: 0;\n  position: relative;\n  z-index: 99;\n  padding-top: 30px;\n  padding-right: 0 !important;\n  margin: 0;\n  list-style: none; }\n\n.nav-item-soft {\n  display: inline-block;\n  float: left;\n  margin: 0 0px;\n  position: relative;\n  z-index: 999; }\n\n.softService-list-item {\n  list-style: none; }\n\n.softService-list-item .softService-list-title {\n    display: block;\n    margin: 0;\n    cursor: pointer;\n    text-decoration: none;\n    position: relative;\n    font-size: 10px;\n    text-align: left; }\n\n.softService-list-item .softService-list-title:hover {\n      background: #f56a6a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9zb2Z0LXNlcnZpY2VzL0Q6XFxyYW5nYXNhaVxcd29ya3NwYWNlXFxVSVxcbmV3IHByb2plY3RcXGFmbXNcXEFGTVMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVwYWdlXFxzb2Z0LXNlcnZpY2VzXFxzb2Z0LXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRHBCO0lBR2dCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQVRoQztNQVdvQixtQkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2Uvc29mdC1zZXJ2aWNlcy9zb2Z0LXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdl9wcmltYXJ5LW1lbnV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubmF2LWl0ZW0tc29mdHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuLnNvZnRTZXJ2aWNlLWxpc3QtaXRlbXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIC5zb2Z0U2VydmljZS1saXN0LXRpdGxle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0NSwgMTA2LCAxMDYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/homepage/soft-services/soft-services.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/homepage/soft-services/soft-services.component.ts ***!
  \******************************************************************************/
/*! exports provided: SoftServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftServicesComponent", function() { return SoftServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoftServicesComponent = /** @class */ (function () {
    function SoftServicesComponent() {
        this.softService = [{
                id: "HouseKeeping",
                href: "#"
            },
            {
                id: "Carpet Shampooing",
                href: "#"
            },
            {
                id: "Upholstery Cleaning",
                href: "#"
            },
            {
                id: "Horticulture & Landscaping",
                href: "#"
            },
            {
                id: "Pantry Services",
                href: "#"
            },
            {
                id: "Mail Room Services",
                href: "#"
            }
        ];
        this.operationsAndMaintenance = [{
                id: "Electrical Maintenance",
                href: "#"
            },
            {
                id: "DG Maintenance",
                href: "#"
            },
            {
                id: "HVAC",
                href: "#"
            },
            {
                id: "Plumbing, Carpentry & Civil Maintenance ",
                href: "#"
            },
            {
                id: "STP / WTP (Sewage Treatment Plant / Water Treatment plant)",
                href: "#"
            },
            {
                id: "Handyman",
                href: "#"
            }
        ];
        this.other = [
            {
                id: "Payroll Management",
                href: "#"
            },
            {
                id: "Reception / Helpdesk",
                href: "#"
            },
            {
                id: "Staffing Solutions",
                href: "#"
            },
            {
                id: "Pest Control Services",
                href: "#"
            },
            {
                id: "Guest House Management",
                href: "#"
            },
            {
                id: "Transport Management",
                href: "#"
            },
            {
                id: "Kitchen Stewarding",
                href: "#"
            },
            {
                id: "Floor Treatment",
                href: "#"
            },
            {
                id: "Laundry Services",
                href: "#"
            },
            {
                id: "Flower Supply",
                href: "#"
            },
            {
                id: "Tuck Shop",
                href: "#"
            },
            {
                id: "Vending Solutions",
                href: "#"
            },
            {
                id: "Corporate Packed Lunches (Meeting Room)",
                href: "#"
            },
        ];
    }
    SoftServicesComponent.prototype.ngOnInit = function () {
    };
    SoftServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-soft-services',
            template: __webpack_require__(/*! ./soft-services.component.html */ "./src/app/components/homepage/soft-services/soft-services.component.html"),
            styles: [__webpack_require__(/*! ./soft-services.component.scss */ "./src/app/components/homepage/soft-services/soft-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoftServicesComponent);
    return SoftServicesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var protocol = window.location.protocol + '//';
var host_temp = window.location.host;
var environment = {
    production: true,
    home: protocol + host_temp,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.prod */ "./src/environments/environment.prod.ts");




if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\rangasai\workspace\UI\new project\afms\AFMS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map