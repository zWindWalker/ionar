"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var collapsible_directive_1 = require("./collapsible.directive");
var utility_1 = require("@ionar/utility");
var ContentDirective = /** @class */ (function () {
    function ContentDirective(parent, cd, _vcRef, _templateRef) {
        this.cd = cd;
        this._vcRef = _vcRef;
        this._templateRef = _templateRef;
        this._parent = parent;
    }
    Object.defineProperty(ContentDirective.prototype, "collapsed", {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        set: 
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * @param {?} collapsed
         * @return {?}
         */
        function (collapsed) {
            if (collapsed) {
                this._vcRef.clear();
            }
            else {
                this._vcRef.createEmbeddedView(this._templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ContentDirective.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._vcRef.clear();
        this._parent.change$.pipe(utility_1.untilDestroyed(this)).subscribe(function (collapsed) {
            _this.collapsed = collapsed;
        });
    };
    /**
     * @return {?}
     */
    ContentDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ContentDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[collapseContent]'
                },] }
    ];
    /** @nocollapse */
    ContentDirective.ctorParameters = function () { return [
        { type: collapsible_directive_1.CollapsibleDirective, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf }] },
        { type: core_1.ChangeDetectorRef },
        { type: core_1.ViewContainerRef },
        { type: core_1.TemplateRef }
    ]; };
    return ContentDirective;
}());
exports.ContentDirective = ContentDirective;
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype._templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2NvbGxhcHNpYmxlL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBVXVCO0FBQ3ZCLGlFQUErRDtBQUMvRCwwQ0FBZ0Q7QUFJaEQ7SUFrQkUsMEJBQ2tDLE1BQTRCLEVBQ3BELEVBQXFCLEVBQ3JCLE1BQXdCLEVBQ3hCLFlBQThCO1FBRjlCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBbEJELHNCQUFJLHVDQUFTO1FBRmIsa0hBQWtIOzs7Ozs7O1FBRWxILFVBQWMsU0FBa0I7WUFDOUIsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUM7OztPQUFBO0lBZUQsd0hBQXdIOzs7OztJQUd4SCxtQ0FBUTs7Ozs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFNBQWtCO1lBQzNFLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtJQUNBLENBQUM7O2dCQXhDRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCOzs7O2dCQVBRLDRDQUFvQix1QkF3QnhCLGVBQVEsWUFBSSxXQUFJLFlBQUksZUFBUTtnQkFsQ04sd0JBQWlCO2dCQVFuQix1QkFBZ0I7Z0JBQTdCLGtCQUFXOztJQWtEdkIsdUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQXhDWSw0Q0FBZ0I7Ozs7OztJQVkzQixtQ0FBc0M7Ozs7O0lBS3BDLDhCQUE2Qjs7Ozs7SUFDN0Isa0NBQWdDOzs7OztJQUNoQyx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCwgRGlyZWN0aXZlLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xsYXBzaWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XG5pbXBvcnQgeyBlbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvdGVzdGluZy9zcmMvYnJvd3Nlcl91dGlsJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29sbGFwc2VDb250ZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBzZXQgY29sbGFwc2VkKGNvbGxhcHNlZDogQm9vbGVhbikge1xuICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuX3ZjUmVmLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50OiBDb2xsYXBzaWJsZURpcmVjdGl2ZTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgQFNraXBTZWxmKCkgcGFyZW50OiBDb2xsYXBzaWJsZURpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PlxuICApIHtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdmNSZWYuY2xlYXIoKTtcbiAgICB0aGlzLl9wYXJlbnQuY2hhbmdlJC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKGNvbGxhcHNlZDogQm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cblxufVxuIl19