import { TemplateRef } from '@angular/core';

import { AsyncValidatorFn, ValidationConfigs } from './Validator';

/**
 * Interface for configs provided to an `AbstractControl`.
 *
 * @publicApi
 */
export interface ControlConfig {
  name: string,
  type: ControlType,
  label?: string,
  value?: any,
  options?: Array<{ value: any, label: any, [property: string]: any }>,
  props?: ControlProperties,
  validators?: ValidationConfigs,
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  icons?: {
    valid?: any,
    invalid?: any,
    validating?: any
  }
}

export type ControlType = 'input' | 'select' | 'textarea' | 'radio' | 'upload'


export interface ControlProperties {

  placeholder?: string,
  template?: TemplateRef<any>,
  className?: string,
  id?: string,
  disable?: Boolean,
  hidden?: Boolean,
  exclude?: Boolean

  [key: string]: any
}
