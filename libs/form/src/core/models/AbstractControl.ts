import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

import { ValidationErrors, ValidatorFn } from './Validator';
import { FormControl } from './FormControl';
import { FormGroup } from '@ionar/form';

/**
 * This is the base class for `FormControl`, `FormGroup.ts`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 *
 * @publicApi
 */
export abstract class AbstractControl {

  /** @internal */
  public readonly pendingValue: any;

  /**
   * The current value of the control.
   *
   * * For a `FormControl`, the current value.
   * * For a `FormGroup`, the values of enabled controls as an object with a key-value pair for each member of the group.
   * * For a `FormArray`, the values of enabled controls as an array.
   *
   */
  public readonly value: any;

  /**
   * An object containing any errors generated by failing validation,
   * or null if there are no errors.
   */

  public readonly errors: ValidationErrors | null;

  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  public readonly touched: boolean = false;

  /**
   * A control is `pristine` if the user has not yet changed the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  public readonly pristine: boolean = true;

  /**
   * The validation status of the control. There are four possible
   * validation status values:
   *
   * * **VALID**: This control has passed all validation checks.
   * * **INVALID**: This control has failed at least one validation check.
   * * **PENDING**: This control is in the midst of conducting a validation check.
   * * **DISABLED**: This control is exempt from validation checks.
   *
   * These status values are mutually exclusive, so a control cannot be both valid AND invalid or invalid AND disabled.
   */
  public readonly status: string;

  public readonly validator: ValidatorFn | null;

  public readonly asyncValidator: ValidatorFn | null;

  public _asyncValidationSubscription: any;

  private _parent: FormGroup;

  /**
   * A multicasting observable that emits an event every time the value of the control changes, in
   * the UI or programmatically.
   */
  public readonly valueChanges: Observable<any>;

  /**
   * A multicasting observable that emits an event every time the validation `status` of the control
   * recalculates.
   */
  public readonly statusChanges: Observable<any>;


  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @see `status`
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   */
  get enabled(): boolean {
    return this.status !== DISABLED;
  }

  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * @see `status`
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled(): boolean {
    return this.status === DISABLED;
  }

  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see `status`
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid(): boolean {
    return this.status === VALID;
  }

  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see `status`
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid(): boolean {
    return this.status === INVALID;
  }

  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see `status`
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending(): boolean {
    return this.status === PENDING;
  }

  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty(): boolean {
    return !this.pristine;
  }


  /**
   * The parent control.
   */
  get parent(): FormGroup {
    return this._parent;
  }


  /**
   * Marks the control as `touched`. A control is touched by focus and
   * blur events that do not change the value; compare `markAsDirty`;
   *
   *  @param opts Configuration options that determine how the control propagates changes
   * and emits events events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsTouched(): void {
    (this as { touched: boolean }).touched = true;

    this.updateValueAndValidity({ onlySelf: true });
  }

  /**
   * Marks the control as `untouched`.
   *
   * If the control has any children, also marks all children as `untouched`
   * and recalculates the `touched` status of all parent controls.
   *
   *  @param opts Configuration options that determine how the control propagates changes
   * and emits events after the marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts: { onlySelf?: boolean } = {}): void {
    (this as { touched: boolean }).touched = false;
  }

  /**
   * Marks the control as `dirty`. A control becomes dirty when
   * the control's value is changed through the UI; compare `markAsTouched`.
   *
   *  @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   */
  markAsDirty(opts: { onlySelf?: boolean } = {}): void {
    (this as { pristine: boolean }).pristine = false;
  }

  /**
   * Marks the control as `pristine`.
   *
   * If the control has any children, marks all children as `pristine`,
   * and recalculates the `pristine` status of all parent
   * controls.
   *
   *  @param opts Configuration options that determine how the control emits events after
   * marking is applied.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false..
   */
  markAsPristine(opts: { onlySelf?: boolean } = {}): void {
    (this as { pristine: boolean }).pristine = true;
  }

  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @usageNotes
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
   */
  setErrors(errors: ValidationErrors | null, opts: { emitEvent?: boolean } = {}): void {
    (this as { errors: ValidationErrors | null }).errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }


  /**
   * @param parent Sets the parent of the control
   */
  setParent(parent: FormGroup): void {
    this._parent = parent;
  }


  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false..
   * * `emitEvent`: When true or not supplied (the default), emit the `valueChanges` event
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      this._updateValidity(opts);

    }


    if (opts.emitEvent !== false) {
      (this.valueChanges as EventEmitter<any>).emit(this.value);
      (this.statusChanges as EventEmitter<any>).emit(this.status);
    }

    if (this._parent && !opts.onlySelf) {

      this._parent.updateValueAndValidity(opts);
    }

  }


  /** @internal */
  _initObservables() {
    (this as { valueChanges: Observable<any> }).valueChanges = new EventEmitter();
    (this as { statusChanges: Observable<any> }).statusChanges = new EventEmitter();
  }


  private _setInitialStatus() {
    (this as { status: string }).status = this._allControlsDisabled() ? DISABLED : VALID;
  }


  /** @internal */
  _updateValue(): void {

  }

  /** @internal */
  _updateValidity(opts: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {

  }


  /** @internal */
  _updateControlsErrors(emitEvent: boolean): void {
    (this as { status: string }).status = this._calculateStatus();

    if (emitEvent) {
      (this.statusChanges as EventEmitter<string>).emit(this.status);
    }
  }


  /** @internal */
  abstract _calculateStatus(): string


  /**
   * Sets the value of the control. Abstract method (implemented in sub-classes).
   */
  abstract setValue(value: any, options?: Object): void;

  /**
   * Resets the control. Abstract method (implemented in sub-classes).
   */
  abstract reset(value?: any, options?: Object): void;

  /**
   * Clear the control. Abstract method (implemented in sub-classes).
   */
  abstract clear(options?: Object): void;

  /** @internal */
  abstract _allControlsDisabled(): boolean;
}


/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 */
export const VALID = 'VALID';

/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 */
export const INVALID = 'INVALID';

/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 */
export const PENDING = 'PENDING';

/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */
export const DISABLED = 'DISABLED';

export type FormHooks = 'change' | 'blur' | 'submit';
