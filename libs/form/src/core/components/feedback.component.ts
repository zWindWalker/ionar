import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../providers/form.service';
import { AbstractControl } from '../models/AbstractControl';
import _ from 'lodash';
import { untilDestroyed } from '@aurora-ngx/ui';

@Component({
  selector: 'feedback',
  template: `
      <ng-container *ngIf="show_feedback">
          <ng-container *ngIf="invalid">
              <ng-container *ngFor="let err of error_list">
                  {{err}}
              </ng-container>

          </ng-container>
      </ng-container>
  `,
  //language=SCSS
  styles: [`
      :host {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          color: #f5222d;
          font-size: 1.2rem;
          margin-top: 0.5rem;
      }
  `]
})
export class FeedbackComponent implements OnInit, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() name: string;
  protected _control: AbstractControl;

  invalid: Boolean = false;
  error_list: string[] | null;
  show_feedback: Boolean = true;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private _formSvs: FormService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this._control = this._formSvs.getControl(this.name);

    this._control.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
      this.invalid = this._control.invalid && (this._control.dirty || this._control.touched);

      this.error_list = _.map(this._control.errors, (value, key) => this.generate_feedback(key));

      this.cd.detectChanges();

    });

  }


  generate_feedback = validator => {

    // const feedback = this._control.validateOptions.feedback
    const feedback = {};
    if (!validator) return null;
    // const feedback = {
    //   ...this.config.feedback
    // };
    //
    switch (validator) {
      case 'required':
        if (this.name === 'confirm_password') {
          return feedback['required'] || `You need to confirm password`;
        }
        return feedback['required'] || `${_.startCase(this.name)}  is required`;
      case 'confirm_password':
        return feedback['confirm_password'] || `Password not match`;
      case 'agreement':
        return feedback['agreement'] || `You must agree to the terms and conditions before continuing!`;
      case 'email' :
        return feedback['email'] || `Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'`;
      case 'email_existed':
        return feedback['email_existed'] || `${_.startCase(this.name)} is existed! Please use another one`;
    }


  };

  ngOnChanges(changes): void {

  }


  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}