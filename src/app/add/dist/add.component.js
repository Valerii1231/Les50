"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddComponent = void 0;
var core_1 = require("@angular/core");
var AddComponent = /** @class */ (function () {
    function AddComponent() {
        this.onUser = new core_1.EventEmitter();
        this.name = '';
        this.status = '';
        this.url = '';
        this.inputName = '';
        this.inputStatus = '';
        this.inputUrl = '';
    }
    AddComponent.prototype.onName = function (event) {
        this.inputName = event.target.value;
    };
    AddComponent.prototype.onStatus = function (event) {
        this.inputStatus = event.target.value;
    };
    AddComponent.prototype.onUrl = function (event) {
        this.inputUrl = event.target.value;
    };
    AddComponent.prototype.addNewUser = function (inputName, inputStatus, inputUrl) {
        var value = {
            name: inputName,
            status: inputStatus,
            url: inputUrl
        };
        var arrStatus = value.status.split('');
        if (arrStatus.length > 50) {
            arrStatus.splice(50);
            value.status = arrStatus.join('');
        }
        this.onUser.emit(value);
        this.inputName = '';
        this.inputStatus = '';
        this.inputUrl = '';
    };
    __decorate([
        core_1.Output()
    ], AddComponent.prototype, "onUser");
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            templateUrl: './add.component.html',
            styleUrls: ['./add.component.scss']
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
