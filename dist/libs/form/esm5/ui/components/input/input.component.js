/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
var InputComponent = /** @class */ (function () {
    function InputComponent(cd) {
        var _this = this;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.type = '';
        this.name = '';
        this.placeholder = '';
        this.value = null;
        this.invalid = false;
        this.disabled = false;
        this.range = [];
        this.readonly = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.enter = new EventEmitter();
        this.host_focus = false;
        this.host_invalid = false;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onFocus = function () {
            _this.host_focus = true;
        };
        this.onBlur = function () {
            _this.blur.emit();
            _this.host_focus = false;
            _this.cd.markForCheck();
        };
        this.onChange = function (e) {
            e.stopPropagation();
            /** @type {?} */
            var value = e.target.value;
            /** @type {?} */
            var min = parseInt(_this.range[0], 10);
            /** @type {?} */
            var max = parseInt(_this.range[1], 10);
            if (_this.range && _this.type === 'number' && !(min <= value && value <= max)) {
                value = e.target.value = _this.range[1];
            }
            _this.change.emit(value);
        };
        //  Keyboard & Clipboard Event  //
        this.onKeyPress = function (e) {
            if (e.keyCode === 13)
                _this.enter.emit();
        };
        this.onKeyDown = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberKeyDown(e)
                : (_this.type === 'phone')
                    ? _this.onPhoneKeyDown(e)
                    : null;
        };
        this.onPaste = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberPaste(e)
                : (_this.type === 'phone')
                    ? _this.onPhonePaste(e)
                    : null;
        };
        // Ensure that it is a number from [0-9] no decimal_point
        this.onPhoneKeyDown = function (e) {
            // Allow
            if (e.keyCode === 8 || // backspace
                e.keyCode === 9 || // Tab
                e.keyCode === 13 || // enter
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) || //  Ctrl + A
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) || //  Ctrl + C
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || //  Ctrl + X
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) || //  Ctrl + V
                (e.keyCode >= 35 && e.keyCode <= 39) // home, end, left, right
            ) {
                return;
            }
            // Reject if not a number or numpad
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && // not number
                (e.keyCode < 96 || e.keyCode > 105) // not numpad
            ) {
                e.preventDefault();
            }
        };
        // Ensure that pasted value is a number or string of number
        this.onPhonePaste = function (e) {
            if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
        // Ensure that it is a  number: integer || decimal
        this.onNumberKeyDown = function (e) {
            // Allow
            if (e.keyCode === 8 || // backspace
                e.keyCode === 9 || // Tab
                e.keyCode === 13 || // enter
                e.keyCode === 188 || // comma(",")
                e.keyCode === 110 || //   numpad decimal point
                e.keyCode === 190 || // period(".")
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) || //  Ctrl + A
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) || //  Ctrl + C
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || //  Ctrl + X
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) || //  Ctrl + V
                (e.keyCode >= 35 && e.keyCode <= 39) // home, end, left, right
            ) {
                return;
            }
            // Reject if not a number or numpad
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && // not number
                (e.keyCode < 96 || e.keyCode > 105) // not numpad
            ) {
                e.preventDefault();
            }
        };
        // Ensure that pasted value is a string of number: integer || decimal
        this.onNumberPaste = function (e) {
            if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        this.templateContext = {
            props: {
                value: this.value,
                type: this.type,
                name: this.name,
                placeholder: this.placeholder,
                invalid: this.invalid,
                disabled: this.disabled,
                range: this.range,
                readonly: this.readonly
            },
            events: {
                change: this.change,
                blur: this.blur,
                enter: this.enter,
                keydown: this.onKeyDown,
                keypress: this.onKeyPress,
                paste: this.onPaste
            }
        };
        this.host_invalid = this.invalid;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.host_invalid = this.invalid;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-input',
                    template: "<ng-container *ngIf=\"!template\">\r\n    <input\r\n            [type]=\"type\"\r\n            [name]=\"name\"\r\n            [placeholder]=\"placeholder\"\r\n            [value]=\"value\"\r\n            (input)=\"onChange($event)\"\r\n            (blur)=\"onBlur()\"\r\n            (focus)=\"onFocus()\"\r\n            (keydown)=\"onKeyDown($event)\"\r\n            (paste)=\"onPaste($event)\"\r\n            (keypress)=\"onKeyPress($event)\"\r\n\r\n            *ngIf=\"!(readonly || disabled)\"\r\n    >\r\n\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"template\">\r\n    <ng-container *ngTemplateOutlet=\"template; context:templateContext\"></ng-container>\r\n</ng-container>\r\n\r\n<span *ngIf=\"readonly || disabled\">\r\n          {{value}}\r\n      </span>\r\n<!--<ng-container-->\r\n<!--*ngIf=\"properties?.loading\"-->\r\n<!--&gt;-->\r\n<!--<svg version=\"1.1\"-->\r\n\r\n<!--class=\"loading_icon\"-->\r\n<!--xmlns=\"http://www.w3.org/2000/svg\"-->\r\n<!--x=\"0px\"-->\r\n<!--y=\"0px\"-->\r\n<!--viewBox=\"0 0 80 80\"-->\r\n<!--xml:space=\"preserve\"-->\r\n<!--&gt;-->\r\n<!--<path-->\r\n<!--fill=\"#D43B11\"-->\r\n<!--d=\"M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1-->\r\n<!--c0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1-->\r\n<!--c1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1-->\r\n<!--l0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5-->\r\n<!--c3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1-->\r\n<!--c0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9-->\r\n<!--c0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9-->\r\n<!--c0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2-->\r\n<!--c-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9-->\r\n<!--c-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1-->\r\n<!--c-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7-->\r\n<!--c-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1-->\r\n<!--c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z\"-->\r\n<!--&gt;-->\r\n<!--<animateTransform-->\r\n<!--attributeType=\"xml\"-->\r\n<!--attributeName=\"transform\"-->\r\n<!--type=\"rotate\"-->\r\n<!--from=\"0 40 40\"-->\r\n<!--to=\"360 40 40\"-->\r\n<!--dur=\"0.8s\"-->\r\n<!--repeatCount=\"indefinite\"-->\r\n<!--/>-->\r\n<!--</path>-->\r\n<!--<path-->\r\n<!--fill=\"#D43B11\"-->\r\n<!--d=\"M62,40.1c0,0,0,0.2-0.1,0.7c0,0.2,0,0.5-0.1,0.8c0,0.2,0,0.3,0,0.5c0,0.2-0.1,0.4-0.1,0.7-->\r\n<!--c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.5-0.3,1.1-0.5,1.8c-0.2,0.6-0.5,1.3-0.7,1.9c-0.3,0.7-0.7,1.3-1,2.1c-0.4,0.7-0.9,1.4-1.4,2.1-->\r\n<!--c-0.5,0.7-1.1,1.4-1.7,2c-1.2,1.3-2.7,2.5-4.4,3.6c-1.7,1-3.6,1.8-5.5,2.4c-2,0.5-4,0.7-6.2,0.7c-1.9-0.1-4.1-0.4-6-1.1-->\r\n<!--c-1.9-0.7-3.7-1.5-5.2-2.6c-1.5-1.1-2.9-2.3-4-3.7c-0.6-0.6-1-1.4-1.5-2c-0.4-0.7-0.8-1.4-1.2-2c-0.3-0.7-0.6-1.3-0.8-2-->\r\n<!--c-0.2-0.6-0.4-1.2-0.6-1.8c-0.1-0.6-0.3-1.1-0.4-1.6c-0.1-0.5-0.1-1-0.2-1.4c-0.1-0.9-0.1-1.5-0.1-2c0-0.5,0-0.7,0-0.7-->\r\n<!--s0,0.2,0.1,0.7c0.1,0.5,0,1.1,0.2,2c0.1,0.4,0.2,0.9,0.3,1.4c0.1,0.5,0.3,1,0.5,1.6c0.2,0.6,0.4,1.1,0.7,1.8-->\r\n<!--c0.3,0.6,0.6,1.2,0.9,1.9c0.4,0.6,0.8,1.3,1.2,1.9c0.5,0.6,1,1.3,1.6,1.8c1.1,1.2,2.5,2.3,4,3.2c1.5,0.9,3.2,1.6,5,2.1-->\r\n<!--c1.8,0.5,3.6,0.6,5.6,0.6c1.8-0.1,3.7-0.4,5.4-1c1.7-0.6,3.3-1.4,4.7-2.4c1.4-1,2.6-2.1,3.6-3.3c0.5-0.6,0.9-1.2,1.3-1.8-->\r\n<!--c0.4-0.6,0.7-1.2,1-1.8c0.3-0.6,0.6-1.2,0.8-1.8c0.2-0.6,0.4-1.1,0.5-1.7c0.1-0.5,0.2-1,0.3-1.5c0.1-0.4,0.1-0.8,0.1-1.2-->\r\n<!--c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.4,0-0.5c0-0.3,0-0.6,0-0.8c0-0.5,0-0.7,0-0.7c0-1.1,0.9-2,2-2s2,0.9,2,2C62,40,62,40.1,62,40.1z\"-->\r\n<!--&gt;-->\r\n<!--<animateTransform-->\r\n<!--attributeType=\"xml\"-->\r\n<!--attributeName=\"transform\"-->\r\n<!--type=\"rotate\"-->\r\n<!--from=\"0 40 40\"-->\r\n<!--to=\"-360 40 40\"-->\r\n<!--dur=\"0.6s\"-->\r\n<!--repeatCount=\"indefinite\"-->\r\n<!--/>-->\r\n<!--</path>-->\r\n<!--</svg>-->\r\n<!--</ng-container>-->",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.disabled]': 'disabled',
                        '[class.readonly]': 'readonly'
                    },
                    styles: [":host{background-color:transparent;border:1px solid #d9d9d9;border-radius:.4rem;color:#363636;display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem;outline:0;overflow:hidden;padding:0 1rem;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:auto;min-height:2.25em;max-height:5rem;max-width:100%}:host.focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid.focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}:host input{border:none;color:inherit;display:flex;flex:1px;font-size:inherit;font-weight:inherit;text-transform:inherit;text-decoration:inherit;outline:0;height:100%;max-width:100%;z-index:1}:host .loading_icon{width:10%}:host-context(.readonly){border:0}:host-context(.disabled){border:0}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    InputComponent.propDecorators = {
        type: [{ type: Input }],
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        value: [{ type: Input }],
        invalid: [{ type: Input }],
        disabled: [{ type: Input }],
        range: [{ type: Input }],
        readonly: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        enter: [{ type: Output }],
        template: [{ type: Input }],
        host_focus: [{ type: HostBinding, args: ['class.focus',] }],
        host_invalid: [{ type: HostBinding, args: ['class.invalid',] }]
    };
    return InputComponent;
}());
export { InputComponent };
if (false) {
    /** @type {?} */
    InputComponent.prototype.type;
    /** @type {?} */
    InputComponent.prototype.name;
    /** @type {?} */
    InputComponent.prototype.placeholder;
    /** @type {?} */
    InputComponent.prototype.value;
    /** @type {?} */
    InputComponent.prototype.invalid;
    /** @type {?} */
    InputComponent.prototype.disabled;
    /** @type {?} */
    InputComponent.prototype.range;
    /** @type {?} */
    InputComponent.prototype.readonly;
    /** @type {?} */
    InputComponent.prototype.change;
    /** @type {?} */
    InputComponent.prototype.blur;
    /** @type {?} */
    InputComponent.prototype.enter;
    /** @type {?} */
    InputComponent.prototype.template;
    /** @type {?} */
    InputComponent.prototype.host_focus;
    /** @type {?} */
    InputComponent.prototype.host_invalid;
    /** @type {?} */
    InputComponent.prototype.templateContext;
    /** @type {?} */
    InputComponent.prototype.onFocus;
    /** @type {?} */
    InputComponent.prototype.onBlur;
    /** @type {?} */
    InputComponent.prototype.onChange;
    /** @type {?} */
    InputComponent.prototype.onKeyPress;
    /** @type {?} */
    InputComponent.prototype.onKeyDown;
    /** @type {?} */
    InputComponent.prototype.onPaste;
    /** @type {?} */
    InputComponent.prototype.onPhoneKeyDown;
    /** @type {?} */
    InputComponent.prototype.onPhonePaste;
    /** @type {?} */
    InputComponent.prototype.onNumberKeyDown;
    /** @type {?} */
    InputComponent.prototype.onNumberPaste;
    /**
     * @type {?}
     * @private
     */
    InputComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUlMLE1BQU0sRUFBRSxXQUFXLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBdUNFLHdCQUFvQixFQUFxQjtRQUF6QyxpQkFDQztRQURtQixPQUFFLEdBQUYsRUFBRSxDQUFtQjs7UUF2QmhDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFRLElBQUksQ0FBQztRQUdsQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJVCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDOztRQWdENUQsWUFBTyxHQUFHO1lBQ1IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYsV0FBTSxHQUFHO1lBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxD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RSxVQUFVO3FCQUMvQjs7aUJBQ0Y7Ozs7Z0JBckJDLGlCQUFpQjs7O3VCQTRCaEIsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFHTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUVMLE1BQU07dUJBQ04sTUFBTTt3QkFDTixNQUFNOzJCQUVOLEtBQUs7NkJBRUwsV0FBVyxTQUFDLGFBQWE7K0JBQ3pCLFdBQVcsU0FBQyxlQUFlOztJQXdLOUIscUJBQUM7Q0FBQSxBQTFNRCxJQTBNQztTQS9MWSxjQUFjOzs7SUFLekIsOEJBQW1COztJQUNuQiw4QkFBbUI7O0lBQ25CLHFDQUEwQjs7SUFDMUIsK0JBQTJCOztJQUczQixpQ0FBa0M7O0lBQ2xDLGtDQUFtQzs7SUFDbkMsK0JBQW9COztJQUNwQixrQ0FBbUM7O0lBRW5DLGdDQUFzQzs7SUFDdEMsOEJBQW9DOztJQUNwQywrQkFBcUM7O0lBRXJDLGtDQUFvQzs7SUFFcEMsb0NBQXdEOztJQUN4RCxzQ0FBNEQ7O0lBRzVELHlDQUFnQjs7SUE2Q2hCLGlDQUVFOztJQUVGLGdDQUlFOztJQUVGLGtDQVdFOztJQUlGLG9DQUVFOztJQUVGLG1DQU1FOztJQUVGLGlDQU1FOztJQUtGLHdDQXdCRTs7SUFHRixzQ0FJRTs7SUFJRix5Q0EyQkU7O0lBR0YsdUNBSUU7Ozs7O0lBaEtVLDRCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LmNvbXBvbmVudC5odG1sYCxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcclxuICAgICdbY2xhc3MucmVhZG9ubHldJzogJ3JlYWRvbmx5J1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIEBJbnB1dCgpIHR5cGUgPSAnJztcclxuICBASW5wdXQoKSBuYW1lID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKSB2YWx1ZTogYW55ID0gbnVsbDtcclxuXHJcblxyXG4gIEBJbnB1dCgpIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJhbmdlID0gW107XHJcbiAgQElucHV0KCkgcmVhZG9ubHk6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzJykgaG9zdF9mb2N1czogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW52YWxpZCcpIGhvc3RfaW52YWxpZDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgdGVtcGxhdGVDb250ZXh0O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0ID0ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgaW52YWxpZDogdGhpcy5pbnZhbGlkLFxyXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxyXG4gICAgICAgIHJhbmdlOiB0aGlzLnJhbmdlLFxyXG4gICAgICAgIHJlYWRvbmx5OiB0aGlzLnJlYWRvbmx5XHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50czoge1xyXG4gICAgICAgIGNoYW5nZTogdGhpcy5jaGFuZ2UsXHJcbiAgICAgICAgYmx1cjogdGhpcy5ibHVyLFxyXG4gICAgICAgIGVudGVyOiB0aGlzLmVudGVyLFxyXG4gICAgICAgIGtleWRvd246IHRoaXMub25LZXlEb3duLFxyXG4gICAgICAgIGtleXByZXNzOiB0aGlzLm9uS2V5UHJlc3MsXHJcbiAgICAgICAgcGFzdGU6IHRoaXMub25QYXN0ZVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaG9zdF9pbnZhbGlkID0gdGhpcy5pbnZhbGlkO1xyXG5cclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuaG9zdF9pbnZhbGlkID0gdGhpcy5pbnZhbGlkO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIHRoaXMuaG9zdF9mb2N1cyA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgb25CbHVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoKTtcclxuICAgIHRoaXMuaG9zdF9mb2N1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9O1xyXG5cclxuICBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgbWluID0gcGFyc2VJbnQodGhpcy5yYW5nZVswXSwgMTApO1xyXG4gICAgY29uc3QgbWF4ID0gcGFyc2VJbnQodGhpcy5yYW5nZVsxXSwgMTApO1xyXG4gICAgaWYgKHRoaXMucmFuZ2UgJiYgdGhpcy50eXBlID09PSAnbnVtYmVyJyAmJiAhKG1pbiA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBtYXgpKSB7XHJcbiAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWUgPSB0aGlzLnJhbmdlWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xyXG5cclxuICB9O1xyXG5cclxuICAvLyAgS2V5Ym9hcmQgJiBDbGlwYm9hcmQgRXZlbnQgIC8vXHJcblxyXG4gIG9uS2V5UHJlc3MgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHRoaXMuZW50ZXIuZW1pdCgpO1xyXG4gIH07XHJcblxyXG4gIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMudHlwZSA9PT0gJ251bWJlcicpXHJcbiAgICAgID8gdGhpcy5vbk51bWJlcktleURvd24oZSlcclxuICAgICAgOiAodGhpcy50eXBlID09PSAncGhvbmUnKVxyXG4gICAgICAgID8gdGhpcy5vblBob25lS2V5RG93bihlKVxyXG4gICAgICAgIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBvblBhc3RlID0gKGU6IENsaXBib2FyZEV2ZW50KSA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMudHlwZSA9PT0gJ251bWJlcicpXHJcbiAgICAgID8gdGhpcy5vbk51bWJlclBhc3RlKGUpXHJcbiAgICAgIDogKHRoaXMudHlwZSA9PT0gJ3Bob25lJylcclxuICAgICAgICA/IHRoaXMub25QaG9uZVBhc3RlKGUpXHJcbiAgICAgICAgOiBudWxsO1xyXG4gIH07XHJcblxyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhIG51bWJlciBmcm9tIFswLTldIG5vIGRlY2ltYWxfcG9pbnRcclxuXHJcbiAgb25QaG9uZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgLy8gQWxsb3dcclxuICAgIGlmIChcclxuICAgICAgZS5rZXlDb2RlID09PSA4IHx8ICAgICAgLy8gYmFja3NwYWNlXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOSB8fCAgICAgICAgICAvLyBUYWJcclxuICAgICAgZS5rZXlDb2RlID09PSAxMyB8fCAgICAgICAvLyBlbnRlclxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgLy8gIEN0cmwgKyBBXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDY3ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgLy8gIEN0cmwgKyBDXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDg4ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgIC8vICBDdHJsICsgWFxyXG4gICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFZcclxuICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gMzkpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZWplY3QgaWYgbm90IGEgbnVtYmVyIG9yIG51bXBhZFxyXG4gICAgaWYgKFxyXG4gICAgICAoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJiAgICAgICAvLyBub3QgbnVtYmVyXHJcbiAgICAgIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBudW1wYWRcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IHBhc3RlZCB2YWx1ZSBpcyBhIG51bWJlciBvciBzdHJpbmcgb2YgbnVtYmVyXHJcbiAgb25QaG9uZVBhc3RlID0gKGU6IENsaXBib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIS9eXFxkKyQvLnRlc3QoZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKSkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhICBudW1iZXI6IGludGVnZXIgfHwgZGVjaW1hbFxyXG4gIG9uTnVtYmVyS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAvLyBBbGxvd1xyXG4gICAgaWYgKFxyXG4gICAgICBlLmtleUNvZGUgPT09IDggfHwgICAgICAvLyBiYWNrc3BhY2VcclxuICAgICAgZS5rZXlDb2RlID09PSA5IHx8ICAgICAgICAgIC8vIFRhYlxyXG4gICAgICBlLmtleUNvZGUgPT09IDEzIHx8ICAgICAgIC8vIGVudGVyXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gMTg4IHx8ICAgIC8vIGNvbW1hKFwiLFwiKVxyXG4gICAgICBlLmtleUNvZGUgPT09IDExMCB8fCAgICAgICAgLy8gICBudW1wYWQgZGVjaW1hbCBwb2ludFxyXG4gICAgICBlLmtleUNvZGUgPT09IDE5MCB8fCAgICAgICAgLy8gcGVyaW9kKFwiLlwiKVxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgLy8gIEN0cmwgKyBBXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDY3ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgLy8gIEN0cmwgKyBDXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDg4ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgIC8vICBDdHJsICsgWFxyXG4gICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFZcclxuICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gMzkpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZWplY3QgaWYgbm90IGEgbnVtYmVyIG9yIG51bXBhZFxyXG4gICAgaWYgKFxyXG4gICAgICAoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJiAgICAgICAvLyBub3QgbnVtYmVyXHJcbiAgICAgIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBudW1wYWRcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IHBhc3RlZCB2YWx1ZSBpcyBhIHN0cmluZyBvZiBudW1iZXI6IGludGVnZXIgfHwgZGVjaW1hbFxyXG4gIG9uTnVtYmVyUGFzdGUgPSAoZTogQ2xpcGJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmICghL15cXGQuKyQvLnRlc3QoZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKSkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxufVxyXG4iXX0=