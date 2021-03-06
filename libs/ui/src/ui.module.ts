import { NgModule } from '@angular/core';

import { ElementModule } from './elements/element.module';
import { ComponentModule } from './components/component.module';
import { DirectiveModule } from './directives/directive.module';
import { PackagesModule } from './packages/packages.module';
import { DefaultContentModule } from './elements/default-content/default-content.module';

@NgModule({
  imports: [
    ComponentModule,
    ElementModule,
    PackagesModule,

    DirectiveModule,

    DefaultContentModule
  ],
  exports: [
    ComponentModule,
    ElementModule,
    PackagesModule,
    DirectiveModule,

    DefaultContentModule
  ]
})
export class IonarUI {
}
