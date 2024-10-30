import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-general-popup',
  templateUrl: './general-popup.component.html',
  styleUrls: ['./general-popup.component.scss']
})
export class GeneralPopupComponent {
  newOrderForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<GeneralPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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
