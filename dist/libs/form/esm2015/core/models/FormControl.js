/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AbstractControl, DISABLED, INVALID, PENDING, VALID } from './AbstractControl';
import { Validators } from './Validator';
import _ from 'lodash';
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup.ts` and `FormArray`. It extends the `IonarAbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `IonarAbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * \@usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 * ```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * \@publicApi
 */
export class FormControl extends AbstractControl {
    /**
     * Creates a new `FormControl` instance.
     *
     * @param {?} configs Initializes the control with an object that defines the initial state.
     *
     */
    constructor(configs) {
        super();
        this._runAsyncValidator = _.debounce((emitEvent) => {
            if (this.asyncValidator) {
                ((/** @type {?} */ (this))).status = PENDING;
                /** @type {?} */
                const obs = this.asyncValidator(this);
                this._asyncValidationSubscription =
                    obs.subscribe((errors) => {
                        if ((this.touched || this.dirty) && this.value) {
                            ((/** @type {?} */ (this))).status = INVALID;
                            this.setErrors(errors, { emitEvent });
                        }
                    });
            }
        }, 500);
        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this overwrites any existing sync validators.
         */
        this._setValidators = (validators) => {
            ((/** @type {?} */ (this))).validator = coerceToValidator(validators);
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         */
        this._setAsyncValidators = (asyncValidators) => {
            ((/** @type {?} */ (this))).asyncValidator = coerceToAsyncValidator(asyncValidators);
        };
        this._applyControlState = () => {
            ((/** @type {?} */ (this))).value = ((/** @type {?} */ (this.configuration))).value || null;
            // state.disabled ? this.disable({onlySelf: true, emitEvent: false}) :
            //         this.enable({onlySelf: true, emitEvent: false});
        };
        this.storeConfig((/** @type {?} */ (configs)));
        this._setValidators(configs.validators);
        this._setAsyncValidators(configs.asyncValidator);
        this._initObservables();
        this._applyControlState();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Sets a new value for the form control.
     *
     * @param {?} value The new value for the control.
     * @param {?=} options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     * @return {?}
     */
    setValue(value, options = {}) {
        ((/** @type {?} */ (this))).value = value;
        this.markAsDirty();
        this.updateValueAndValidity(options);
        if (_.has(((/** @type {?} */ (this.configuration))).props, ['submitOnChange']) || _.has((/** @type {?} */ (this.parent.configuration)), ['submitOnChange'])) {
            this.parent.submit(true);
        }
    }
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} value
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    reset(value = null, options = {}) {
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this._applyControlState();
        this.updateValueAndValidity(options);
    }
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    clear(options = {}) {
        this.markAsPristine(options);
        this.markAsUntouched(options);
        ((/** @type {?} */ (this))).value = null;
        this.updateValueAndValidity(options);
    }
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    setErrors(errors, opts = {}) {
        ((/** @type {?} */ (this))).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * @return {?}
     */
    _runValidator() {
        return this.validator ? this.validator(this) : null;
    }
    /**
     * @return {?}
     */
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _calculateStatus() {
        if (this.disabled)
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this.pending)
            return PENDING;
        return VALID;
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updateValidity(opts = {}) {
        this._cancelExistingSubscription();
        ((/** @type {?} */ (this))).errors = this._runValidator();
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (this.status === VALID || this.status === PENDING) {
            this._runAsyncValidator(opts.emitEvent);
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        return this.disabled;
    }
}
if (false) {
    /** @type {?} */
    FormControl.prototype._runAsyncValidator;
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     * @type {?}
     * @private
     */
    FormControl.prototype._setValidators;
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     * @type {?}
     * @private
     */
    FormControl.prototype._setAsyncValidators;
    /**
     * @type {?}
     * @private
     */
    FormControl.prototype._applyControlState;
}
/**
 * @param {?} validators
 * @return {?}
 */
function coerceToValidator(validators) {
    return Validators.compose(convertToValidatorFn(validators));
}
;
/**
 * @param {?} validators
 * @return {?}
 */
function convertToValidatorFn(validators) {
    return _.map(validators, (value, key) => {
        if (!_.has(Validators, key))
            return null;
        return Validators[key];
    });
}
/**
 * @param {?} asyncValidators
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidators) {
    return _.isArray(asyncValidators) ? Validators.composeAsync(_.map(asyncValidators, (value, key) => value)) : asyncValidators || null;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvbW9kZWxzL0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXZGLE9BQU8sRUFBc0UsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdHLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxR3ZCLE1BQU0sT0FBTyxXQUFZLFNBQVEsZUFBZTs7Ozs7OztJQVM5QyxZQUFZLE9BQXNCO1FBQ2hDLEtBQUssRUFBRSxDQUFDO1FBc0lWLHVCQUFrQixHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFtQixFQUFFLEVBQUU7WUFFdEQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN2QixDQUFDLG1CQUFBLElBQUksRUFBc0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7O3NCQUN4QyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyw0QkFBNEI7b0JBQy9CLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUErQixFQUFFLEVBQUU7d0JBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOzRCQUM5QyxDQUFDLG1CQUFBLElBQUksRUFBc0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7NEJBQzlDLElBQUksQ0FBQyxTQUFTLENB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cEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBY0Qsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7OztJQWxGQyx5Q0FhUTs7Ozs7OztJQWFSLHFDQUlFOzs7Ozs7O0lBTUYsMENBRUU7Ozs7O0lBOEJGLHlDQUtFOzs7Ozs7QUFZSixTQUFTLGlCQUFpQixDQUFDLFVBQTZCO0lBRXRELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFBQSxDQUFDOzs7OztBQUVGLFNBQVMsb0JBQW9CLENBQUMsVUFBNkI7SUFDekQsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFekMsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDOzs7OztBQUVELFNBQVMsc0JBQXNCLENBQUMsZUFBNkQ7SUFFM0YsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBdUIsRUFBRSxHQUFHLEVBQTJCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDO0FBQ2xMLENBQUM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBESVNBQkxFRCwgSU5WQUxJRCwgUEVORElORywgVkFMSUQgfSBmcm9tICcuL0Fic3RyYWN0Q29udHJvbCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb25maWcsIEZvcm1Db25maWdzIH0gZnJvbSAnLi9Db250cm9sQ29uZmlnJztcclxuaW1wb3J0IHsgQXN5bmNWYWxpZGF0b3JGbiwgVmFsaWRhdGlvbkNvbmZpZ3MsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnLi9WYWxpZGF0b3InO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuXHJcblxyXG4vKipcclxuICogVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgYW4gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2wuXHJcbiAqXHJcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3Mgb2YgQW5ndWxhciBmb3JtcywgYWxvbmcgd2l0aFxyXG4gKiBgRm9ybUdyb3VwLnRzYCBhbmQgYEZvcm1BcnJheWAuIEl0IGV4dGVuZHMgdGhlIGBJb25hckFic3RyYWN0Q29udHJvbGAgY2xhc3MgdGhhdFxyXG4gKiBpbXBsZW1lbnRzIG1vc3Qgb2YgdGhlIGJhc2UgZnVuY3Rpb25hbGl0eSBmb3IgYWNjZXNzaW5nIHRoZSB2YWx1ZSwgdmFsaWRhdGlvbiBzdGF0dXMsXHJcbiAqIHVzZXIgaW50ZXJhY3Rpb25zIGFuZCBldmVudHMuXHJcbiAqXHJcbiAqIEBzZWUgYElvbmFyQWJzdHJhY3RDb250cm9sYFxyXG4gKiBAc2VlIFtSZWFjdGl2ZSBGb3JtcyBHdWlkZV0oZ3VpZGUvcmVhY3RpdmUtZm9ybXMpXHJcbiAqIEBzZWUgW1VzYWdlIE5vdGVzXSgjdXNhZ2Utbm90ZXMpXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBJbml0aWFsaXppbmcgRm9ybSBDb250cm9sc1xyXG4gKlxyXG4gKiBJbnN0YW50aWF0ZSBhIGBGb3JtQ29udHJvbGAsIHdpdGggYW4gaW5pdGlhbCB2YWx1ZS5cclxuICpcclxuICogYGBgdHNcclxuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnc29tZSB2YWx1ZScpO1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgICAgIC8vICdzb21lIHZhbHVlJ1xyXG4gKmBgYFxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgaW5pdGlhbGl6ZXMgdGhlIGNvbnRyb2wgd2l0aCBhIGZvcm0gc3RhdGUgb2JqZWN0LiBUaGUgYHZhbHVlYFxyXG4gKiBhbmQgYGRpc2FibGVkYCBrZXlzIGFyZSByZXF1aXJlZCBpbiB0aGlzIGNhc2UuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogJ24vYScsIGRpc2FibGVkOiB0cnVlIH0pO1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgICAgIC8vICduL2EnXHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wuc3RhdHVzKTsgICAgLy8gJ0RJU0FCTEVEJ1xyXG4gKiBgYGBcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGluaXRpYWxpemVzIHRoZSBjb250cm9sIHdpdGggYSBzeW5jIHZhbGlkYXRvci5cclxuICpcclxuICogYGBgdHNcclxuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAgICAgIC8vICcnXHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wuc3RhdHVzKTsgICAgIC8vICdJTlZBTElEJ1xyXG4gKiBgYGBcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGluaXRpYWxpemVzIHRoZSBjb250cm9sIHVzaW5nIGFuIG9wdGlvbnMgb2JqZWN0LlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCB7XHJcbiAqICAgIHZhbGlkYXRvcnM6IFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAqICAgIGFzeW5jVmFsaWRhdG9yczogbXlBc3luY1ZhbGlkYXRvclxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBDb25maWd1cmUgdGhlIGNvbnRyb2wgdG8gdXBkYXRlIG9uIGEgYmx1ciBldmVudFxyXG4gKlxyXG4gKiBTZXQgdGhlIGB1cGRhdGVPbmAgb3B0aW9uIHRvIGAnYmx1cidgIHRvIHVwZGF0ZSBvbiB0aGUgYmx1ciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCB7IHVwZGF0ZU9uOiAnYmx1cicgfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgQ29uZmlndXJlIHRoZSBjb250cm9sIHRvIHVwZGF0ZSBvbiBhIHN1Ym1pdCBldmVudFxyXG4gKlxyXG4gKiBTZXQgdGhlIGB1cGRhdGVPbmAgb3B0aW9uIHRvIGAnc3VibWl0J2AgdG8gdXBkYXRlIG9uIGEgc3VibWl0IGBldmVudGAuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIHsgdXBkYXRlT246ICdzdWJtaXQnIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFJlc2V0IHRoZSBjb250cm9sIGJhY2sgdG8gYW4gaW5pdGlhbCB2YWx1ZVxyXG4gKlxyXG4gKiBZb3UgcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgdGhyb3VnaCBhIHN0YW5kYWxvbmVcclxuICogdmFsdWUgb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0ZVxyXG4gKiAodGhlc2UgYXJlIHRoZSBvbmx5IHR3byBwcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNhbGN1bGF0ZWQpLlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdOYW5jeScpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgLy8gJ05hbmN5J1xyXG4gKlxyXG4gKiBjb250cm9sLnJlc2V0KCdEcmV3Jyk7XHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAvLyAnRHJldydcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBSZXNldCB0aGUgY29udHJvbCBiYWNrIHRvIGFuIGluaXRpYWwgdmFsdWUgYW5kIGRpc2FibGVkXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdOYW5jeScpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgLy8gJ05hbmN5J1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnN0YXR1cyk7IC8vICdWQUxJRCdcclxuICpcclxuICogY29udHJvbC5yZXNldCh7IHZhbHVlOiAnRHJldycsIGRpc2FibGVkOiB0cnVlIH0pO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgLy8gJ0RyZXcnXHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wuc3RhdHVzKTsgLy8gJ0RJU0FCTEVEJ1xyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sIHtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgYEZvcm1Db250cm9sYCBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb25maWdzIEluaXRpYWxpemVzIHRoZSBjb250cm9sIHdpdGggYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgaW5pdGlhbCBzdGF0ZS5cclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3M6IENvbnRyb2xDb25maWcpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdG9yZUNvbmZpZyhjb25maWdzIGFzIENvbnRyb2xDb25maWcpO1xyXG4gICAgdGhpcy5fc2V0VmFsaWRhdG9ycyhjb25maWdzLnZhbGlkYXRvcnMpO1xyXG4gICAgdGhpcy5fc2V0QXN5bmNWYWxpZGF0b3JzKGNvbmZpZ3MuYXN5bmNWYWxpZGF0b3IpO1xyXG4gICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XHJcbiAgICB0aGlzLl9hcHBseUNvbnRyb2xTdGF0ZSgpO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyB2YWx1ZSBmb3IgdGhlIGZvcm0gY29udHJvbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY29udHJvbC5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb29wYWdhdGVzIGNoYW5nZXNcclxuICAgKiBhbmQgZW1pdHMgZXZlbnRzIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXHJcbiAgICogVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBhcmUgcGFzc2VkIHRvIHRoZSB7QGxpbmsgSW9uYXJBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxyXG4gICAqIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHl9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcclxuICAgKiBmYWxzZS5cclxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcclxuICAgKiBgdmFsdWVDaGFuZ2VzYFxyXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgaXMgdXBkYXRlZC5cclxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXHJcbiAgICogKiBgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlYDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAgKHRoZSBkZWZhdWx0KSwgZWFjaCBjaGFuZ2UgdHJpZ2dlcnMgYW5cclxuICAgKiBgb25DaGFuZ2VgIGV2ZW50IHRvXHJcbiAgICogdXBkYXRlIHRoZSB2aWV3LlxyXG4gICAqICogYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgZWFjaCBjaGFuZ2UgdHJpZ2dlcnMgYW5cclxuICAgKiBgbmdNb2RlbENoYW5nZWBcclxuICAgKiBldmVudCB0byB1cGRhdGUgdGhlIG1vZGVsLlxyXG4gICAqXHJcbiAgICovXHJcbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb3B0aW9uczoge1xyXG4gICAgb25seVNlbGY/OiBib29sZWFuLFxyXG4gICAgZW1pdEV2ZW50PzogYm9vbGVhblxyXG4gIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyB2YWx1ZTogYW55IH0pLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm1hcmtBc0RpcnR5KCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKF8uaGFzKCg8Q29udHJvbENvbmZpZz50aGlzLmNvbmZpZ3VyYXRpb24pLnByb3BzLCBbJ3N1Ym1pdE9uQ2hhbmdlJ10pIHx8IF8uaGFzKDxGb3JtQ29uZmlncz50aGlzLnBhcmVudC5jb25maWd1cmF0aW9uLCBbJ3N1Ym1pdE9uQ2hhbmdlJ10pKSB7XHJcblxyXG4gICAgICB0aGlzLnBhcmVudC5zdWJtaXQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB0aGUgZm9ybSBjb250cm9sLCBtYXJraW5nIGl0IGBwcmlzdGluZWAgYW5kIGB1bnRvdWNoZWRgLCBhbmQgc2V0dGluZ1xyXG4gICAqIHRoZSB2YWx1ZSB0byBudWxsLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZvcm1TdGF0ZSBSZXNldHMgdGhlIGNvbnRyb2wgd2l0aCBhbiBpbml0aWFsIHZhbHVlLFxyXG4gICAqIG9yIGFuIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIGluaXRpYWwgdmFsdWUgYW5kIGRpc2FibGVkIHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcclxuICAgKiBhbmQgZW1pdHMgZXZlbnRzIGFmdGVyIHRoZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gICAqXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIGVhY2ggY2hhbmdlIG9ubHkgYWZmZWN0cyB0aGlzIGNvbnRyb2wsIGFuZCBub3QgaXRzIHBhcmVudC4gRGVmYXVsdCBpc1xyXG4gICAqIGZhbHNlLlxyXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxyXG4gICAqIGB2YWx1ZUNoYW5nZXNgXHJcbiAgICogb2JzZXJ2YWJsZXMgZW1pdCBldmVudHMgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyBhbmQgdmFsdWUgd2hlbiB0aGUgY29udHJvbCBpcyByZXNldC5cclxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXHJcbiAgICpcclxuICAgKi9cclxuICByZXNldCh2YWx1ZTogYW55ID0gbnVsbCwgb3B0aW9uczogeyBvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcmtBc1ByaXN0aW5lKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5tYXJrQXNVbnRvdWNoZWQob3B0aW9ucyk7XHJcbiAgICB0aGlzLl9hcHBseUNvbnRyb2xTdGF0ZSgpO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBmb3JtIGNvbnRyb2wsIG1hcmtpbmcgaXQgYHByaXN0aW5lYCBhbmQgYHVudG91Y2hlZGAsIGFuZCBzZXR0aW5nXHJcbiAgICogdGhlIHZhbHVlIHRvIG51bGwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZm9ybVN0YXRlIFJlc2V0cyB0aGUgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgdmFsdWUsXHJcbiAgICogb3IgYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgaW5pdGlhbCB2YWx1ZSBhbmQgZGlzYWJsZWQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgYWZ0ZXIgdGhlIHZhbHVlIGNoYW5nZXMuXHJcbiAgICpcclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgZWFjaCBjaGFuZ2Ugb25seSBhZmZlY3RzIHRoaXMgY29udHJvbCwgYW5kIG5vdCBpdHMgcGFyZW50LiBEZWZhdWx0IGlzXHJcbiAgICogZmFsc2UuXHJcbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBib3RoIHRoZSBgc3RhdHVzQ2hhbmdlc2AgYW5kXHJcbiAgICogYHZhbHVlQ2hhbmdlc2BcclxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIHJlc2V0LlxyXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cclxuICAgKlxyXG4gICAqL1xyXG4gIGNsZWFyKG9wdGlvbnM6IHsgb25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXJrQXNQcmlzdGluZShvcHRpb25zKTtcclxuICAgIHRoaXMubWFya0FzVW50b3VjaGVkKG9wdGlvbnMpO1xyXG4gICAgKHRoaXMgYXMgeyB2YWx1ZTogYW55IH0pLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGVycm9ycyBvbiBhIGZvcm0gY29udHJvbCB3aGVuIHJ1bm5pbmcgdmFsaWRhdGlvbnMgbWFudWFsbHksIHJhdGhlciB0aGFuIGF1dG9tYXRpY2FsbHkuXHJcbiAgICpcclxuICAgKiBDYWxsaW5nIGBzZXRFcnJvcnNgIGFsc28gdXBkYXRlcyB0aGUgdmFsaWRpdHkgb2YgdGhlIHBhcmVudCBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKiAjIyMgTWFudWFsbHkgc2V0IHRoZSBlcnJvcnMgZm9yIGEgY29udHJvbFxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogY29uc3QgbG9naW4gPSBuZXcgRm9ybUNvbnRyb2woJ3NvbWVMb2dpbicpO1xyXG4gICAqIGxvZ2luLnNldEVycm9ycyh7XHJcbiAgICogICBub3RVbmlxdWU6IHRydWVcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbChmYWxzZSk7XHJcbiAgICogZXhwZWN0KGxvZ2luLmVycm9ycykudG9FcXVhbCh7IG5vdFVuaXF1ZTogdHJ1ZSB9KTtcclxuICAgKlxyXG4gICAqIGxvZ2luLnNldFZhbHVlKCdzb21lT3RoZXJMb2dpbicpO1xyXG4gICAqXHJcbiAgICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKHRydWUpO1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIHNldEVycm9ycyhlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsLCBvcHRzOiB7IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgfSkuZXJyb3JzID0gZXJyb3JzO1xyXG4gICAgdGhpcy5fdXBkYXRlQ29udHJvbHNFcnJvcnMob3B0cy5lbWl0RXZlbnQgIT09IGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuICBfcnVuVmFsaWRhdG9yKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvciA/IHRoaXMudmFsaWRhdG9yKHRoaXMpIDogbnVsbDtcclxuICB9XHJcblxyXG5cclxuICBfcnVuQXN5bmNWYWxpZGF0b3IgPSBfLmRlYm91bmNlKChlbWl0RXZlbnQ/OiBib29sZWFuKSA9PiB7XHJcblxyXG4gICAgaWYgKHRoaXMuYXN5bmNWYWxpZGF0b3IpIHtcclxuICAgICAgKHRoaXMgYXMgeyBzdGF0dXM6IHN0cmluZyB9KS5zdGF0dXMgPSBQRU5ESU5HO1xyXG4gICAgICBjb25zdCBvYnMgPSB0aGlzLmFzeW5jVmFsaWRhdG9yKHRoaXMpO1xyXG4gICAgICB0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24gPVxyXG4gICAgICAgIG9icy5zdWJzY3JpYmUoKGVycm9yczogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpID0+IHtcclxuICAgICAgICAgIGlmICgodGhpcy50b3VjaGVkIHx8IHRoaXMuZGlydHkpICYmIHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgKHRoaXMgYXMgeyBzdGF0dXM6IHN0cmluZyB9KS5zdGF0dXMgPSBJTlZBTElEO1xyXG4gICAgICAgICAgICB0aGlzLnNldEVycm9ycyhlcnJvcnMsIHsgZW1pdEV2ZW50IH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIDUwMCk7XHJcblxyXG4gIF9jYW5jZWxFeGlzdGluZ1N1YnNjcmlwdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgc3luY2hyb25vdXMgdmFsaWRhdG9ycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhpcyBjb250cm9sLiAgQ2FsbGluZ1xyXG4gICAqIHRoaXMgb3ZlcndyaXRlcyBhbnkgZXhpc3Rpbmcgc3luYyB2YWxpZGF0b3JzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NldFZhbGlkYXRvcnMgPSAodmFsaWRhdG9yczogVmFsaWRhdGlvbkNvbmZpZ3MgfCBudWxsKSA9PiB7XHJcblxyXG4gICAgKHRoaXMgYXMgeyB2YWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgbnVsbCB9KS52YWxpZGF0b3IgPSBjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3JzKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgYXN5bmMgdmFsaWRhdG9ycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhpcyBjb250cm9sLiBDYWxsaW5nIHRoaXNcclxuICAgKiBvdmVyd3JpdGVzIGFueSBleGlzdGluZyBhc3luYyB2YWxpZGF0b3JzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NldEFzeW5jVmFsaWRhdG9ycyA9IChhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuW10gfCBudWxsKTogdm9pZCA9PiB7XHJcbiAgICAodGhpcyBhcyB7IGFzeW5jVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiB8IG51bGwgfSkuYXN5bmNWYWxpZGF0b3IgPSBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKGFzeW5jVmFsaWRhdG9ycyk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfY2FsY3VsYXRlU3RhdHVzKCk6IHN0cmluZyB7XHJcblxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybiBESVNBQkxFRDtcclxuICAgIGlmICh0aGlzLmVycm9ycykgcmV0dXJuIElOVkFMSUQ7XHJcbiAgICBpZiAodGhpcy5wZW5kaW5nKSByZXR1cm4gUEVORElORztcclxuXHJcbiAgICByZXR1cm4gVkFMSUQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3VwZGF0ZVZhbHVlKCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfdXBkYXRlVmFsaWRpdHkob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLl9jYW5jZWxFeGlzdGluZ1N1YnNjcmlwdGlvbigpO1xyXG4gICAgKHRoaXMgYXMgeyBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIH0pLmVycm9ycyA9IHRoaXMuX3J1blZhbGlkYXRvcigpO1xyXG4gICAgKHRoaXMgYXMgeyBzdGF0dXM6IHN0cmluZyB9KS5zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09IFZBTElEIHx8IHRoaXMuc3RhdHVzID09PSBQRU5ESU5HKSB7XHJcbiAgICAgIHRoaXMuX3J1bkFzeW5jVmFsaWRhdG9yKG9wdHMuZW1pdEV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIF9hcHBseUNvbnRyb2xTdGF0ZSA9ICgpID0+IHtcclxuXHJcbiAgICAodGhpcyBhcyB7IHZhbHVlOiBhbnkgfSkudmFsdWUgPSAoPENvbnRyb2xDb25maWc+dGhpcy5jb25maWd1cmF0aW9uKS52YWx1ZSB8fCBudWxsO1xyXG4gICAgLy8gc3RhdGUuZGlzYWJsZWQgPyB0aGlzLmRpc2FibGUoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSkgOlxyXG4gICAgLy8gICAgICAgICB0aGlzLmVuYWJsZSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KTtcclxuICB9O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgX2FsbENvbnRyb2xzRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3JzOiBWYWxpZGF0aW9uQ29uZmlncyk6IFZhbGlkYXRvckZuIHwgbnVsbCB7XHJcblxyXG4gIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UoY29udmVydFRvVmFsaWRhdG9yRm4odmFsaWRhdG9ycykpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVmFsaWRhdG9yRm4odmFsaWRhdG9yczogVmFsaWRhdGlvbkNvbmZpZ3MpOiBWYWxpZGF0b3JGbltdIHtcclxuICByZXR1cm4gXy5tYXAodmFsaWRhdG9ycywgKHZhbHVlLCBrZXkpID0+IHtcclxuICAgIGlmICghXy5oYXMoVmFsaWRhdG9ycywga2V5KSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIFZhbGlkYXRvcnNba2V5XTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29lcmNlVG9Bc3luY1ZhbGlkYXRvcihhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuW10gfCBudWxsKTogQXN5bmNWYWxpZGF0b3JGbiB8IG51bGwge1xyXG5cclxuICByZXR1cm4gXy5pc0FycmF5KGFzeW5jVmFsaWRhdG9ycykgPyBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhfLm1hcChhc3luY1ZhbGlkYXRvcnMsICh2YWx1ZTogQXN5bmNWYWxpZGF0b3JGbiwga2V5KTogQXN5bmNWYWxpZGF0b3JGbiB8IG51bGwgPT4gdmFsdWUpKSA6IGFzeW5jVmFsaWRhdG9ycyB8fCBudWxsO1xyXG59O1xyXG4iXX0=