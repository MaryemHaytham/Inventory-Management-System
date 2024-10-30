import { Component, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory-popup',
  templateUrl: './inventory-popup.component.html',
  styleUrls: ['./inventory-popup.component.scss']
})
export class InventoryPopupComponent {
  newOrderForm: FormGroup;
  imageName: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    public dialogRef: MatDialogRef<InventoryPopupComponent>
  ) {
    this.newOrderForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productId: ['', Validators.required],
      category: ['', Validators.required],
      orderValue: ['', Validators.required],
      quantity: ['', Validators.required],
      unit: ['', Validators.required],
      buyingPrice: ['', Validators.required],
      dateOfDelivery: ['', Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageName = file.name;
      // Handle file upload here if needed
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.imageName = files[0].name;
      // Handle file upload here if needed
    }
  }

  browseFiles() {
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onSubmit() {
    if (this.newOrderForm.valid) {
      // Handle form submission logic here
      this.dialogRef.close(this.newOrderForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
