webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n    <dk-spinner></dk-spinner>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__head_head_component__ = __webpack_require__("../../../../../src/app/head/head.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_draggable__ = __webpack_require__("../../../../angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__standby_mode_standby_mode_component__ = __webpack_require__("../../../../../src/app/standby-mode/standby-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__test_mode_test_mode_component__ = __webpack_require__("../../../../../src/app/test-mode/test-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__check_mode_check_mode_component__ = __webpack_require__("../../../../../src/app/check-mode/check-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["b" /* routingComponents */],
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__head_head_component__["a" /* HeadComponent */],
                __WEBPACK_IMPORTED_MODULE_9__standby_mode_standby_mode_component__["a" /* StandbyModeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__test_mode_test_mode_component__["a" /* TestModeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__check_mode_check_mode_component__["a" /* CheckModeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_draggable__["a" /* AngularDraggableModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_13__data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__standby_mode_standby_mode_component__ = __webpack_require__("../../../../../src/app/standby-mode/standby-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_mode_test_mode_component__ = __webpack_require__("../../../../../src/app/test-mode/test-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__check_mode_check_mode_component__ = __webpack_require__("../../../../../src/app/check-mode/check-mode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__standby_mode_standby_mode_component__["a" /* StandbyModeComponent */]
    }, {
        path: 'test',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_3__test_mode_test_mode_component__["a" /* TestModeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard__["a" /* AuthGuard */]]
    }, {
        path: 'check',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_4__check_mode_check_mode_component__["a" /* CheckModeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard__["a" /* AuthGuard */]]
    }, {
        path: '**',
        redirectTo: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard__["a" /* AuthGuard */]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    __WEBPACK_IMPORTED_MODULE_2__standby_mode_standby_mode_component__["a" /* StandbyModeComponent */]
];


