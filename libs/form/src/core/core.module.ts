import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

import { FieldComponent } from './components/field.component';

import { SubmitDirective } from './directives/submit.directive';


import { ControlComponent } from './components/control.component';
import { LabelComponent } from './components/label.component';
import { FeedbackComponent } from './components/feedback.component';
import { FormComponent } from './core.component';
import { FieldTemplateDirective } from './directives/field-template.directive';


@NgModule({
  declarations: [
    FormComponent,
    FieldComponent, ControlComponent, LabelComponent, FeedbackComponent, FieldTemplateDirective,
    DynamicFieldDirective, SubmitDirective
  ],

  imports: [CommonModule],
  exports: [
    FormComponent,
    FieldComponent,
    SubmitDirective,
    ControlComponent,
    LabelComponent, FeedbackComponent, FieldTemplateDirective
  ]
})
export class CoreModule {
}
