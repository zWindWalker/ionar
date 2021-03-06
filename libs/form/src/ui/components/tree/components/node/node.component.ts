import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, TemplateRef, ElementRef
} from '@angular/core';
import { TreeNode } from '../../interfaces/TreeNode';
import { IoFormFieldUI } from '../../../../interfaces/IoFormFieldUI';

@Component({
  selector: 'tree-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent extends IoFormFieldUI implements OnInit, OnChanges {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() data: TreeNode;
  @Input() selected: TreeNode;
  @Input() template: TemplateRef<any>;
  @Output() change = new EventEmitter();


  constructor(
    cd: ChangeDetectorRef,
    el: ElementRef
  ) {
    super(cd, el);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setContext({
      children: this.data.children,
      label: this.data.label,
      selected: this.data === this.selected
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  onChange = () => {

    if (!this.data.children) {
      this.setContext({
        children: this.data.children,
        label: this.data.label,
        selected: this.data === this.selected
      });
      this.change.emit(this.data);
      this.cd.markForCheck();
    }
  };

}
