import { Component, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory-popup',
  templateUrl: './inventory-popup.component.html',
  styleUrls: ['./inventory-popup.component.scss']
})
export class InventoryPopupComponent {
  files: File[] = [];

  profileImgValue: any
  constructor(
    private formBuilder: FormGroup,
    private renderer: Renderer2,
    public dialogRef: MatDialogRef<InventoryPopupComponent>
  ) {

  }
  newInventoryForm = new FormGroup({
    Name: new FormControl('', Validators.required),
    Image: new FormControl('', Validators.required),
    productId: new FormControl(''),
    CategoryID: new FormControl('', Validators.required),
    Threshold: new FormControl('', Validators.required),
    Quantity: new FormControl('', Validators.required),
    Unit: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required),
    ExpiryDate: new FormControl('', Validators.required)
  });


  onSelect(event: any) {
    console.log(event.addedFiles[0]);
    this.profileImgValue = event.addedFiles[0]
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
    this.profileImgValue = false
  }


  browseFiles() {
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onSubmit(data: FormGroup) {
    let newOrderForm = new FormData();
    // newOrderForm.append("Image", this.profileImgValue);
    // newOrderForm.append("CategoryID", data.value.CategoryID);
    // newOrderForm.append("Name", data.value.Name);
    // newOrderForm.append("Unit", data.value.Unit);
    // newOrderForm.append("Price", data.value.Price);
    // newOrderForm.append("Quantity", data.value.Quantity);
    // newOrderForm.append("EcpiryDate", data.value.ExpiryDate);
    // newOrderForm.append("Threshold", data.value.Threshold)

    Object.keys(data.value).forEach(([key, value]) => {
      newOrderForm.append(key, value);
    })



    if (this.files.length > 0) {
      newOrderForm.append('Image', this.files[0], this.files[0].name)
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
