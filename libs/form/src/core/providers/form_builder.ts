import { FormGroup } from '../models/FormGroup';
import { ControlConfig, FormConfigs } from '../models/ControlConfig';
import { Injectable } from '@angular/core';

@Injectable()

export class IonarFormBuilder {


  group = (formState: ControlConfig[], formConfigs?: FormConfigs): FormGroup => {

    return new FormGroup(formState, formConfigs);
  };
}


