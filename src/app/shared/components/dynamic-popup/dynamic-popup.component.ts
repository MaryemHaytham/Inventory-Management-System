import {
  Component,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';
import { HelperService } from '../../service/helper.service';

@Component({
  selector: 'app-dynamic-popup',
  templateUrl: './dynamic-popup.component.html',
  styleUrls: ['./dynamic-popup.component.scss'],
})
export class DynamicPopupComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() valueToBeVisible: string = '';

  private _HelperService = inject(HelperService);

  onClose(): void {
    this.close.emit();
  }

  ngOnInit(): void {
    window.addEventListener('click', this.handleWindowClick.bind(this));
    window.addEventListener('keydown', this.handleEscapeKey.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('click', this.handleWindowClick.bind(this));
    window.removeEventListener('keydown', this.handleEscapeKey.bind(this));
  }

  handleWindowClick(event: MouseEvent): void {
    this._HelperService.mouseEvent(
      event,
      'dynamic-popup',
      'popup',
      this.onClose.bind(this)
    );
  }

  handleEscapeKey(event: KeyboardEvent): void {
    this._HelperService.keyEvent(event, 'Escape', this.onClose.bind(this));
  }
}
