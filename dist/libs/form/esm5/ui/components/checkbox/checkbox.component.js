/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        var _this = this;
        this.title = '';
        this.value = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.invalid = false;
        this.onClick = function () {
            _this.value = !_this.value;
            _this.change.emit(_this.value);
        };
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-checkbox',
                    template: "<div class=\"checkbox\" [class.active]=\"value\">\r\n    <i class=\"fas fa-check icon\"></i>\r\n</div>\r\n<p class=\"label\">{{label}}</p>\r\n\r\n\r\n",
                    styles: [":host{display:flex;align-items:center}:host .checkbox{background-color:#fff;border-radius:.3em;box-sizing:border-box;border:1px solid #d9d9d9;display:flex;align-items:center;justify-content:center;margin-right:.3em;padding:0;touch-action:manipulation;transition:.3s;width:1.8em;height:1.8em}:host .checkbox:hover{border-color:#1890ff}:host .checkbox.active{background-color:#1890ff;border-color:#1890ff}:host .icon{color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        label: [{ type: Input }],
        title: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        invalid: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.label;
    /** @type {?} */
    CheckboxComponent.prototype.title;
    /** @type {?} */
    CheckboxComponent.prototype.value;
    /** @type {?} */
    CheckboxComponent.prototype.change;
    /** @type {?} */
    CheckboxComponent.prototype.blur;
    /** @type {?} */
    CheckboxComponent.prototype.invalid;
    /** @type {?} */
    CheckboxComponent.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0Y7SUFxQkU7UUFBQSxpQkFDQztRQWRRLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN0QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBSWxDLFlBQU8sR0FBRztZQUNSLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUM7SUFHRixDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsa0tBQXdDOztpQkFFekM7Ozs7O3dCQUdFLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLE1BQU07dUJBQ04sTUFBTTswQkFDTixLQUFLOzBCQUdMLFlBQVksU0FBQyxPQUFPOztJQVd2Qix3QkFBQztDQUFBLEFBMUJELElBMEJDO1NBckJZLGlCQUFpQjs7O0lBRTVCLGtDQUF1Qjs7SUFDdkIsa0NBQXlCOztJQUN6QixrQ0FBZ0M7O0lBQ2hDLG1DQUFzQzs7SUFDdEMsaUNBQW9DOztJQUNwQyxvQ0FBa0M7O0lBR2xDLG9DQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogYW55ID0gJyc7XHJcbiAgQElucHV0KCkgdmFsdWU6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy52YWx1ZSA9ICF0aGlzLnZhbHVlO1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxufVxyXG4iXX0=