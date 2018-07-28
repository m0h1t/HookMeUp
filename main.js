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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, jwtHelperService) {
        this.authService = authService;
        this.jwtHelperService = jwtHelperService;
        this.defaultPhotoUrl = '../assets/user.png';
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            if (this.authService.currentUser != null) {
                this.authService.changeMemberPhoto(user.photoURL);
            }
            else {
                this.authService.changeMemberPhoto(this.defaultPhotoUrl);
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./members/member-card/member-card.component */ "./src/app/members/member-card/member-card.component.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./resolvers/member-detail.resolver */ "./src/app/resolvers/member-detail.resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./resolvers/member-list.resolver */ "./src/app/resolvers/member-list.resolver.ts");
/* harmony import */ var _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./resolvers/lists.resolver */ "./src/app/resolvers/lists.resolver.ts");
/* harmony import */ var _resolvers_message_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./resolvers/message.resolver */ "./src/app/resolvers/message.resolver.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./resolvers/member-edit.resolver */ "./src/app/resolvers/member-edit.resolver.ts");
/* harmony import */ var _guard_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./guard/prevent-unsaved-changes.guard */ "./src/app/guard/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ "./src/app/members/photo-editor/photo-editor.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./members/member-messages/member-messages.component */ "./src/app/members/member-messages/member-messages.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/error.interceptor */ "./src/app/services/error.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_12__["MemberListComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_16__["ListsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
                _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_13__["MemberCardComponent"],
                _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_14__["MemberDetailComponent"],
                _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_15__["MemberEditComponent"],
                _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_28__["PhotoEditorComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_5__["TimeAgoPipe"],
                _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_30__["MemberMessagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_19__["appRoutes"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__["FileUploadModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () {
                            return localStorage.getItem('token');
                        },
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ['localhost:5000/api/auth/']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_11__["AlertifyService"],
                _guard_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_22__["MemberDetailResolver"],
                _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_23__["MemberListResolver"],
                _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_26__["MemberEditResolver"],
                _guard_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_27__["PreventUnsavedChanges"],
                _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_24__["ListsResolver"],
                _resolvers_message_resolver__WEBPACK_IMPORTED_MODULE_25__["MessagesResolver"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_33__["ErrorInterceptorProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertifyService) {
        this.authService = authService;
        this.router = router;
        this.alertifyService = alertifyService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertifyService.error('You need to login to access this feature');
        this.router.navigate(['./home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guard/prevent-unsaved-changes.guard.ts":
/*!********************************************************!*\
  !*** ./src/app/guard/prevent-unsaved-changes.guard.ts ***!
  \********************************************************/
/*! exports provided: PreventUnsavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChanges", function() { return PreventUnsavedChanges; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('You have unsaved changes on the page. Continue?');
        }
        return true;
    };
    PreventUnsavedChanges = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!registerMode\" class=\"container d-flex w-10 h-100 p-5 mx-auto flex-column text-center\">\n  <main role=\"main\" class=\"inner cover\">\n    <h1 class=\"cover-heading\">You can do better.</h1>\n      <p class=\"lead\">Because life is more than just sitting around and playing video games. We care about you and your future. Come in to view your matches. All you need to do is sign up!</p>\n      <p class=\"lead\">\n        <a class=\"btn btn-lg btn-secondary\" (click)=\"toggleRegister()\">Register</a>\n      </p>\n  </main>\n</div>\n\n<div *ngIf=\"registerMode\" class=\"container\">\n  <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toggleRegister = function () {
        this.registerMode = !this.registerMode;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lists/lists.component.css":
/*!*******************************************!*\
  !*** ./src/app/lists/lists.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/lists.component.html":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row equal py-3\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio = \"Likers\" (click)=\"loadUsers()\">Members who like me</button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio = \"Likees\" (click)=\"loadUsers()\">Members who I like</button>\n    </div>\n  </div>\n  <h2>{{likesParam === 'Likers' ? 'Members who like me' : 'Members who I liked'}} : {{pagination.totalItems}}</h2>\n</div>\n<div class=\"container\">\n    <div class=\"row equal\">\n      <div *ngFor='let user of users' class=\"col-sm-3 mt-4\">\n        <app-member-card [user]='user'></app-member-card>\n      </div>\n    </div>\n  </div>\n  <div class=\"container py-3 my-5 \" *ngIf=\"users.length > pagination.itemsPerPage\">\n    <div class=\"text-center\">\n      <pagination class=\"d-inline-flex\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" (pageChanged)=\"pageChanged($event)\"\n        [itemsPerPage]=\"pagination.itemsPerPage\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListsComponent = /** @class */ (function () {
    function ListsComponent(authService, userService, alertify, route) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.likesParam = 'Likers';
        this.loadUsers();
    };
    ListsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ListsComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.css */ "./src/app/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/members/member-card/member-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    margin-bottom: 1.875rem;\n    border: none;\n    border-radius: 0;\n    box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.07), 0 2px 9px 0 rgba(62, 57, 107, 0.06);\n}\n\n.card-body {\n    padding: 5px;\n}\n\n.card-body img {\n    width: 100%;\n}\n\nh6 {\n    font-size: 16px;\n    font-weight: 700;\n    color: #3a3c41;\n    margin-top: 1px;\n    margin-bottom: 1px;\n}\n\n/* h6 small {\n    font-weight: bold;\n    font-size: 12px;\n    font-style: italic;\n} */\n\nimg {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    transition-duration: 500ms;\n    transition-timing-function: ease-out;\n}\n\n.card:hover img {\n    transition-duration: 500ms;\n    transition-timing-function: ease-out;\n    opacity: 0.8;\n}\n\n.zoom {\n    overflow: hidden;\n    position: relative;\n}\n\n.member-icons {\n    position: absolute;\n    bottom: -30%;\n    left: 0;\n    right: 0;\n    margin-right: auto;\n    margin-left: auto;\n    opacity: 0;\n}\n\n.card:hover .member-icons {\n    bottom: 0;\n    opacity: 1;\n}\n\n.animate {\n    transition: all 0.3s ease-in-out;\n}\n\na {\n    color: rgb(0, 156, 220);\n    transition: all 0.3s ease-out;\n}\n\na:hover {\n    -webkit-transform: scale(1.4, 1.4);\n            transform: scale(1.4, 1.4);\n    transition-duration: 500ms;\n    transition-timing-function: ease-out;\n    transition: all 0.3s ease-in-out;\n}\n\n.border-blue.border-lighten-2 {\n    border: 1px solid #64B5F6 !important;\n}"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\">\n  <div class=\"zoom\">\n      <img src=\"{{user.photoURL ? user.photoURL: '../../../assets/user.png' }}\" alt=\"{{user.knownAs}}\" class=\"card-img-top\"/>\n      <ul class=\"list-inline member-icons animate text-center nav nav-bar\">\n        <li><button class=\"btn btn-primary\" [routerLink]=\"['/members', user.id]\" routerLinkActive=\"router-link-active\" ><i class=\"fa fa-user\"></i></button></li>\n        <li><button class=\"btn btn-primary\" (click)=\"sendLike(user.id)\"><i class=\"fa fa-heart\"></i></button></li>\n        <li><button class=\"btn btn-primary\" [routerLink]=\"['/members', user.id]\" [queryParams]=\"{tab:'3'}\"><i class=\"fa fa-envelope\"></i></button></li>\n      </ul>\n  </div>\n  <div class=\"card-body text-center\">\n    <h6 class=\"card-title\"><i class=\"fa fa-user\"></i> {{user.knownAs}}, {{user.age}}</h6>\n    <h6 class=\"text-muted\"><small>{{user.city}}</small></h6>\n  </div>\n</div> -->\n\n<div class=\"col-20\">\n  <div class=\"card border-blue border-lighten-2\">\n    <div class=\"text-center\">\n      <div class=\"card-body\">\n        <div class=\"rounded-circle\" style=\"background-color: #593196\">\n            <img src=\"{{user.photoURL}}\" class=\"rounded-circle  height-150\" alt=\"Card image\">\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{user.knownAs + ', ' + user.age}}</h4>\n        <h6 class=\"card-subtitle text-muted\">{{user.city + ', ' + user.country}}</h6>\n      </div>\n      <div class=\"text-center\">\n        <a class=\"btn\" [routerLink]=\"['/members', user.id]\" routerLinkActive=\"router-link-active\">\n          <span title=\"{{user.knownAs}}'s Profile\" class=\"fa fa-user\"></span>\n        </a>\n        <a class=\"btn\" (click)=\"sendLike(user.id)\">\n          <span title=\"Heart {{user.knownAs}}\" class=\"fa fa-heart\" style=\"color: rgb(0, 156, 220)\"></span>\n        </a>\n        <a class=\"btn\" [routerLink]=\"['/members', user.id]\" [queryParams]=\"{tab:'3'}\">\n          <span title=\"Message\" class=\"fa fa-envelope\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alertify.service */ "./src/app/services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    MemberCardComponent.prototype.sendLike = function (id) {
        var _this = this;
        this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(function (data) {
            _this.alertify.success('You have liked ' + _this.user.knownAs);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    MemberCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__(/*! ./member-card.component.html */ "./src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__(/*! ./member-card.component.css */ "./src/app/members/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin: 30px;\n}\n\n.card-header, .card-footer {\n    background-color: white;\n    border-top: none;\n    padding: 10px 10px;\n}\n\n.img-thumbnail {\n    margin: 25px;\n    width: 85%;\n    height: 85%;\n}"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h1>{{user?.knownAs}}'s Profile</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card flex-wrap\">\n        <!-- <div class=\"card-header border-0 m-0\">\n            <img src=\"{{user?.photoURL}}\" alt=\"{{user?.knownAs}}\" class=\"img-thumbnail\">\n        </div>       -->\n        <img src=\"{{user.photoURL ? user.photoURL: '../../../assets/user.png' }}\" alt=\"{{user?.knownAs}}\" class=\"card-img-top img-fluid img-thumbnail\">\n        <div class=\"card-body\" style=\"padding-bottom: 0rem;\">\n          <div>\n            <strong>Location: </strong>\n            <p>{{user?.city}}, {{user?.country}}</p>\n          </div>\n          <div>\n            <strong>Age: </strong>\n            <p>{{user?.age}}</p>\n          </div>\n          <div>\n            <strong>Last active: </strong>\n            <p>{{user.lastActive | timeAgo}}</p>\n          </div>\n          <div>\n            <strong>Member since: </strong>\n            <p>{{user.created | date: 'mediumDate'}}</p>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"btn-group-justified\" style=\"width: 100%\">\n            <div class=\"btn-group\">\n              <button class=\"btn-success btn-lg rounded\">Like</button>\n            </div>\n            <div class=\"btn-group\">\n              <button class=\"btn-primary btn-lg rounded\" (click)=\"selectTab(3)\">Message</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <!-- <div class=\"tab-panel\"> -->\n          <tabset #staticTabs class=\"member-tabset\">\n              <tab heading=\"About {{user?.knownAs}}\">\n                <h4>Description</h4>\n                <p>{{user?.introduction}}</p>\n                <h4>Looking For</h4>\n                <p>{{user?.lookingFor}}</p>\n              </tab>\n              <tab heading=\"Interests\">\n                <h4>Interests</h4>\n                <p>{{user?.interests}}</p>\n              </tab>\n              <tab heading=\"Photos\">\n                <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n              </tab>\n              <tab heading=\"Messages\">\n                <app-member-messages [userId]=\"user.id\"></app-member-messages>\n              </tab>\n          </tabset>\n      <!-- </div> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    MemberDetailComponent.prototype.getImages = function () {
        var imageURLs = [];
        for (var i = 0; i < this.user.photos.length; i++) {
            imageURLs.push({
                small: this.user.photos[i].url,
                medium: this.user.photos[i].url,
                big: this.user.photos[i].url,
                description: this.user.photos[i].description
            });
        }
        return imageURLs;
    };
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.selectTab(params['tab']);
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryAnimation"].Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.staticTabs.tabs[tabId > 0 ? tabId : 0].active = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('staticTabs'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"])
    ], MemberDetailComponent.prototype, "staticTabs", void 0);
    MemberDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! ./member-detail.component.html */ "./src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.css */ "./src/app/members/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin: 30px;\n}\n\n.card-header, .card-footer {\n    background-color: white;\n    border-top: none;\n    padding: 10px 10px;\n}\n\n.img-thumbnail {\n    margin: 25px;\n    width: 85%;\n    height: 85%;\n}"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h1>Your Profile</h1>\n    </div>\n    <div class=\"col-sm-8\">\n      <div [hidden]=\"!editForm.dirty\" class=\"alert alert-info\">\n        <p>\n          <strong>Warning</strong> You have made changes. Any unsaved changes you make will be lost!\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card flex-wrap\">\n        <img src=\"{{photoUrl}}\" alt=\"{{user?.knownAs}}\" class=\"card-img-top img-fluid img-thumbnail\">\n        <div class=\"card-body\" style=\"padding-bottom: 0rem;\">\n          <div>\n            <strong>Location: </strong>\n            <p>{{user?.city}}, {{user?.country}}</p>\n          </div>\n          <div>\n            <strong>Age: </strong>\n            <p>{{user?.age}}</p>\n          </div>\n          <div>\n            <strong>Last active: </strong>\n            <p>{{user.lastActive | timeAgo}}</p>\n          </div>\n          <div>\n            <strong>Member since: </strong>\n            <p>{{user.created | date: 'mediumDate'}}</p>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button form=\"editForm\" [disabled]=\"!editForm.dirty\" class=\"btn-success btn-block btn-lg rounded\">Save Changes</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading=\"Edit Profile\">\n            <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\">\n              <h4>Description</h4>\n              <textarea name=\"introduction\" class=\"form-control\" rows=6 [(ngModel)]=\"user.introduction\">{{user.introduction}}</textarea>\n              <h4>Looking For</h4>\n              <textarea name=\"lookingFor\" class=\"form-control\" rows=6 [(ngModel)]=\"user.lookingFor\">{{user.lookingFor}}</textarea>\n              <h4>Interests</h4>\n              <textarea name=\"interests\" class=\"form-control\" rows=6 [(ngModel)]=\"user.interests\">{{user.interests}}</textarea>\n              <h4>Location</h4>\n              <div class=\"form-inline\">\n                <label for=\"city\">City</label>\n                <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"user.city\">\n                <label for=\"country\">Country</label>\n                <input type=\"text\" class=\"form-control\" name=\"country\" [(ngModel)]=\"user.country\">\n              </div>\n            </form>\n          </tab>\n          <tab heading=\"Photos\">\n            <app-photo-editor [photos]=\"user.photos\" (getMemberPhotoChange) = 'updateMainPhoto($event)'></app-photo-editor>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(userService, alertify, route, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.authService = authService;
    }
    MemberEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
        });
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (action) {
            _this.editForm.reset(_this.user);
            _this.alertify.success('Changes saved successfully');
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberEditComponent.prototype.updateMainPhoto = function (photoUrl) {
        this.user.photoURL = photoUrl;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], MemberEditComponent.prototype, "editForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MemberEditComponent.prototype, "unloadNotification", null);
    MemberEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__(/*! ./member-edit.component.html */ "./src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__(/*! ./member-edit.component.css */ "./src/app/members/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "./src/app/members/member-list/member-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".equal {\n    display: flex;\n    flex-flow: row wrap;\n    align-content: flex-end;\n}"

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row p-3 text-center\">\n    <div class=\"text-center\">\n      <h2>Your matches - {{pagination.totalItems}} found</h2>\n    </div>\n  </div>\n  <div class=\"row p-3\">\n    <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\n      <div class=\"form-group mx-1\">\n        <label for=\"minAge\">Age From</label>\n        <input type=\"number\" class=\"form-control mx-1\" style=\"width: 70px\" id=\"minAge\" name=\"minAge\" [(ngModel)]=\"userParams.minAge\">\n      </div>\n\n      <div class=\"form-group mx-1\">\n        <label for=\"maxAge\">Age To</label>\n        <input type=\"number\" class=\"form-control mx-1\" style=\"width: 70px\" id=\"maxAge\" name=\"maxAge\" [(ngModel)]=\"userParams.maxAge\">\n      </div>\n\n      <div class=\"form-group mx-1\">\n        <label for=\"gender\">Show: </label>\n        <select class=\"form-control mx-1\" style=\"width: 130px\" id=\"gender\" name=\"gender\" [(ngModel)]=\"userParams.gender\">\n          <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\n            {{gender.display}}\n          </option>\n        </select>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n      <button type=\"button\" class=\"btn btn-info\" style=\"margin-left:10px\" (click)=\"resetFilters()\">Reset Filter</button>\n    </form>\n    <div class=\"ml-4 pull-right\">\n        <label style=\"margin-right: 10px\">Order By: </label>\n        <div class=\"btn-group\">\n          <button type=\"button\" [(ngModel)]=\"userParams.orderBy\" name=\"orderBy\" class=\"btn btn-primary\" btnRadio=\"lastActive\" (click)=\"loadUsers()\">Last Active</button>\n          <button type=\"button\" [(ngModel)]=\"userParams.orderBy\" name=\"orderBy\" class=\"btn btn-primary\" btnRadio=\"created\" (click)=\"loadUsers()\">Newest Members</button>\n        </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row equal\">\n    <div *ngFor='let user of users' class=\"col-sm-3 mt-4\">\n      <app-member-card [user]='user'></app-member-card>\n    </div>\n  </div>\n</div>\n<div class=\"container py-3 my-5 \">\n  <div class=\"text-center\">\n    <pagination class=\"d-inline-flex\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" (pageChanged)=\"pageChanged($event)\"\n      [itemsPerPage]=\"pagination.itemsPerPage\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n    </pagination>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(userService, alertifyService, route) {
        this.userService = userService;
        this.alertifyService = alertifyService;
        this.route = route;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.genderList = [{ value: 'female', display: 'Female' }, { value: 'male', display: 'Male' }];
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertifyService.error(error);
        });
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    MemberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.css */ "./src/app/members/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    border: none;\n}\n\n.chat {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.chat li {\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px dotted #b3a9a9;\n}\n\n.rounded-circle {\n    height: 50px;\n    width: 50px;\n}\n\n.card-body {\n    overflow-y: scroll;\n    height: 400px;\n}"

/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.html":
/*!************************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div *ngIf=\"messages?.length === 0\">\n      <p>No messages yet... Get talking you two!</p>\n    </div>\n\n    <ul class=\"chat\">\n      <li *ngFor=\"let message of messages\">\n        <!-- to them -->\n        <div *ngIf=\"message.senderId == userId\">\n          <span class=\"chat-img pull-left\">\n            <img src=\"{{message.senderPhotoUrl}}\" class=\"rounded-circle\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <strong class=\"primary-font\">{{message.senderKnownAs}}</strong>\n              <small class=\"text-muted pull-right\">\n                <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n              </small>\n            </div>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n\n\n        <!-- to me -->\n        <div *ngIf=\"message.senderId != userId\">\n            <span class=\"chat-img pull-right\">\n              <img src=\"{{message.senderPhotoUrl}}\" class=\"rounded-circle\">\n            </span>\n            <div class=\"chat-body\">\n              <div class=\"header\">\n                  <small class=\"text-muted\">\n                      <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n                      <span *ngIf=\"!message.isRead\" class=\"text-muted text-danger\">(Unread)</span>\n                      <span *ngIf=\"message.isRead\" class=\"text-muted text-success\">(Read {{message.dateRead | timeAgo}})</span>\n                    </small>\n                <strong class=\"primary-font pull-right\">{{message.senderKnownAs}}</strong>\n              </div>\n              <p>{{message.content}}</p>\n            </div>\n          </div>\n  \n      </li>\n    </ul>\n\n  </div>\n  <div class=\"card-footer\">\n      <!-- <section class=\"chat-app-form\">\n          <form class=\"chat-app-input d-flex\">\n            <fieldset class=\"form-group position-relative has-icon-left col-10 m-0\">\n              <div class=\"form-control-position\">\n                <i class=\"icon-emoticon-smile\"></i>\n              </div>\n              <input type=\"text\" class=\"form-control\" id=\"iconLeft4\" placeholder=\"Type your message\">\n              <div class=\"form-control-position control-position-right\">\n                <i class=\"ft-image\"></i>\n              </div>\n            </fieldset>\n            <fieldset class=\"form-group position-relative has-icon-left col-2 m-0\">\n              <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-paper-plane-o d-lg-none\"></i>\n                <span class=\"d-none d-lg-block\">Send</span>\n              </button>\n            </fieldset>\n          </form>\n        </section> -->\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n      <div class=\"input-group\">\n        <input type=\"text\" \n          class=\"form-control input-sm\" \n          required\n          name=\"content\"\n          [(ngModel)]=\"newMessage.content\"\n          placeholder=\"Type your message\">\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary\" [disabled]=\"!messageForm.valid\">Send</button>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MemberMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function() { return MemberMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(userService, alertify, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.authService = authService;
        this.newMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var currentUserId = +this.authService.decodedToken.nameid;
        this.userService.getMessagesThread(this.authService.decodedToken.nameid, this.userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (messages) {
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].isRead === false && messages[i].recipientId === currentUserId) {
                    _this.userService.markAsRead(currentUserId, messages[i].id);
                }
            }
        }))
            .subscribe(function (messages) {
            _this.messages = messages;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.userId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe(function (message) {
            _this.messages.push(message);
            _this.newMessage.content = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MemberMessagesComponent.prototype, "userId", void 0);
    MemberMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-messages',
            template: __webpack_require__(/*! ./member-messages.component.html */ "./src/app/members/member-messages/member-messages.component.html"),
            styles: [__webpack_require__(/*! ./member-messages.component.css */ "./src/app/members/member-messages/member-messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\n    height: 100px;\n    width: 100px;\n    margin-bottom: 4px;\n}\n\n.row {\n    margin-bottom: 10px;\n}\n\n.my-drop-zone { \n    border: dotted 3px lightgray; \n}\n\n.nv-file-over { \n    border: dotted 3px red; \n}\n\n.another-file-over-class { \n    border: dotted 3px green; \n}\n\ninput[type=file] {\n    color: transparent;\n}"

/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2 text-center\" *ngFor=\"let photo of photos\">\n    <img src=\"{{photo.url}}\" alt=\"{{photo.description}}\" class=\"img-thumbnail\">\n    <div class=\"btn-group btn-group-sm\">\n        <button class=\"btn btn-xs btn-primary\" \n            (click)=\"setMainPhoto(photo)\"\n            [disabled]=\"photo.isMain\"\n            [ngClass]=\"photo.isMain ? 'btn-success' : 'btn-default'\">Main</button>\n        <button class=\"btn btn-xs btn-danger\" (click)=\"deletePhoto(photo.id)\" [disabled]=\"photo.isMain\"><i class=\"fa fa-trash-o\"></i></button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n \n  <div class=\"col-md-3\">\n\n      <h3>Select photos</h3>\n\n      <div ng2FileDrop\n           [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n           (fileOver)=\"fileOverBase($event)\"\n           [uploader]=\"uploader\"\n           class=\"card card-block my-drop-zone py-4 px-2 m-2\">\n          Drop photos here\n      </div>\n\n      Multiple\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n\n      Single\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </div>\n\n  <div class=\"col-md-9\" style=\"margin-bottom: 40px;\" *ngIf='uploader?.queue?.length'>\n\n      <h3>Upload queue</h3>\n      <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n      <table class=\"table\">\n          <thead>\n          <tr>\n              <th width=\"50%\">Name</th>\n              <th>Size</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let item of uploader.queue\">\n              <td><strong>{{ item?.file?.name }}</strong></td>\n              <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n          </tr>\n          </tbody>\n      </table>\n\n      <div>\n          <div>\n              Queue progress:\n              <div class=\"progress\">\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n              </div>\n          </div>\n          <button type=\"button\" class=\"btn btn-success btn-s\"\n                  (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n              <span class=\"glyphicon glyphicon-upload\"></span> Upload\n          </button>\n          <button type=\"button\" class=\"btn btn-warning btn-s\"\n                  (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n              <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n          </button>\n          <button type=\"button\" class=\"btn btn-danger btn-s\"\n                  (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n              <span class=\"glyphicon glyphicon-trash\"></span> Remove\n          </button>\n      </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alertify.service */ "./src/app/services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.getMemberPhotoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hasBaseDropZoneOver = false;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: this.baseURL + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                _this.photos.push(photo);
                if (photo.isMain) {
                    _this.authService.changeMemberPhoto(photo.url);
                    _this.authService.currentUser.photoURL = photo.url;
                    localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(function () {
            _this.currentMain = _this.photos.filter(function (p) { return p.isMain === true; })[0];
            _this.currentMain.isMain = false;
            photo.isMain = true;
            _this.authService.changeMemberPhoto(photo.url);
            _this.authService.currentUser.photoURL = photo.url;
            localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this photo??', function () {
            _this.userService.deletePhoto(_this.authService.decodedToken.nameid, id).subscribe(function () {
                _this.photos.splice(_this.photos.findIndex(function (p) { return p.id === id; }));
                _this.alertify.success('Photo deleted successfully');
            }, function (error) {
                _this.alertify.error('Failed to delete photo');
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhotoEditorComponent.prototype, "getMemberPhotoChange", void 0);
    PhotoEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__(/*! ./photo-editor.component.html */ "./src/app/members/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__(/*! ./photo-editor.component.css */ "./src/app/members/photo-editor/photo-editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    margin-top: 15px;\n  }\n  \n  .rounded-circle {\n    max-height: 50px;\n  }\n  \n  .table > tbody > tr > td {\n    vertical-align: middle;\n  }\n  "

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row py-3\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope\"></i> Unread\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope-open\"></i> Inbox\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-paper-plane\"></i> Outbox\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length == 0\">\n    <h3>No messages</h3>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\n      <tr>\n        <th style=\"width: 40%\">Message</th>\n        <th style=\"width: 20%\">From / To</th>\n        <th style=\"width: 20%\">Sent / Received</th>\n        <th style=\"width: 20%\"></th>\n      </tr>\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members', \n        messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab:'3'}\">\n        <td>{{message.content}}</td>\n        <td>\n          <div *ngIf=\"messageContainer != 'Outbox'\">\n            <img [src]=\"message.senderPhotoUrl\" class=\"rounded-circle\">\n            <strong>{{message.senderKnownAs}}</strong>\n          </div>\n          <div *ngIf=\"messageContainer == 'Outbox'\">\n            <img [src]=\"message.recipientPhotoUrl\" class=\"rounded-circle\">\n            <strong>{{message.recipientKnownAs}}</strong>\n          </div>\n        </td>\n        <td>{{message.messageSent | timeAgo}}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\">Delete</button>\n        </td>\n      </tr>\n    </table>\n\n    <div class=\"container py-3\" *ngIf=\"pagination.totalItems > pagination.itemsPerPage\">\n      <div class=\"text-center\">\n        <pagination class=\"d-inline-flex\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" (pageChanged)=\"pageChanged($event)\"\n          [itemsPerPage]=\"pagination.itemsPerPage\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(userService, route, alertify, authService) {
        this.userService = userService;
        this.route = route;
        this.alertify = alertify;
        this.authService = authService;
        this.messageContainer = 'Unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.messages = data['messages'].result;
            _this.pagination = data['messages'].pagination;
        });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
            .subscribe(function (res) {
            _this.messages = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete this mesage????', function () {
            _this.userService.deleteMessage(id, _this.authService.decodedToken.nameid).subscribe(function () {
                _this.messages.splice(underscore__WEBPACK_IMPORTED_MODULE_5__["findIndex"](_this.messages, { id: id }), 1);
                _this.alertify.success('The message has been deleted');
            }, function (error) {
                _this.alertify.error('Error while deleting the message');
            });
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/models/Pagination.ts":
/*!**************************************!*\
  !*** ./src/app/models/Pagination.ts ***!
  \**************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu, .dropdown-toggle {\n    cursor: pointer;\n}\n\n.dropdown-item :hover{\n    color:white;\n}\n\nimg {\n    max-height: 50px;\n    border: 2px solid white;\n    display: inline;\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg sticky-top navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >Hook-Me-Up</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbar\" >\n    <ul class=\"navbar-nav mr-auto\" *ngIf=\"loggedIn()\">\n      <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/members']\" routerLinkActive=\"router-link-active\" >Matches</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/lists']\" routerLinkActive=\"router-link-active\" >Lists</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/messages']\" routerLinkActive=\"router-link-active\" >Messages</a></li>\n    </ul>\n\n    <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-right\">\n      <li>\n        <img src=\"{{photoUrl}}\" alt=\"\">\n      </li>\n      <li class=\"nav-item dropdown\" dropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" dropdownToggle>Welcome {{authService.decodedToken?.unique_name | titlecase}}</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" *dropdownMenu>\n          <a class=\"dropdown-item\" [routerLink]=\"['/member/edit']\" routerLinkActive=\"router-link-active\" >Edit profile</a>\n          <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n        </div>\n      </li>\n    </ul>\n\n    <form #loginForm=\"ngForm\" *ngIf=\"!loggedIn()\" class=\"form-inline ml-auto my-2 my-lg-0\" (ngSubmit)=\"login()\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Username\" required name=\"username\" [(ngModel)]=\"model.Username\" aria-label=\"Search\">\n      <input class=\"form-control mr-sm-2\"  type=\"password\" placeholder=\"Password\" required name=\"password\" [(ngModel)]=\"model.Password\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" [disabled]=\"!loginForm.valid\">Sign In</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) {
            _this.photoUrl = photoUrl;
        });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) {
            _this.alertify.success('Logged in succesfully');
        }, function (error) {
            _this.alertify.error('Failed to login user');
        }, function () {
            _this.router.navigate(['/messages']);
        });
    };
    NavComponent.prototype.logout = function () {
        this.authService.userToken = null;
        this.authService.currentUser = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.alertify.message('logged out successfully');
        this.router.navigate(['/home']);
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-label-group {\n    width: 50%;\n    margin-left: 17rem;\n}\n\nspan {\n    text-align: left;\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" class=\"d-flex w-10 h-100 p-5 mx-auto flex-column text-center form-signin\">\n  <div class=\"text-center mb-2\">\n    <h1 class=\"mb-3 font-weight-normal\">Get started. Sign up below</h1>\n    <hr />\n  </div>\n\n  <div class=\"form-group mb-2\">\n    <label class=\"control-label\" style=\"margin-right:5px\">I am a: </label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\" value=\"male\" style=\"margin-right:5px\" formControlName=\"gender\">Male\n    </label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\" value=\"female\" style=\"margin-right:5px\" formControlName=\"gender\">Female\n    </label>\n  </div>\n\n  <div class=\"form-label-group mb-2\">\n    <input type=\"email\" formControlName=\"username\" class=\"form-control\" placeholder=\"Username\" [ngClass]=\"{'is-invalid': registerForm.get('username').errors && registerForm.get('username').touched}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('username').hasError('required') && registerForm.get('username').touched\">\n      Username is required\n    </span>\n  </div>\n\n  <div class=\"form-label-group mb-2\">\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{'is-invalid': registerForm.get('password').errors && registerForm.get('password').touched}\"\n      placeholder=\"Password\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('username').touched\">\n      Password is required\n    </span>\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('username').touched\">\n      Password must be atleast 4 characters\n    </span>\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('username').touched\">\n      Password cannot exceed 8 characters\n    </span>\n  </div>\n\n  <div class=\"form-label-group mb-2\">\n    <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors \n        && registerForm.get('confirmPassword').touched || registerForm.getError('mismatch') && registerForm.get('confirmPassword').touched}\"\n      placeholder=\"Confirm Password\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\">\n      This is required\n    </span>\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.getError('mismatch') && registerForm.get('confirmPassword').touched\">\n      Confirm password must match password\n    </span>\n  </div>\n\n  <div class=\"form-label-group mb-2\">\n    <input class=\"form-control\" placeholder=\"Known as\" formControlName=\"knownAs\" [ngClass]=\"{'is-invalid': registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')\">\n      Known as is required\n    </span>\n  </div>\n\n  <div class=\"form-label-group mb-2\">\n    <input class=\"form-control\" type=\"text\" bsDatepicker placeholder=\"Date of Birth\" formControlName=\"dateOfBirth\" [ngClass]=\"{'is-invalid': registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')\">\n      Date of birth is required\n    </span>\n  </div>\n\n  <div class=\"form-label-group mb-2\">\n    <input class=\"form-control\" placeholder=\"City\" formControlName=\"city\" [ngClass]=\"{'is-invalid': registerForm.get('city').touched && registerForm.get('city').hasError('required')}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('city').touched && registerForm.get('city').hasError('required')\">\n      City is required\n    </span>\n  </div>\n\n  <div class=\"form-label-group mb-2\">\n    <input class=\"form-control\" placeholder=\"Country\" formControlName=\"country\" [ngClass]=\"{'is-invalid': registerForm.get('country').touched && registerForm.get('country').hasError('required')}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('country').touched && registerForm.get('country').hasError('required')\">\n      Country is required\n    </span>\n  </div>\n\n  <div>\n    <button class=\"btn btn-lg btn-primary\" type=\"submit\" [disabled]=\"!registerForm.valid\">Sign up</button>\n    <button class=\"btn btn-lg btn-danger\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n\n  <!-- <p>\n    {{registerForm.value | json}}\n  </p> -->\n</form>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify, formBuilder, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)
                ]
            ],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ['male'],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateOfBirth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: this.passwordMatchValidator
        });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (grp) {
        return grp.get('password').value === grp.get('confirmPassword').value
            ? null
            : { mismatch: true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration success!');
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/members']);
                });
            });
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/resolvers/lists.resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/resolvers/lists.resolver.ts ***!
  \*********************************************/
/*! exports provided: ListsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsResolver", function() { return ListsResolver; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListsResolver = /** @class */ (function () {
    function ListsResolver(userService, router, alertifyService) {
        this.userService = userService;
        this.router = router;
        this.alertifyService = alertifyService;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.likesParam = 'Likers';
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertifyService.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    ListsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], ListsResolver);
    return ListsResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/member-detail.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/resolvers/member-detail.resolver.ts ***!
  \*****************************************************/
/*! exports provided: MemberDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailResolver", function() { return MemberDetailResolver; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberDetailResolver = /** @class */ (function () {
    function MemberDetailResolver(userService, router, alertifyService) {
        this.userService = userService;
        this.router = router;
        this.alertifyService = alertifyService;
    }
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertifyService.error('Problem retreiving data');
            _this.router.navigate(['/members/']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    MemberDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/member-edit.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/resolvers/member-edit.resolver.ts ***!
  \***************************************************/
/*! exports provided: MemberEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditResolver", function() { return MemberEditResolver; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberEditResolver = /** @class */ (function () {
    function MemberEditResolver(userService, router, alertifyService, authService) {
        this.userService = userService;
        this.router = router;
        this.alertifyService = alertifyService;
        this.authService = authService;
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertifyService.error('Problem retreiving data');
            _this.router.navigate(['/home/']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MemberEditResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MemberEditResolver);
    return MemberEditResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/member-list.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/resolvers/member-list.resolver.ts ***!
  \***************************************************/
/*! exports provided: MemberListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListResolver", function() { return MemberListResolver; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, alertifyService) {
        this.userService = userService;
        this.router = router;
        this.alertifyService = alertifyService;
        this.pageSize = 5;
        this.pageNumber = 1;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertifyService.error('Problem retreiving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    MemberListResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], MemberListResolver);
    return MemberListResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/message.resolver.ts":
/*!***********************************************!*\
  !*** ./src/app/resolvers/message.resolver.ts ***!
  \***********************************************/
/*! exports provided: MessagesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesResolver", function() { return MessagesResolver; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagesResolver = /** @class */ (function () {
    function MessagesResolver(userService, router, alertifyService, authService) {
        this.userService = userService;
        this.router = router;
        this.alertifyService = alertifyService;
        this.authService = authService;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.messageContainer = 'Unread';
    }
    MessagesResolver.prototype.resolve = function (route) {
        var _this = this;
        debugger;
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertifyService.error('Problem retreiving data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    MessagesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MessagesResolver);
    return MessagesResolver;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _guard_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard/prevent-unsaved-changes.guard */ "./src/app/guard/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/member-detail.resolver */ "./src/app/resolvers/member-detail.resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/member-list.resolver */ "./src/app/resolvers/member-list.resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/member-edit.resolver */ "./src/app/resolvers/member-edit.resolver.ts");
/* harmony import */ var _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/lists.resolver */ "./src/app/resolvers/lists.resolver.ts");
/* harmony import */ var _resolvers_message_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/message.resolver */ "./src/app/resolvers/message.resolver.ts");













var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            { path: 'members', component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_3__["MemberListComponent"], resolve: { users: _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_8__["MemberListResolver"] } },
            { path: 'members/:id', component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_4__["MemberDetailComponent"], resolve: { user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_7__["MemberDetailResolver"] } },
            {
                path: 'member/edit',
                component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_9__["MemberEditComponent"],
                canDeactivate: [_guard_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_6__["PreventUnsavedChanges"]],
                resolve: { user: _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_10__["MemberEditResolver"] }
            },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"], resolve: { messages: _resolvers_message_resolver__WEBPACK_IMPORTED_MODULE_12__["MessagesResolver"] } },
            { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_1__["ListsComponent"], resolve: { users: _resolvers_lists_resolver__WEBPACK_IMPORTED_MODULE_11__["ListsResolver"] } }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallBack) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallBack();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseURL = 'http://localhost:5000/api/auth/';
        this.defaultPhotoUrl = '../../assets/user.png';
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultPhotoUrl);
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemberPhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseURL + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (user) {
                localStorage.setItem('token', user.tokenString);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.userToken = user.tokenString;
                _this.decodedToken = _this.jwtHelperService.decodeToken(_this.userToken);
                _this.currentUser = user.user;
                console.log(_this.decodedToken);
                if (_this.currentUser.photoURL != null) {
                    _this.changeMemberPhoto(_this.currentUser.photoURL);
                }
                else {
                    _this.changeMemberPhoto(_this.defaultPhotoUrl);
                }
            }
        }));
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseURL + 'register', user);
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var applicationError = error.headers.get('Application-Error');
            if (applicationError) {
                console.error(applicationError);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
            }
            var serverError = error.error;
            var modelStateErrors = '';
            if (serverError && typeof serverError === 'object') {
                for (var key in serverError) {
                    if (serverError[key]) {
                        modelStateErrors += serverError[key] + '\n';
                    }
                }
            }
            else {
                modelStateErrors = 'Internal Server Error';
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modelStateErrors || serverError || 'Server Error');
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Pagination */ "./src/app/models/Pagination.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(authHttp) {
        this.authHttp = authHttp;
        this.baseURL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likeParams) {
        var paginatedResult = new _models_Pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (likeParams === 'Likers') {
            params = params.append('Likers', 'true');
        }
        else if (likeParams === 'Likees') {
            params = params.append('Likees', 'true');
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        return this.authHttp
            .get(this.baseURL + 'users', { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getUser = function (id) {
        return this.authHttp.get(this.baseURL + 'users/' + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.authHttp.put(this.baseURL + 'users/' + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, Id) {
        return this.authHttp.post(this.baseURL + 'users/' + userId + '/photos/' + Id + '/setMain', {});
    };
    UserService.prototype.deletePhoto = function (userId, Id) {
        return this.authHttp.delete(this.baseURL + 'users/' + userId + '/photos/' + Id);
    };
    UserService.prototype.sendLike = function (id, recipientId) {
        return this.authHttp.post(this.baseURL + 'users/' + id + '/like/' + recipientId, {});
    };
    UserService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        // debugger;
        var paginatedResult = new _models_Pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page).append('itemsPerPage', itemsPerPage);
        }
        return this.authHttp.get(this.baseURL + 'users/' + id + '/messages', { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getMessagesThread = function (id, recipientId) {
        return this.authHttp.get(this.baseURL + 'users/' + id + '/messages/thread/' + recipientId);
    };
    UserService.prototype.sendMessage = function (id, message) {
        return this.authHttp.post(this.baseURL + 'users/' + id + '/messages/', message);
    };
    UserService.prototype.deleteMessage = function (id, userId) {
        return this.authHttp.post(this.baseURL + 'users/' + userId + '/messages/' + id, {});
    };
    UserService.prototype.markAsRead = function (id, userId) {
        this.authHttp.post(this.baseURL + 'users/' + userId + '/messages/' + id + '/read', {}).subscribe();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], UserService);
    return UserService;
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
var environment = {
    production: true,
    apiURL: 'http://localhost:5000/api/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiURL: 'http://localhost:5000/api/'
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mohith/Desktop/JS/DatingApp/DatingApp.SPA/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map