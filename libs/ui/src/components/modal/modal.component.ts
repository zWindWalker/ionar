import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';


@Component({
  selector: 'io-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() visible: Boolean = false;
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter();
  @Output() close = new EventEmitter();

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onClose();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(e: Event) {
    // if (!this.eRef.nativeElement.contains(e.target)) this.onClose();
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onClose = () => {
    this.close.emit();
  };

  ngOnChanges(changes): void {


  }

}
