import { Component, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { InventoryService } from '../../service/inventory.service';
import { HelperService } from '../../service/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-popup',
  templateUrl: './inventory-popup.component.html',
  styleUrls: ['./inventory-popup.component.scss']
})
export class InventoryPopupComponent {
  newOrderForm: FormGroup;
  imageName: string | any;

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    public dialogRef: MatDialogRef<InventoryPopupComponent>,
    private _InventoryService: InventoryService,
    private _HelperService: HelperService,
    private router: Router
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

  inventoryForm = new FormGroup({
    Name: new FormControl(null),
    Category: new FormControl(null),
    Price: new FormControl(null),
    Quantity: new FormControl(null),
    Unit: new FormControl(null),
    ExpiryDate: new FormControl(null),
    Threshold: new FormControl(null),
  })

  onSubmit(data: FormGroup) {
    let myData = new FormData();
    myData.append('Name', data.value.Name);
    myData.append('Category', data.value.Category);
    myData.append('Price', data.value.Price);
    myData.append('Quantity', data.value.Quantity);
    myData.append('Unit', data.value.Unit);
    myData.append('ExpiryDate', data.value.ExpiryDate);
    myData.append('Threshold', data.value.Threshold);
    myData.append('Image', this.imageName, this.imageName.Image);

    this._InventoryService.addProduct(myData).subscribe({
      next: (res) => {
        console.log(res);

      }, error: (err) => {
        this._HelperService.error(err)
      }, complete: () => {
        this._HelperService.success('Welcome Back');
        this.router.navigate(['/dashboard/inventory']);
      }
    })
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageName = file.name;
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
    }
  }

  browseFiles() {
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  // onSubmit() {
  //   if (this.newOrderForm.valid) {
  //     this.dialogRef.close(this.newOrderForm.value);
  //   }
  // }

  onCancel() {
    this.dialogRef.close();
  }
}
