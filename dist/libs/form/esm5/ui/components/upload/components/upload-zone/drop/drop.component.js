"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DropComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function DropComponent() {
        var _this = this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new core_1.EventEmitter();
        this.multiple = false;
        this.drop_hover = false;
        this.onDrop = function ($event) {
            event.preventDefault();
            _this.change.emit($event.dataTransfer.files);
            _this.drop_hover = false;
        };
        this.onDragOver = function ($event) {
            event.preventDefault();
            _this.drop_hover = true;
        };
        this.onDragLeave = function ($event) {
            event.preventDefault();
            _this.drop_hover = false;
        };
    }
    /**
     * @return {?}
     */
    DropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DropComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'drop',
                    template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n\r\n\r\n<input\r\n        type=\"file\"\r\n        [multiple]=\"multiple\"\r\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\r\n>",
                    styles: [":host{background-color:#fff;border:1px dashed #d9d9d9;border-radius:.4rem;color:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.drop_hover{border:2px dashed #40a9ff;color:#40a9ff}:host.drop_hover p{color:#40a9ff}:host p{transition:.3s cubic-bezier(.645,.045,.355,1)}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:hover p{color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{border:1px solid red;display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    DropComponent.ctorParameters = function () { return []; };
    DropComponent.propDecorators = {
        change: [{ type: core_1.Output }],
        multiple: [{ type: core_1.Input }],
        template: [{ type: core_1.Input }],
        drop_hover: [{ type: core_1.HostBinding, args: ['class.drop_hover',] }],
        onDrop: [{ type: core_1.HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: core_1.HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] }]
    };
    return DropComponent;
}());
exports.DropComponent = DropComponent;
if (false) {
    /** @type {?} */
    DropComponent.prototype.change;
    /** @type {?} */
    DropComponent.prototype.multiple;
    /** @type {?} */
    DropComponent.prototype.template;
    /** @type {?} */
    DropComponent.prototype.drop_hover;
    /** @type {?} */
    DropComponent.prototype.onDrop;
    /** @type {?} */
    DropComponent.prototype.onDragOver;
    /** @type {?} */
    DropComponent.prototype.onDragLeave;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdXBsb2FkL2NvbXBvbmVudHMvdXBsb2FkLXpvbmUvZHJvcC9kcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBdUg7QUFFdkg7SUFpQ0Usd0hBQXdIO0lBQ3hIO1FBQUEsaUJBQ0M7O1FBM0JTLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR0YsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUc3RCxXQUFNLEdBQUcsVUFBQSxNQUFNO1lBQ2IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBR0YsZUFBVSxHQUFHLFVBQUEsTUFBTTtZQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBR0YsZ0JBQVcsR0FBRyxVQUFBLE1BQU07WUFDbEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQztJQUlGLENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF0Q0YsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsNk9BQW9DOztpQkFFckM7Ozs7O3lCQUlFLGFBQU07MkJBQ04sWUFBSzsyQkFDTCxZQUFLOzZCQUVMLGtCQUFXLFNBQUMsa0JBQWtCO3lCQUU5QixtQkFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFPL0IsbUJBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBTW5DLG1CQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWdCdkMsb0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQXRDWSxzQ0FBYTs7O0lBR3hCLCtCQUFzQzs7SUFDdEMsaUNBQW1DOztJQUNuQyxpQ0FBb0M7O0lBRXBDLG1DQUE2RDs7SUFFN0QsK0JBS0U7O0lBRUYsbUNBSUU7O0lBRUYsb0NBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkcm9wJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3AuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG11bHRpcGxlOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZHJvcF9ob3ZlcicpIGRyb3BfaG92ZXI6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgb25Ecm9wID0gJGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoJGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgdGhpcy5kcm9wX2hvdmVyID0gZmFsc2U7XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdPdmVyID0gJGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZHJvcF9ob3ZlciA9IHRydWU7XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgb25EcmFnTGVhdmUgPSAkZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kcm9wX2hvdmVyID0gZmFsc2U7XG4gIH07XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbn1cbiJdfQ==