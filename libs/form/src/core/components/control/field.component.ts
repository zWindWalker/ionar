import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  OnChanges,
  OnDestroy,
  OnInit, Optional,
  SimpleChanges, SkipSelf, TemplateRef, ViewChild
} from '@angular/core';

import { FormService } from '../../providers/form.service';
import { FormControlComponent } from '../form-control.component';
import { isEmptyTemplate } from '@ionar/ui';


@Component({
  selector: 'form-field',
  template: `
      <ng-container
              dynamic_field
              [name]="_parent.name"
              [control]="_parent.control"
              [root]="_parent.root"
              [events]="{
                    change: onChanged,
                    blur: onTouched,
                    enter: onEntered
              }"
              [template]="template"
      >
      </ng-container>
  `,

  styles: [`
      :host {
          display: flex;
          width: 100%;
          height: 100%;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldComponent implements OnInit, AfterViewInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  /**
   * @description
   * The parent  for the component
   *
   * @internal
   */
  _parent: FormControlComponent | null = null;

  get template(): TemplateRef<any> {
    return this._parent.controlTemplateDir && this._parent.controlTemplateDir.templateRef;
  };

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  constructor(
    private cd: ChangeDetectorRef,
    @Optional() @Host() @SkipSelf()  parent: FormControlComponent
  ) {

    this._parent = parent;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onChanged = e => {
    this._parent.control.setValue(e);
  };

  onTouched = () => {
    this._parent.control.markAsTouched();
  };

  onEntered = () => {
    // this.formSvs._onEntered()
    // if (this.name === 'password') this.focus = true;
  };


}