/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.dataService.images) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/check-mode/check-mode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckModeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckModeComponent = /** @class */ (function () {
    function CheckModeComponent(router, dataService, spinner) {
        this.router = router;
        this.dataService = dataService;
        this.spinner = spinner;
        this.isOpenModalContact = false;
    }
    CheckModeComponent.prototype.ngOnInit = function () {
        this.spinner.start();
        this.mainForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            company: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            agree: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null)
        });
        this.spinner.stop(500);
    };
    CheckModeComponent.prototype.sendFormContact = function () {
        if (this.mainForm.valid) {
            this.dataService.saveContact(this.mainForm.value);
            this.router.navigate(['/']);
        }
    };
    CheckModeComponent.prototype.openModalContact = function () {
        this.mainForm.reset();
        if (!this.isOpenModalContact) {
            this.isOpenModalContact = true;
        }
        else {
            this.isOpenModalContact = false;
        }
    };
    CheckModeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-check-mode',
            template: "\n    <div *ngIf=\"dataService.randomImage.processedImage\" [ngClass]=\"{'hide': spinner.activeSpinner}\">\n      <app-head [disableMenu]=\"false\"></app-head>\n      <div class=\"main-title\">\n        Overlay screen\n      </div>\n      <div class=\"main-image\">\n        <div class=\"wrap-image\">\n          <img [src]=\"dataService.pathImage + dataService.randomImage.processedImage\">\n          <div *ngFor=\"let object of dataService.randomImage.objects; let i = index;\"\n               [ngStyle]=\"{\n                'transform': 'translate('+ object.transform?.x +'px, '+ object.transform?.y +'px)',\n                'width': object?.size?.width+'px',\n                'height': object?.size?.height+'px',\n                'top': object?.position?.top+'px',\n                'left': object?.position?.left+'px'\n               }\"\n               class=\"point\"\n          >\n            <div class=\"point-in\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"control\">\n        <div class=\"nav-button\" routerLink=\"/test\">Next</div>\n        <div class=\"nav-button\" (click)=\"openModalContact()\">Finish</div>\n      </div>\n    </div>\n\n    <form class=\"wrap-shadow-modal modal-contact\" *ngIf=\"isOpenModalContact\" [formGroup]=\"mainForm\" (ngSubmit)=\"sendFormContact()\">\n      <div class=\"wrap-modal\">\n        <div class=\"wrap-head-modal\">\n          <div class=\"title\"></div>\n          <svg class=\"close-modal\" routerLink=\"/\" viewBox=\"0 0 5.5562499 5.5562502\">\n            <path d=\"M5.237.319L.32 5.237m0-4.918l4.918 4.918\" fill=\"#FFFFFF\" stroke=\"#FFFFFF\" stroke-width=\".905\"></path>\n          </svg>\n        </div>\n        <div class=\"wrap-body-modal\">\n          <label>Name</label>\n          <div>\n            <input type=\"text\" class=\"input\" formControlName=\"company\">\n          </div>\n          <label>E-mail(required)</label>\n          <div>\n            <input\n              email\n              required\n              pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n              type=\"email\"\n              class=\"input\"\n              formControlName=\"email\"\n            >\n          </div>\n          <section class=\"example-section\">\n            <mat-checkbox class=\"checkbox\" formControlName=\"agree\" required>\n              I agree that my data will process in marketing purposes.\n            </mat-checkbox>\n          </section>\n        </div>\n        <div class=\"wrap-bottom-modal\">\n          <div [ngClass]=\"{'disabled': mainForm.invalid}\"\n               class=\"nav-button\"\n               (click)=\"sendFormContact()\">\n            <button type=\"submit\"></button>\n            Confirm\n          </div>\n        </div>\n      </div>\n    </form>\n  ",
            styles: [__webpack_require__("../../../../../src/app/check-mode/check-mode.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_spinner_spinner_service__["a" /* SpinnerService */]])
    ], CheckModeComponent);
    return CheckModeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/check-mode/check-mode.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-title {\n  color: #94cef2; }\n\n.wrap-image .point-in {\n  cursor: default; }\n\n.control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 45px; }\n\n.control .nav-button {\n    margin-left: 40px; }\n\n.wrap-shadow-modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow-y: hidden;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1; }\n\n.wrap-shadow-modal .wrap-head-modal {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.wrap-shadow-modal .wrap-head-modal .close-modal {\n      width: 16px;\n      height: 16px;\n      top: 0;\n      left: 0;\n      opacity: 0.5;\n      cursor: pointer;\n      position: relative;\n      z-index: 1; }\n\n.wrap-shadow-modal .wrap-head-modal .close-modal:hover {\n      opacity: 0.8; }\n\n.wrap-shadow-modal .wrap-modal {\n    max-width: 450px;\n    max-height: 320px;\n    background-color: rgba(0, 0, 0, 0.53);\n    padding: 25px 30px 30px 30px;\n    animation-name: slideDown;\n    -webkit-animation-name: slideDown;\n    animation-duration: 1s;\n    -webkit-animation-duration: 1s;\n    visibility: visible !important; }\n\n.wrap-shadow-modal .wrap-modal label {\n      color: white; }\n\n.wrap-shadow-modal .wrap-modal .input {\n      width: 97.5%;\n      margin: 8px 0px 20px 0px;\n      padding: 8px 0px 6px 9px;\n      border: 1.2px solid #94cdf1;\n      border-radius: 4px; }\n\n.wrap-shadow-modal .wrap-modal .checkbox {\n      color: white;\n      font-size: 15px; }\n\n.wrap-shadow-modal .wrap-modal .wrap-bottom-modal {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      margin-top: 25px; }\n\n.wrap-shadow-modal .wrap-modal .wrap-bottom-modal button {\n        display: none;\n        border: 0;\n        margin: 0;\n        background: none;\n        color: white; }\n\n.wrap-shadow-modal .wrap-modal .wrap-bottom-modal .nav-button {\n        border: 2px solid #94cef2;\n        padding: 8px 35px;\n        margin-bottom: 10px;\n        border-radius: 7px;\n        cursor: pointer;\n        color: white;\n        display: inline-table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(spinner) {
        this.spinner = spinner;
        this.pathImage = './assets/images/';
        this.carouselConfig = {
            loop: true,
            nav: false,
            lazyLoad: true,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 8,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 2500,
            smartSpeed: 1900
        };
    }
    DataService.prototype.uploadFile = function (event) {
        var self = this;
        var target = event.target;
        var file = target.files[target.files.length - 1];
        this.spinner.start();
        if (file) {
            var reader = new FileReader();
            var fileJSON = file.type.match('json');
            if (fileJSON) {
                reader.onload = function (e) {
                    self.images = JSON.parse(e.currentTarget.result);
                    self.spinner.stop(500);
                };
                reader.readAsBinaryString(file);
            }
        }
    };
    Object.defineProperty(DataService.prototype, "getRandomImage", {
        get: function () {
            this.spinner.start();
            var index = Math.floor(Math.random() * this.images.length) + 0;
            this.randomImage = this.images[index];
            this.randomImage.objects = [];
            this.spinner.stop(1000);
            return this.randomImage;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.addProperties = function (prop, i, type) {
        this.deactivated();
        this.randomImage.objects[i].active = true;
        this.randomImage.objects[i][type] = prop;
    };
    DataService.prototype.addObject = function () {
        this.deactivated();
        this.randomImage.objects.push({ active: true });
    };
    DataService.prototype.clearAll = function () {
        this.randomImage.objects = [];
    };
    DataService.prototype.clearLast = function () {
        var _this = this;
        this.randomImage.objects.forEach(function (object, index) {
            if (object.active) {
                _this.randomImage.objects.splice(index, 1);
            }
        });
    };
    DataService.prototype.saveContact = function (contact) {
        contact.date = new Date().toLocaleString();
        var contactsArr = { data: [] };
        var contacts = localStorage.getItem('contacts');
        if (contacts) {
            contactsArr = JSON.parse(contacts);
        }
        contactsArr.data.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contactsArr));
    };
    DataService.prototype.sendTo = function () {
        var fileName = 'contacts';
        var contacts = localStorage.getItem('contacts');
        if (contacts) {
            var contactsString_1 = '';
            JSON.parse(contacts).data.forEach(function (contact) {
                contactsString_1 += contact.company + " " + contact.email + " " + contact.date + "\r\n";
            });
            var pp = document.createElement('a');
            pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contactsString_1));
            pp.setAttribute('download', fileName);
            pp.click();
        }
    };
    DataService.prototype.deactivated = function () {
        this.randomImage.objects.forEach(function (object) {
            object.active = false;
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_spinner_spinner_service__["a" /* SpinnerService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/head/head.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeadComponent = /** @class */ (function () {
    function HeadComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.isActiveMenu = false;
        this.isDisableMenu = false;
    }
    Object.defineProperty(HeadComponent.prototype, "disableMenu", {
        set: function (value) {
            this.isDisableMenu = value;
        },
        enumerable: true,
        configurable: true
    });
    HeadComponent.prototype.uploadFile = function (e) {
        this.dataService.uploadFile(e);
        this.activeMenu();
    };
    HeadComponent.prototype.sendTo = function () {
        this.dataService.sendTo();
        this.activeMenu();
    };
    HeadComponent.prototype.activeMenu = function () {
        if (!this.isActiveMenu) {
            this.isActiveMenu = true;
        }
        else {
            this.isActiveMenu = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HeadComponent.prototype, "disableMenu", null);
    HeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-head',
            template: "\n    <div class=\"head\">\n      <div class=\"head__menu\">\n        <div *ngIf=\"isDisableMenu\">\n          <div class=\"icon icon-cog\" (click)=\"activeMenu()\"></div>\n          <ul class=\"menu-list\" *ngIf=\"isActiveMenu\">\n            <li (click)=\"uploader.click()\" *ngIf=\"!dataService.images\">\n              Update data\n              <input type=\"file\" #uploader accept=\".json\" (change)=\"uploadFile($event)\" style=\"display: none;\">\n            </li>\n            <li (click)=\"sendTo()\">Send to</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"head__logo\" routerLink=\"/\">\n        adani<span>imaging</span>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/head/head.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], HeadComponent);
    return HeadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/head/head.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 35px 30px; }\n  .head__menu .icon-cog {\n    color: white;\n    font-size: 34px;\n    cursor: pointer; }\n  .head__menu .menu-list {\n    position: absolute;\n    padding: 0;\n    margin: 0;\n    background-color: #2b2a29;\n    color: #ffffff;\n    z-index: 2; }\n  .head__menu .menu-list li {\n      padding: 14px;\n      display: block;\n      font-size: 23px;\n      text-align: center;\n      cursor: pointer; }\n  .head__menu .menu-list li:not(:last-child) {\n      border-bottom: 1px solid #94cef2; }\n  .head__logo {\n    font-size: 26px;\n    color: #ffffff;\n    text-transform: uppercase;\n    font-weight: bold;\n    cursor: pointer; }\n  .head__logo span {\n      color: #94cef2;\n      margin-left: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/carousel/carousel.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselDirective = /** @class */ (function () {
    function CarouselDirective(hostElement) {
        this.owlElement = $(hostElement.nativeElement);
    }
    CarouselDirective.prototype.ngOnInit = function () {
        // TODO: Throw Error if config is not defined.
    };
    CarouselDirective.prototype.ngAfterViewInit = function () {
        this.owlElement.owlCarousel(this.config);
    };
    CarouselDirective.prototype.ngOnDestroy = function () {
        this.owlElement.trigger('destroy.owl.carousel');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('dkCarousel'),
        __metadata("design:type", Object)
    ], CarouselDirective.prototype, "config", void 0);
    CarouselDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[dkCarousel]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CarouselDirective);
    return CarouselDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ImportExportModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_carousel_directive__ = __webpack_require__("../../../../../src/app/shared/carousel/carousel.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spinner_spinner_component__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spinner_spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ImportExportModule = /** @class */ (function () {
    function ImportExportModule() {
    }
    ImportExportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ReactiveFormsModule */]
            ]
        })
    ], ImportExportModule);
    return ImportExportModule;
}());

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__carousel_carousel_directive__["a" /* CarouselDirective */],
                __WEBPACK_IMPORTED_MODULE_6__spinner_spinner_component__["a" /* SpinnerComponent */]
            ],
            exports: [
                ImportExportModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__carousel_carousel_directive__["a" /* CarouselDirective */],
                __WEBPACK_IMPORTED_MODULE_6__spinner_spinner_component__["a" /* SpinnerComponent */]
            ],
            imports: [
                ImportExportModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__spinner_spinner_service__["a" /* SpinnerService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" [hidden]=\"!activated\">\r\n  <div class=\"half-circle-spinner\">\r\n    <div class=\"circle circle-1\"></div>\r\n    <div class=\"circle circle-2\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".half-circle-spinner, .half-circle-spinner * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.half-circle-spinner {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  position: relative; }\n\n.half-circle-spinner .circle {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 100%;\n    border: 6px solid transparent; }\n\n.half-circle-spinner .circle.circle-1 {\n      border-top-color: #fc6023;\n      -webkit-animation: half-circle-spinner-animation 1s infinite;\n              animation: half-circle-spinner-animation 1s infinite; }\n\n.half-circle-spinner .circle.circle-2 {\n      border-bottom-color: #fc6023;\n      -webkit-animation: half-circle-spinner-animation 1s infinite alternate;\n              animation: half-circle-spinner-animation 1s infinite alternate; }\n\n@-webkit-keyframes half-circle-spinner-animation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes half-circle-spinner-animation {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(26, 24, 42, 0.89);\n  z-index: 9999; }\n\n.spinner-container[hidden] {\n    display: none; }\n\n.spinner-container .half-circle-spinner {\n    top: calc(50% - 50px);\n    left: calc(50% - 50px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinnerService, changeDetector) {
        var _this = this;
        spinnerService.activated.subscribe(function (activated) {
            _this.activated = activated;
            setTimeout(function () {
                changeDetector.detectChanges();
            });
        });
    }
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dk-spinner',
            styles: [__webpack_require__("../../../../../src/app/shared/spinner/spinner.component.scss")],
            template: __webpack_require__("../../../../../src/app/shared/spinner/spinner.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__spinner_service__["a" /* SpinnerService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/spinner/spinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.activationsCount = 0;
        this.activatedState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.activeSpinner = true;
    }
    SpinnerService.prototype.start = function () {
        this.activeSpinner = true;
        this.activationsCount++;
        this.updateState();
    };
    SpinnerService.prototype.stop = function (time) {
        var _this = this;
        if (this.isActivated()) {
            window.setTimeout(function () {
                _this.activeSpinner = false;
                window.setTimeout(function () {
                    _this.activationsCount--;
                    _this.updateState();
                }, 0);
            }, time);
        }
    };
    Object.defineProperty(SpinnerService.prototype, "activated", {
        get: function () {
            return this.activatedState;
        },
        enumerable: true,
        configurable: true
    });
    SpinnerService.prototype.isActivated = function () {
        return this.activationsCount > 0;
    };
    SpinnerService.prototype.updateState = function () {
        this.activatedState.next(this.isActivated());
    };
    SpinnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "../../../../../src/app/standby-mode/standby-mode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandbyModeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StandbyModeComponent = /** @class */ (function () {
    function StandbyModeComponent(dataService, spinner) {
        this.dataService = dataService;
        this.spinner = spinner;
        this.spinner.start();
        this.spinner.stop(1000);
    }
    StandbyModeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-standby-mode',
            template: "\n    <app-head [disableMenu]=\"true\"></app-head>\n    <div *ngIf=\"dataService.images\" [ngClass]=\"{'hide': spinner.activeSpinner}\">\n      <div class=\"main-title\">\n        Test application for AI chest diagnostics\n      </div>\n      <div class=\"main-image\">\n        <img [src]=\"dataService.pathImage + dataService.images[0].notProcessedImage\">\n        <div class=\"chest-test\">\n          CHEST TEST\n          <div>Check our AI application</div>\n        </div>\n      </div>\n      <div class=\"control\">\n        <div class=\"button-start\" routerLink=\"/test\">\n          Start\n        </div>\n      </div>\n      <div class=\"owl-carousel owl-theme preview-images\" [dkCarousel]=\"dataService.carouselConfig\">\n        <div class=\"item\" *ngFor=\"let image of dataService.images\">\n          <img [src]=\"dataService.pathImage + image.notProcessedImage\">\n        </div>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/standby-mode/standby-mode.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_spinner_spinner_service__["a" /* SpinnerService */]])
    ], StandbyModeComponent);
    return StandbyModeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/standby-mode/standby-mode.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: -110px;\n  margin-bottom: 75px;\n  position: relative;\n  z-index: 1; }\n  .control .button-start {\n    padding: 10px 60px;\n    border-radius: 10px;\n    text-align: center;\n    border: 2px solid #65b337;\n    text-transform: uppercase;\n    font-size: 50px;\n    background-color: #2b29299c;\n    color: #00fff7;\n    cursor: pointer; }\n  .chest-test {\n  position: absolute;\n  padding: 20px 45px;\n  border: 0;\n  border-radius: 25px;\n  text-align: center;\n  font-size: 60px;\n  background-color: #2b29299c;\n  color: #00fff7; }\n  .owl-carousel {\n  padding-bottom: 50px; }\n  .owl-item.active .post-info {\n  opacity: 1;\n  -webkit-transition: .5s;\n  transition: .5s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test-mode/test-mode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestModeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestModeComponent = /** @class */ (function () {
    function TestModeComponent(router, dataService, spinner) {
        this.router = router;
        this.dataService = dataService;
        this.spinner = spinner;
        this.inBounds = true;
        this.edge = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.randomImage = dataService.getRandomImage;
    }
    TestModeComponent.prototype.checkEdge = function (event) {
        this.edge = event;
    };
    TestModeComponent.prototype.onMoveEnd = function (e, i) {
        this.dataService.addProperties(e, i, 'transform');
    };
    TestModeComponent.prototype.onResizeStop = function (e, i) {
        this.dataService.addProperties(e.position, i, 'position');
        this.dataService.addProperties(e.size, i, 'size');
    };
    TestModeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test-mode',
            template: "\n    <app-head [disableMenu]=\"false\"></app-head>\n    <div [ngClass]=\"{'hide': spinner.activeSpinner}\">\n      <div class=\"main-title\">\n        Detect location of tuberculosis patology\n      </div>\n      <div class=\"main-image\">\n        <div class=\"wrap-image\"\n             [ngClass]=\"{\n              'top-b': !edge?.top,\n              'bottom-b': !edge?.bottom,\n              'left-b': !edge?.left,\n              'right-b': !edge?.right\n             }\"\n             #myBounds\n          >\n          <img [src]=\"dataService.pathImage + randomImage.notProcessedImage\">\n          <div\n            *ngFor=\"let object of randomImage.objects; let i = index;\"\n            ngDraggable\n            ngResizable\n            rzHandles=\"all\"\n            class=\"point\"\n            [ngClass]=\"{'active': object.active}\"\n            (edge)=\"checkEdge($event)\" [bounds]=\"myBounds\" [inBounds]=\"inBounds\"\n            (endOffset)=\"onMoveEnd($event, i)\"\n            (rzStop)=\"onResizeStop($event, i)\"\n          >\n            <div class=\"point-in\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"control\">\n        <div class=\"control__left\">\n          <div class=\"button\"\n               (click)=\"dataService.clearAll()\"\n               matTooltip=\"Please clean all selections\"\n               matTooltipPosition=\"above\"\n          >\n            <div class=\"icon icon-spinner11\"></div>\n            <div class=\"button-name\">\n              Clean\n            </div>\n          </div>\n          <div class=\"button\"\n               (click)=\"dataService.clearLast()\"\n               matTooltip=\"Please delete chosen location\"\n               matTooltipPosition=\"above\"\n          >\n            <div class=\"icon icon-bin\"></div>\n            <div class=\"button-name\">\n              Delete\n            </div>\n          </div>\n          <div class=\"button\"\n               (click)=\"dataService.addObject()\"\n               matTooltip=\"Please take selection and place on the location of tuberculosis patology\"\n               matTooltipPosition=\"above\"\n          >\n            <div class=\"icon icon-pencil\"></div>\n            <div class=\"button-name\">\n              Select\n            </div>\n          </div>\n        </div>\n        <div class=\"control__right\">\n          <div class=\"nav-button\" routerLink=\"/check\">Check result</div>\n          <div class=\"nav-button\" routerLink=\"/\">Finish</div>\n        </div>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/test-mode/test-mode.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_spinner_spinner_service__["a" /* SpinnerService */]])
    ], TestModeComponent);
    return TestModeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test-mode/test-mode.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 45px; }\n  .control__left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .control__left .button {\n      cursor: pointer;\n      padding-right: 23px;\n      display: inline-table; }\n  .control__left .icon {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border: 1.5px solid #94cef2;\n      border-radius: 4px;\n      padding: 10px;\n      color: white;\n      font-size: 23px; }\n  .control__left .button-name {\n      font-size: 22px;\n      text-align: center;\n      padding-top: 4px;\n      color: white; }\n  .control__right .nav-button {\n    margin-left: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map