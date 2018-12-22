import { Subject } from 'rxjs';
import { untilDestroyed } from '@ionar/utility';
import _ from 'lodash';
import { CommonModule } from '@angular/common';
import { AnimationBuilder, useAnimation } from '@angular/animations';
import { slide_in_left, slide_in_right, slide_out_left, slide_out_right } from '@aurora-ngx/animations';
import { Component, HostBinding, HostListener, Input, NgModule, ElementRef, EventEmitter, Output, ViewChild, Directive, ContentChild, TemplateRef, ViewContainerRef, ChangeDetectorRef, ContentChildren, ChangeDetectionStrategy, Injectable, Renderer2, ComponentFactoryResolver } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlexElement {
}
FlexElement.decorators = [
    { type: Component, args: [{
                selector: 'flex',
                template: `
      <ng-content></ng-content>
  `,
                styles: [`
      :host {
          display: flex;
      }
  `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.animated = false;
        this.disabled = false;
        this.type = '';
        this.isDisabled = false;
        this.onClick = () => {
            if (!this.disabled) {
                this.animated = true;
                setTimeout(() => this.animated = false, 100);
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        switch (this.type) {
            case 'primary':
                this.primary_style = true;
                break;
            case 'danger':
                this.danger_style = true;
                break;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // console.log(this.disabled);
        this.isDisabled = this.disabled;
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-btn',
                template: `
      <ng-content></ng-content>
  `,
                styles: [":host{background-color:#fff;border:1px solid #d9d9d9;border-radius:.4rem;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0;font-size:1.4rem;font-weight:400;margin:0 auto;outline:0;padding:.5rem 1.5rem;position:relative;text-align:center;touch-action:manipulation;transition:.3s cubic-bezier(.645,.045,.355,1);text-shadow:0 -1px 0 rgba(0,0,0,.12);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;height:3.2rem}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:active{border-color:#096dd9;color:#096dd9}:host.disabled{cursor:not-allowed}:host-context(.primary){background-color:#1890ff;border-color:#1890ff;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:#fff}:host-context(.primary):hover{background-color:#40a9ff;border-color:#40a9ff}:host-context(.primary):active{background-color:#096dd9;border-color:#096dd9}:host-context(.danger){background-color:#f5222d;border-color:#f5222d;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:#fff}:host-context(.danger):hover{background-color:#ff5654;border-color:#ff5654}:host-context(.danger):active{background-color:#cb2d35;border-color:#cb2d35}"]
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    disabled: [{ type: Input }],
    type: [{ type: Input }],
    primary_style: [{ type: HostBinding, args: ['class.primary',] }],
    danger_style: [{ type: HostBinding, args: ['class.danger',] }],
    isDisabled: [{ type: HostBinding, args: ['class.disabled',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonComponent
                ],
                exports: [
                    ButtonComponent
                ],
                entryComponents: [ButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ElementModule {
}
ElementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FlexElement
                ],
                imports: [
                    ButtonModule
                ],
                exports: [
                    FlexElement,
                    ButtonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
        this.eRef = eRef;
        this.onCancel = new EventEmitter();
        this.onOk = new EventEmitter();
        this.close = new EventEmitter();
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onClose = () => {
            this.close.emit();
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydownHandler(event) {
        this.onClose();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
ModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-modal',
                template: "<div class=\"mask\" *ngIf=\"visible\" (click)=\"onClose()\">\r\n\r\n</div>\r\n\r\n<div class=\"content\" *ngIf=\"visible\">\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n",
                styles: [".mask{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.65);height:100%;z-index:399}:host{display:flex;justify-content:center}:host .content{display:flex;flex-direction:column;position:relative;background-color:#fff;border:0;border-radius:4px;background-clip:padding-box;box-shadow:0 4px 12px rgba(0,0,0,.15);width:52rem;height:52rem;z-index:400}"]
            }] }
];
/** @nocollapse */
ModalComponent.ctorParameters = () => [
    { type: ElementRef }
];
ModalComponent.propDecorators = {
    visible: [{ type: Input }],
    onCancel: [{ type: Output }],
    onOk: [{ type: Output }],
    close: [{ type: Output }],
    _maskElRef: [{ type: ViewChild, args: ['mask', { read: ElementRef },] }],
    onKeydownHandler: [{ type: HostListener, args: ['document:keydown.escape', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalModule {
}
ModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ModalComponent
                ],
                imports: [CommonModule],
                exports: [
                    ModalComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseToggleDirective {
    constructor() {
        this.toggle = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClick($event) {
        this.toggle.emit();
    }
}
CollapseToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[collapse-toggle]'
            },] }
];
/** @nocollapse */
CollapseToggleDirective.ctorParameters = () => [];
CollapseToggleDirective.propDecorators = {
    toggle: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HeaderComponent {
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.toggle = new EventEmitter();
        this.collapsed = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClick($event) {
        if (!this._toggleDir) {
            this.toggle.emit();
            this.collapsed = !this.collapsed;
        }
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this._toggleDir) {
            this._toggleDir.toggle.pipe(untilDestroyed(this)).subscribe(() => {
                this.toggle.emit();
                this.collapsed = !this.collapsed;
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'collapse-header',
                exportAs: 'collapse-header',
                template: `    
          <ng-content></ng-content>
  `
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    toggle: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    collapsed: [{ type: HostBinding, args: ['class.collapsed',] }],
    _toggleDir: [{ type: ContentChild, args: [CollapseToggleDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentComponent {
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.collapsed = false;
        ///-----------------------------------------------  Main Functions  -----------------------------------------------///
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        this.display = this.collapsed ? 'none' : 'flex';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.display = this.collapsed ? 'none' : 'flex';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
ContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'collapse-content',
                template: `
      <ng-content></ng-content>`
            }] }
];
ContentComponent.propDecorators = {
    display: [{ type: HostBinding, args: ['style.display',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanelComponent {
    constructor() {
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._headerComp || !this._contentComp) {
            throw new Error(`'collapse-header' or 'collapse-content'  cannot be found!`);
        }
        this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(() => {
            this._contentComp.collapsed = !this._contentComp.collapsed;
            this._contentComp.ngOnChanges();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
PanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'collapse-panel',
                template: `
      <ng-content select="collapse-header"></ng-content>

      <ng-content select="collapse-content"></ng-content>

  `
            }] }
];
/** @nocollapse */
PanelComponent.ctorParameters = () => [];
PanelComponent.propDecorators = {
    _headerComp: [{ type: ContentChild, args: [HeaderComponent,] }],
    _contentComp: [{ type: ContentChild, args: [ContentComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapsibleComponent {
    constructor() {
        this.single = false;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._panelComp && (!this._headerComp || !this._contentComp)) {
            throw new Error(`'collapse-header' or 'collapse-content'  cannot be found!`);
        }
        if (!this._panelComp) {
            this.single = true;
            this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(() => {
                this._contentComp.collapsed = !this._contentComp.collapsed;
                this._contentComp.ngOnChanges();
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
CollapsibleComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-collapsible',
                template: `
      <ng-container *ngIf="!single">
          <ng-content select="collapse-panel"></ng-content>
      </ng-container>

      <ng-container *ngIf="single">
          <ng-content select="collapse-header"></ng-content>

          <ng-content select="collapse-content"></ng-content>
      </ng-container>
  `,
                styles: [":host{display:flex;flex-direction:column}:host ::ng-deep collapse-panel{background-color:#fff;border:1px solid rgba(0,0,0,.16);border-radius:.4rem;box-shadow:0 .3rem .6rem rgba(0,0,0,.16)}:host ::ng-deep collapse-header{border-bottom:1px solid rgba(0,0,0,.16);cursor:pointer;display:flex;align-items:center;font-size:2rem;font-weight:600;margin:.1rem 0;padding:.6rem 1rem}:host ::ng-deep collapse-header.collapsed{border-bottom:0}:host ::ng-deep collapse-content{padding:2rem}"]
            }] }
];
/** @nocollapse */
CollapsibleComponent.ctorParameters = () => [];
CollapsibleComponent.propDecorators = {
    _panelComp: [{ type: ContentChild, args: [PanelComponent,] }],
    _headerComp: [{ type: ContentChild, args: [HeaderComponent,] }],
    _contentComp: [{ type: ContentChild, args: [ContentComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapsibleModule {
}
CollapsibleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    CollapsibleComponent,
                    HeaderComponent,
                    ContentComponent,
                    PanelComponent,
                    CollapseToggleDirective
                ],
                exports: [
                    CollapsibleComponent,
                    HeaderComponent,
                    ContentComponent,
                    PanelComponent,
                    CollapseToggleDirective
                ],
                entryComponents: [
                    CollapsibleComponent,
                    HeaderComponent,
                    ContentComponent,
                    PanelComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabLabelComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.template) {
            this._vcRef.clear();
            this._vcRef.createEmbeddedView(this.template);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
TabLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'tab-label',
                template: `
      <ng-template #tpl>
          <ng-content></ng-content>
      </ng-template>

      <ng-container *ngIf="text">
          {{text}}
      </ng-container>
      <ng-container #vcRef></ng-container>
  `
            }] }
];
/** @nocollapse */
TabLabelComponent.ctorParameters = () => [];
TabLabelComponent.propDecorators = {
    text: [{ type: Input }],
    template: [{ type: Input }],
    _templateRef: [{ type: ViewChild, args: ['tpl', { read: TemplateRef },] }],
    _vcRef: [{ type: ViewChild, args: ['vcRef', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabContentComponent {
    constructor() {
        this.createView = () => {
            if (this.template) {
                this._vcRef.clear();
                this._vcRef.createEmbeddedView(this.template);
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createView();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.createView();
    }
}
TabContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'tab-content',
                template: `
      <ng-template #content>
          <ng-content></ng-content>
      </ng-template>
    
    <ng-container #vcRef>
        
    </ng-container>
  `
            }] }
];
/** @nocollapse */
TabContentComponent.ctorParameters = () => [];
TabContentComponent.propDecorators = {
    template: [{ type: Input }],
    _templateRef: [{ type: ViewChild, args: ['content', { read: TemplateRef },] }],
    _vcRef: [{ type: ViewChild, args: ['vcRef', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabComponent {
    constructor() {
        this.active = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.label && !this._labelComp) {
            throw new Error(`Missing Tab's label`);
        }
        if ((this._labelComp && !this._contentComp) || (!this._labelComp && this._contentComp))
            throw new Error(`Missing ${(!this._labelComp && this._contentComp) ? `<tab-label></tab-label>` : `<tab-content></tab-content>`}`);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'tab',
                template: `
      <ng-template #tab>
          <ng-content></ng-content>
      </ng-template>
  `
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [];
TabComponent.propDecorators = {
    label: [{ type: Input }],
    _tabTemplateRef: [{ type: ViewChild, args: ['tab', { read: TemplateRef },] }],
    _labelComp: [{ type: ContentChild, args: [TabLabelComponent,] }],
    _contentComp: [{ type: ContentChild, args: [TabContentComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.selectTab = selected_index => {
            _.each(this.contentList.toArray(), (tab, i) => {
                tab.active = i === selected_index;
            });
            this.activeTab = _.find(this.contentList.toArray(), ['active', true]);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.activeTab = this.contentList.toArray()[0];
        this.contentList.toArray()[0].active = true;
        this.cd.detectChanges();
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-tabs',
                template: `
      <ng-template>
          <ng-content></ng-content>
      </ng-template>

      <div class="label_container">
          <ng-container *ngFor="let tab of contentList; let i =index">
              <tab-label
                      [ngClass]="tab.active && 'active'"
                      (click)="selectTab(i)"
                      [text]="tab.label"
                      [template]="tab._labelComp?._templateRef"
              >
              </tab-label>
          </ng-container>
      </div>
      <tab-content
              *ngIf="activeTab"
              [template]="activeTab._contentComp ? activeTab._contentComp._templateRef : activeTab._tabTemplateRef"
      >
      </tab-content>

  `,
                styles: [":host{display:flex;flex-direction:column;position:relative}:host ::ng-deep .label_container{display:flex}:host ::ng-deep .label_container tab-label{cursor:pointer}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TabsComponent.propDecorators = {
    contentList: [{ type: ContentChildren, args: [TabComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TabsModule {
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TabsComponent, TabComponent, TabLabelComponent, TabContentComponent
                ],
                exports: [TabsComponent, TabComponent, TabLabelComponent, TabContentComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.visible = false;
        this.visibilityChange$ = new Subject();
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.visibilityChange$.next(this.visible);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'dropdown-menu',
                template: `
      <ng-content></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          flex-shrink: 0;
      }
  `]
            }] }
];
/** @nocollapse */
MenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
MenuComponent.propDecorators = {
    visible: [{ type: Input }],
    template: [{ type: Input }],
    tplRef: [{ type: ViewChild, args: ['tpl',] }],
    vcRef: [{ type: ViewChild, args: ['vc', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToggleComponent {
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        this.change.emit();
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
ToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'dropdown-toggle',
                template: `
      <ng-content></ng-content>`,
                styles: [`
      :host {
          display: flex;
          flex-shrink: 0;
      }
  `]
            }] }
];
/** @nocollapse */
ToggleComponent.ctorParameters = () => [];
ToggleComponent.propDecorators = {
    change: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownComponent {
    /**
     * @param {?} _elRef
     * @param {?} cd
     */
    constructor(_elRef, cd) {
        this._elRef = _elRef;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.viewInitialized = false;
        this.visible = false;
        this.showDropdownMenu = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickOutside(e) {
        if (!this._elRef.nativeElement.contains(e.target) && !this._menuComp.elRef.nativeElement.contains(e.target)) {
            this.showDropdownMenu = false;
        }
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        this._menuComp.visibilityChange$.pipe(untilDestroyed(this)).subscribe(visible => {
            this.visible = visible;
            this.cd.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewInitialized = true;
        this._toggleComp.change.subscribe(() => {
            this.showDropdownMenu = !this.showDropdownMenu;
        });
        this.cd.detectChanges();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-dropdown',
                template: `
      <ng-content select="dropdown-toggle"></ng-content>

      <ng-container *ngIf="showDropdownMenu && visible">
          <ng-content select="dropdown-menu"></ng-content>
      </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
DropdownComponent.propDecorators = {
    _menuComp: [{ type: ContentChild, args: [MenuComponent,] }],
    _toggleComp: [{ type: ContentChild, args: [ToggleComponent,] }],
    onClickOutside: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownModule {
}
DropdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    DropdownComponent,
                    DropdownComponent,
                    ToggleComponent, MenuComponent
                ],
                exports: [DropdownComponent, ToggleComponent, MenuComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonarLoadingService {
    constructor() {
        this.visibilityChange$ = new Subject();
        this.isDisabled = false;
        this.show = () => !this.isDisabled && this.visibilityChange$.next(true);
        this.hide = () => !this.isDisabled && this.visibilityChange$.next(false);
        this.disabled = () => this.isDisabled = true;
        this.enabled = () => this.isDisabled = false;
    }
}
IonarLoadingService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingComponent {
    /**
     * @param {?} _loadingSvs
     * @param {?} cd
     */
    constructor(_loadingSvs, cd) {
        this._loadingSvs = _loadingSvs;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.visible = false;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._subscription)
            this._subscription.unsubscribe();
        this._subscription = this._loadingSvs.visibilityChange$.pipe(untilDestroyed(this)).subscribe((visible) => {
            this.visible = visible;
            this.cd.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-loading',
                template: "<div class=\"content\" *ngIf=\"visible\">\r\n    <sk-circle></sk-circle>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .content{background-color:rgba(51,51,51,.8);display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:100!important}"]
            }] }
];
/** @nocollapse */
LoadingComponent.ctorParameters = () => [
    { type: IonarLoadingService },
    { type: ChangeDetectorRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SpinnerComponent {
    constructor() {
        this.visible = true;
        this.baseClass = 'chasing-dots-spinner';
        this.childClass = 'dot';
        this.numItems = 2;
        this.delay = 0;
        this.color = '#333';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isRunning(value) {
        if (!value) {
            this.cancel();
            this.visible = false;
            return;
        }
        if (this.timeout) {
            return;
        }
        this.timeout = setTimeout(() => {
            this.visible = true;
            this.cancel();
        }, this.delay);
    }
    /**
     * @private
     * @return {?}
     */
    cancel() {
        clearTimeout(this.timeout);
        this.timeout = undefined;
    }
    /**
     * @return {?}
     */
    get items() {
        return Array(this.numItems);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cancel();
    }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spinner',
                template: ''
            }] }
];
SpinnerComponent.propDecorators = {
    delay: [{ type: Input }],
    color: [{ type: Input }],
    isRunning: [{ type: Input }]
};
/** @type {?} */
const SpinnerTemplate = `
  <div [hidden]="!visible" [ngClass]="baseClass">
      <div *ngFor="let item of items; let i = index" [ngClass]="childClass + (i+1)" [style.backgroundColor]="color"></div>
  </div>
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CircleComponent extends SpinnerComponent {
    constructor() {
        super(...arguments);
        this.baseClass = 'circle-spinner';
        this.childClass = 'circle';
        this.numItems = 12;
    }
}
CircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sk-circle',
                template: SpinnerTemplate,
                styles: [`
      .circle-spinner {
          position: relative;
          margin: 25px auto;
          width: 5rem;
          height: 5rem;
      }

      .circle-spinner > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: transparent !important;
      }

      .circle-spinner div:before {
          display: block;
          margin: 0 auto;
          width: 15%;
          height: 15%;
          border-radius: 100%;
          background-color: white;
          content: '';
          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
      }

      .circle-spinner .circle2 {
          -webkit-transform: rotate(30deg);
          -ms-transform: rotate(30deg);
          transform: rotate(30deg);
      }

      .circle-spinner .circle3 {
          -webkit-transform: rotate(60deg);
          -ms-transform: rotate(60deg);
          transform: rotate(60deg);
      }

      .circle-spinner .circle4 {
          -webkit-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          transform: rotate(90deg);
      }

      .circle-spinner .circle5 {
          -webkit-transform: rotate(120deg);
          -ms-transform: rotate(120deg);
          transform: rotate(120deg);
      }

      .circle-spinner .circle6 {
          -webkit-transform: rotate(150deg);
          -ms-transform: rotate(150deg);
          transform: rotate(150deg);
      }

      .circle-spinner .circle7 {
          -webkit-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          transform: rotate(180deg);
      }

      .circle-spinner .circle8 {
          -webkit-transform: rotate(210deg);
          -ms-transform: rotate(210deg);
          transform: rotate(210deg);
      }

      .circle-spinner .circle9 {
          -webkit-transform: rotate(240deg);
          -ms-transform: rotate(240deg);
          transform: rotate(240deg);
      }

      .circle-spinner .circle10 {
          -webkit-transform: rotate(270deg);
          -ms-transform: rotate(270deg);
          transform: rotate(270deg);
      }

      .circle-spinner .circle11 {
          -webkit-transform: rotate(300deg);
          -ms-transform: rotate(300deg);
          transform: rotate(300deg);
      }

      .circle-spinner .circle12 {
          -webkit-transform: rotate(330deg);
          -ms-transform: rotate(330deg);
          transform: rotate(330deg);
      }

      .circle-spinner .circle2:before {
          -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
      }

      .circle-spinner .circle3:before {
          -webkit-animation-delay: -1s;
          animation-delay: -1s;
      }

      .circle-spinner .circle4:before {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
      }

      .circle-spinner .circle5:before {
          -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
      }

      .circle-spinner .circle6:before {
          -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s;
      }

      .circle-spinner .circle7:before {
          -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s;
      }

      .circle-spinner .circle8:before {
          -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
      }

      .circle-spinner .circle9:before {
          -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
      }

      .circle-spinner .circle10:before {
          -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
      }

      .circle-spinner .circle11:before {
          -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
      }

      .circle-spinner .circle12:before {
          -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
      }

      @-webkit-keyframes sk-circleBounceDelay {
          0%, 80%, 100% {
              -webkit-transform: scale(0);
              transform: scale(0);
          }
          40% {
              -webkit-transform: scale(1);
              transform: scale(1);
          }
      }

      @keyframes sk-circleBounceDelay {
          0%, 80%, 100% {
              -webkit-transform: scale(0);
              transform: scale(0);
          }
          40% {
              -webkit-transform: scale(1);
              transform: scale(1);
          }
      }
  `]
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingModule {
}
LoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    LoadingComponent,
                    SpinnerComponent,
                    CircleComponent
                ],
                exports: [LoadingComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageLinkComponent {
    constructor() {
        this.disabled = false;
        this.change = new EventEmitter();
        this.onClick = e => {
            if (!this.disabled) {
                this.change.emit();
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
PageLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-link',
                template: "<ng-template #tpl>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n\r\n<ng-container *ngIf=\"template\">\r\n    <ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n</ng-container>",
                host: {
                    '[class.disabled]': 'disabled'
                },
                styles: [":host{background-color:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;display:flex;justify-content:center;align-items:center;margin-left:-1px;padding:1rem;transition:.3s;z-index:1}:host:hover{background-color:#e9ecef;color:#0056b3}:host.active{background-color:#007bff;border-color:#007bff;color:#fff}:host.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);z-index:3}:host.disabled{cursor:not-allowed;opacity:.5}"]
            }] }
];
/** @nocollapse */
PageLinkComponent.ctorParameters = () => [];
PageLinkComponent.propDecorators = {
    directionLinks: [{ type: Input }],
    boundaryLinks: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    template: [{ type: Input }],
    tpl: [{ type: ViewChild, args: ['tpl',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * Whether to disable buttons from user input
         */
        this.disabled = false;
        /**
         *  Whether to show the "First" and "Last" page links
         */
        this.boundary = false;
        /**
         *  Whether to show the "Next" and "Previous" page links
         */
        this.direction = true;
        /**
         *  Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages
         */
        this.ellipses = true;
        /**
         *  Whether to rotate pages when maxPage > number of pages.
         *  Current page will be in the middle
         */
        this.rotate = true;
        /**
         *  Number of items in collection.
         */
        this.total = 0;
        /**
         *  Current page. Page numbers start with 1
         */
        this.page = 1;
        this.change = new EventEmitter();
        this.pages = [];
        this._getTemplate = (key, value) => {
            /** @type {?} */
            let pageLinkComp;
            _.each(this._pageLinkCompList.toArray(), (item) => {
                if (_.has(item, [key]) && _.get(item, [key]) === value) {
                    pageLinkComp = item;
                }
            });
            return pageLinkComp ? pageLinkComp.tpl : this._getDefaultTemplate(key, value);
        };
        this._getDefaultTemplate = (key, value) => {
            switch (`${key},${value}`) {
                case 'boundaryLinks,first':
                    return this._boundaryFirstDefault;
                case 'boundaryLinks,last':
                    return this._boundaryLastDefault;
                case 'directionLinks,prev':
                    return this._directionPrevDefault;
                case 'directionLinks,next':
                    return this._directionNexDefault;
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.controlArray = _.times(this.total, n => n + 1);
        //
        //
        // if (this.maxSize) {
        // }
        // console.log(this.visibleControls);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._updatePages(this.page);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.boundary_first = this._getTemplate('boundaryLinks', 'first');
        this.boundary_last = this._getTemplate('boundaryLinks', 'last');
        this.direction_prev = this._getTemplate('directionLinks', 'prev');
        this.direction_next = this._getTemplate('directionLinks', 'next');
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    ///-----------------------------------------------  Main Functions  -----------------------------------------------///
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    selectPage(pageNumber) {
        this._updatePages(pageNumber);
    }
    /**
     * @private
     * @param {?} newPage
     * @return {?}
     */
    _updatePages(newPage) {
        // fill-in model needed to render pages
        this.pages.length = 0;
        this.pages = _.times(this.total, n => n + 1);
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.total > this.maxSize) {
            /** @type {?} */
            let start = 0;
            /** @type {?} */
            let end = this.total;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            this.pages = this.pages.slice(start, end).concat();
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     * @private
     * @return {?}
     */
    _applyRotation() {
        /** @type {?} */
        let start = 0;
        /** @type {?} */
        let end = this.total;
        /** @type {?} */
        let leftOffset = Math.floor(this.maxSize / 2);
        /** @type {?} */
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        //
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.total - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.total - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        //
        return [start, end];
        // _.each(_.times(this.page - 1 + this.maxSize), page => {
        //   this.visibleControls.push(this.controlArray[page]);
        // });
    }
    /**
     * @private
     * @param {?} newPageNo
     * @return {?}
     */
    _setPageInRange(newPageNo) {
        if (newPageNo !== this.page && this.total) {
            this.page = Math.max(Math.min(newPageNo, this.total), 1);
            this.change.emit(newPageNo);
        }
    }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                if (start > 1) {
                    this.pages.unshift('...');
                }
                this.pages.unshift(1);
            }
            if (end < this.total) {
                if (end < (this.total - 1)) {
                    this.pages.push('...');
                }
                this.pages.push(this.total);
            }
        }
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-pagination',
                template: "<ng-container>\r\n    <page-link\r\n            [template]=\"boundary_first\"\r\n            [disabled]=\"page===1\"\r\n            (change)=\"selectPage(1)\"\r\n            *ngIf=\"boundary\"\r\n    ></page-link>\r\n    <page-link\r\n            [template]=\"direction_prev\"\r\n            [disabled]=\"page===1\"\r\n            (change)=\"selectPage(page - 1)\"\r\n            *ngIf=\"direction\"\r\n    ></page-link>\r\n\r\n    <ng-container *ngFor=\"let pageNumber of pages\">\r\n        <page-number\r\n                [number]=\"pageNumber\"\r\n                [currentPage]=\"this.page\"\r\n                (change)=\"selectPage($event)\"\r\n        ></page-number>\r\n    </ng-container>\r\n\r\n    <page-link\r\n            [template]=\"direction_next\"\r\n            [disabled]=\"page===total\"\r\n            (change)=\"selectPage(page + 1)\"\r\n            *ngIf=\"direction\"\r\n    ></page-link>\r\n    <page-link\r\n            [template]=\"boundary_last\"\r\n            [disabled]=\"page===total\"\r\n            (change)=\"selectPage(total)\"\r\n            *ngIf=\"boundary\"\r\n    ></page-link>\r\n</ng-container>\r\n\r\n\r\n<ng-template #boundaryFirstDefault>\r\n    <<\r\n</ng-template>\r\n<ng-template #boundaryLastDefault>\r\n    >>\r\n</ng-template>\r\n<ng-template #directionPrevDefault>\r\n    <\r\n</ng-template>\r\n<ng-template #directionNexDefault>\r\n    >\r\n</ng-template>",
                styles: [`
      :host {
          display: flex;
          justify-content: center;
          height: auto;
          flex-shrink: 0;
      }
  `]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
PaginationComponent.propDecorators = {
    disabled: [{ type: Input }],
    boundary: [{ type: Input }],
    direction: [{ type: Input }],
    ellipses: [{ type: Input }],
    rotate: [{ type: Input }],
    total: [{ type: Input }],
    maxSize: [{ type: Input }],
    page: [{ type: Input }],
    change: [{ type: Output }],
    _pageLinkCompList: [{ type: ContentChildren, args: [PageLinkComponent,] }],
    _boundaryFirstDefault: [{ type: ViewChild, args: ['boundaryFirstDefault',] }],
    _boundaryLastDefault: [{ type: ViewChild, args: ['boundaryLastDefault',] }],
    _directionPrevDefault: [{ type: ViewChild, args: ['directionPrevDefault',] }],
    _directionNexDefault: [{ type: ViewChild, args: ['directionNexDefault',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageNumberComponent {
    constructor() {
        this.number = 0;
        this.currentPage = 0;
        this.change = new EventEmitter();
        this.onClick = e => {
            this.change.emit(this.number);
        };
        this.onMouseDown = e => {
            this._focusStyle = true;
        };
        this.onMouseUp = e => {
            setTimeout(() => {
                this._focusStyle = false;
            }, 300);
        };
        this._activeStyle = false;
        this._focusStyle = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._activeStyle = this.number === this.currentPage;
    }
}
PageNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-number',
                template: `
      {{number}}
  `,
                styles: [":host{background-color:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;display:flex;justify-content:center;align-items:center;margin-left:-1px;padding:1rem;transition:.3s;z-index:1}:host:hover{background-color:#e9ecef;color:#0056b3}:host.active{background-color:#007bff;border-color:#007bff;color:#fff}:host.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);z-index:3}"]
            }] }
];
PageNumberComponent.propDecorators = {
    number: [{ type: Input }],
    currentPage: [{ type: Input }],
    change: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onMouseUp: [{ type: HostListener, args: ['mouseup', ['$event'],] }],
    _activeStyle: [{ type: HostBinding, args: ['class.active',] }],
    _focusStyle: [{ type: HostBinding, args: ['class.focus',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationModule {
}
PaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    PaginationComponent,
                    PageNumberComponent,
                    PageLinkComponent
                ],
                exports: [PaginationComponent, PageLinkComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComponentModule {
}
ComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule
                ],
                exports: [
                    ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SquareDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.matchHeight = (parent) => {
            if (!parent)
                return;
            setTimeout(() => {
                this._renderer.setStyle(this._elRef.nativeElement, 'height', `${this._elRef.nativeElement.offsetWidth}px`);
            }, 0);
        };
    }
    /**
     * @return {?}
     */
    onResize() {
        this.matchHeight(this._elRef.nativeElement);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.matchHeight(this._elRef.nativeElement);
    }
}
SquareDirective.decorators = [
    { type: Directive, args: [{
                selector: '[square]'
            },] }
];
/** @nocollapse */
SquareDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
SquareDirective.propDecorators = {
    onResize: [{ type: HostListener, args: ['window:resize',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollDownDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight;
    }
}
ScrollDownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[scroll-down]'
            },] }
];
/** @nocollapse */
ScrollDownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
ScrollDownDirective.propDecorators = {
    active: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DirectiveModule {
}
DirectiveModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SquareDirective, ScrollDownDirective
                ],
                exports: [
                    SquareDirective, ScrollDownDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideDirective {
    /**
     * @param {?} tplRef
     */
    constructor(tplRef) {
        this.tplRef = tplRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
SlideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[slide]'
            },] }
];
/** @nocollapse */
SlideDirective.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideComponent {
    /**
     * @param {?} el
     * @param {?} cd
     */
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cd.detectChanges();
    }
}
SlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'slide',
                template: `
      <ng-container *ngTemplateOutlet="template"></ng-container>
  `,
                styles: [`
      :host {
          display: flex;
          position: absolute;
          flex: 1;
          width: 100%;
          height: 100%;

      }
  `]
            }] }
];
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
SlideComponent.propDecorators = {
    template: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     * @param {?} vcRef
     * @param {?} aniBuilder
     * @param {?} resolver
     */
    constructor(cd, vcRef, aniBuilder, resolver) {
        this.cd = cd;
        this.vcRef = vcRef;
        this.aniBuilder = aniBuilder;
        this.resolver = resolver;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.index = 0;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.previousSlide = () => {
            if (this.index !== 0) {
                this.index -= 1;
                this.cd.markForCheck();
                /** @type {?} */
                const current_slide = this.slideCompRef;
                /** @type {?} */
                const prev_slide = this.slideCompRef = this.createSlideComponent(this.index);
                this.createAni(prev_slide, 'entrance', 'prev');
                this.createAni(current_slide, 'exit', 'prev');
            }
        };
        this.nextSlide = () => {
            if (this.index !== this.item_dir_list.toArray().length - 1) {
                this.index += 1;
                this.cd.markForCheck();
                /** @type {?} */
                const current_slide = this.slideCompRef;
                /** @type {?} */
                const next_slide = this.slideCompRef = this.createSlideComponent(this.index);
                this.createAni(current_slide, 'exit', 'next');
                this.createAni(next_slide, 'entrance', 'next');
            }
        };
        this.createSlideComponent = i => {
            /** @type {?} */
            const factory = this.resolver.resolveComponentFactory(SlideComponent);
            /** @type {?} */
            const compRef = this.carousel.createComponent(factory);
            compRef.instance.template = this.item_dir_list.toArray()[i].tplRef;
            compRef.instance.ngOnInit();
            return compRef;
        };
        this.createAni = (compRef, entrance = 'entrance', direction = 'next') => {
            /** @type {?} */
            const ani_factory = this.aniBuilder.build(this.getAniType(entrance, direction));
            this.ani_player = ani_factory.create(compRef.instance.el.nativeElement);
            this.ani_player.play();
            if (entrance === 'exit') {
                this.ani_player.onDone(() => {
                    compRef.destroy();
                });
            }
        };
        this.getAniType = (entrance = 'entrance', direction = 'next') => (entrance === 'entrance')
            ? (direction === 'next') ? useAnimation(slide_in_right, { params: { timing: 500 } }) : useAnimation(slide_in_left, { params: { timing: 500 } })
            : (direction === 'next') ? useAnimation(slide_out_left, { params: { timing: 500 } }) : useAnimation(slide_out_right, { params: { timing: 500 } });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.slideCompRef = this.createSlideComponent(this.index);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.slideCompRef.destroy();
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-carousel',
                template: "<div class=\"arrow-left\" (click)=\"previousSlide()\">\r\n   <\r\n</div>\r\n\r\n<ng-container  #carousel>\r\n\r\n</ng-container>\r\n\r\n\r\n\r\n<div class=\"arrow-right\" (click)=\"nextSlide()\">\r\n    >\r\n</div>\r\n\r\n",
                styles: [":host{background-color:transparent;display:flex;position:relative;min-height:300px;min-width:700px}.arrow-left,.arrow-right{cursor:pointer;display:flex;align-items:center;font-size:2.5rem;position:absolute;height:100%;z-index:2;width:10rem}.arrow-left .fa-chevron-left,.arrow-left fa-chevron-right,.arrow-right .fa-chevron-left,.arrow-right fa-chevron-right{color:#000}.arrow-left{left:0}.arrow-right{right:0}"]
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: AnimationBuilder },
    { type: ComponentFactoryResolver }
];
CarouselComponent.propDecorators = {
    item_dir_list: [{ type: ContentChildren, args: [SlideDirective,] }],
    carousel: [{ type: ViewChild, args: ['carousel', { read: ViewContainerRef },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselModule {
}
CarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    CarouselComponent, SlideDirective, SlideComponent
                ],
                exports: [
                    CarouselComponent, SlideDirective
                ],
                entryComponents: [SlideComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PackagesModule {
}
PackagesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CarouselModule
                ],
                exports: [
                    CarouselModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonarUI {
}
IonarUI.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ComponentModule,
                    ElementModule,
                    PackagesModule,
                    DirectiveModule
                ],
                exports: [
                    ComponentModule,
                    ElementModule,
                    PackagesModule,
                    DirectiveModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IonarUI, IonarLoadingService, CollapsibleComponent as ɵe, CollapsibleModule as ɵd, ContentComponent as ɵi, HeaderComponent as ɵg, PanelComponent as ɵf, CollapseToggleDirective as ɵh, ComponentModule as ɵa, MenuComponent as ɵq, ToggleComponent as ɵr, DropdownComponent as ɵp, DropdownModule as ɵo, LoadingComponent as ɵt, LoadingModule as ɵs, IonarLoadingService as ɵu, CircleComponent as ɵx, SpinnerComponent as ɵv, SpinnerTemplate as ɵw, ModalComponent as ɵc, ModalModule as ɵb, PageLinkComponent as ɵba, PageNumberComponent as ɵbb, PaginationComponent as ɵz, PaginationModule as ɵy, TabContentComponent as ɵn, TabLabelComponent as ɵm, TabComponent as ɵl, TabsComponent as ɵk, TabsModule as ɵj, DirectiveModule as ɵbl, ScrollDownDirective as ɵbn, SquareDirective as ɵbm, ButtonComponent as ɵbf, ButtonModule as ɵbe, ElementModule as ɵbc, FlexElement as ɵbd, CarouselComponent as ɵbi, CarouselModule as ɵbh, SlideComponent as ɵbk, SlideDirective as ɵbj, PackagesModule as ɵbg };

//# sourceMappingURL=ionar-ui.js.map