import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<void>();
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form group with controls and validators
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productId: ['', [Validators.required]],
      category: ['', [Validators.required]],
      buyingPrice: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      unit: ['', [Validators.required]],
      expiryDate: ['', Validators.required],
      thresholdValue: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    window.addEventListener('click', this.handleWindowClick.bind(this));
    window.addEventListener('keydown', this.handleEscapeKey.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('click', this.handleWindowClick.bind(this));
    window.removeEventListener('keydown', this.handleEscapeKey.bind(this));
  }

  onClose(): void {
    this.close.emit();
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

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Form submitted:', this.productForm.value);
      this.onClose();
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
