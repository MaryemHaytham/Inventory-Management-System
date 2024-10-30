import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();

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
    const popupElement = document.querySelector('.popup');
    if (popupElement && !popupElement.contains(event.target as Node)) {
      this.onClose();
    }
  }

  handleEscapeKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.onClose();
    }
  }
}