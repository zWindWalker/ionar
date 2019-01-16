"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ControlContainer_1 = require("./ControlContainer");
/**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */
var /**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */
IoControl = /** @class */ (function (_super) {
    tslib_1.__extends(IoControl, _super);
    function IoControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IoControl.prototype, "control", {
        /**
         * @description
         * Tracks the `FormControl` instance bound to the directive.
         */
        get: /**
         * \@description
         * Tracks the `FormControl` instance bound to the directive.
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.root.get(this.path)));
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(IoControl.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */
        function () {
            return this.parent ? tslib_1.__spread(this.parent.path, [this.name]) : [];
        },
        enumerable: true,
        configurable: true
    });
    return IoControl;
}(ControlContainer_1.ControlContainer));
exports.IoControl = IoControl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2ludGVyZmFjZXMvSW9Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT0EsdURBQXNEOzs7Ozs7Ozs7QUFjdEQ7Ozs7Ozs7OztJQUF3QyxxQ0FBZ0I7SUFBeEQ7O0lBcUJBLENBQUM7SUFmQyxzQkFBVyw4QkFBTztRQUpsQjs7O1dBR0c7Ozs7OztRQUNIO1lBRUUsT0FBTyxtQkFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUEsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFRRixzQkFBSSwyQkFBSTtRQUxSOzs7O1dBSUc7Ozs7Ozs7UUFDSDtZQUVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUF3QyxtQ0FBZ0IsR0FxQnZEO0FBckJxQiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciB9IGZyb20gJy4vQ29udHJvbENvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgeyBGb3JtQ29udHJvbH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Db250cm9sJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBiYXNlIGNsYXNzIHRoYXQgYWxsIGNvbnRyb2wgYEZvcm1Db250cm9sYC1iYXNlZCBkaXJlY3RpdmVzIGV4dGVuZC4gSXQgYmluZHMgYSBgRm9ybUNvbnRyb2xgXHJcbiAqIG9iamVjdCB0byBhIERPTSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJb0NvbnRyb2wgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVHJhY2tzIHRoZSBgRm9ybUNvbnRyb2xgIGluc3RhbmNlIGJvdW5kIHRvIHRoZSBkaXJlY3RpdmUuXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcclxuXHJcbiAgICByZXR1cm4gPEZvcm1Db250cm9sPnRoaXMucm9vdC5nZXQodGhpcy5wYXRoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogUmV0dXJucyBhbiBhcnJheSB0aGF0IHJlcHJlc2VudHMgdGhlIHBhdGggZnJvbSB0aGUgdG9wLWxldmVsIGZvcm0gdG8gdGhpcyBjb250cm9sLlxyXG4gICAqIEVhY2ggaW5kZXggaXMgdGhlIHN0cmluZyBuYW1lIG9mIHRoZSBjb250cm9sIG9uIHRoYXQgbGV2ZWwuXHJcbiAgICovXHJcbiAgZ2V0IHBhdGgoKTogc3RyaW5nW10ge1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IFsuLi50aGlzLnBhcmVudC5wYXRoLCB0aGlzLm5hbWVdIDogW107XHJcbiAgfVxyXG59XHJcbiJdfQ==