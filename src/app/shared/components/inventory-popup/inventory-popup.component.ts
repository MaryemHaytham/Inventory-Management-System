import { Component, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { InventoryService } from '../../service/inventory.service';
import { HelperService } from '../../service/helper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-popup',
  templateUrl: './inventory-popup.component.html',
  styleUrls: ['./inventory-popup.component.scss']
})
export class InventoryPopupComponent {
  newOrderForm: FormGroup;
  imageName: string | any;
  inventoryList: any;
  inventoryId: any;
  isUpdate: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    public dialogRef: MatDialogRef<InventoryPopupComponent>,
    private _InventoryService: InventoryService,
    private _HelperService: HelperService,
    private router: Router,
    private _ActivatedRoute: ActivatedRoute
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

    // Inventory Add&Edit
    this.imageName = _HelperService.imgPath;
    console.log(_ActivatedRoute.snapshot.params['id']);
    this.inventoryId = _ActivatedRoute.snapshot.params['id'];
    if (this.inventoryId) {
      this.isUpdate = true;
      this.getProductById(this.inventoryId)
    } else {
      this.isUpdate = false;
    }

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
    Object.keys(data.value).forEach(([key, value]) => {
      myData.append(key, value);
    })
    myData.append('Image', this.imageName, this.imageName.Image);

    if (this.inventoryId) {
      this._InventoryService.editProduct(myData, this.inventoryId).subscribe({
        next: (res) => {

        }, error: (err) => {
          this._HelperService.error(err)
        }, complete: () => {
          this._HelperService.success('Product Update Success');
          this.router.navigate(['/dashboard/inventory']);
        }
      })

    } else {
      this._InventoryService.addProduct(myData).subscribe({
        next: (res) => {
          console.log(res);

        }, error: (err) => {
          this._HelperService.error(err)
        }, complete: () => {
          this._HelperService.success('Product Add Success');
          this.router.navigate(['/dashboard/inventory']);
        }
      })
    }

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

  getProductById(id: number) {
    this._InventoryService.getProductById(id).subscribe({
      next: (res) => {
        this.inventoryList = res;
      }, error: (err) => {

      }, complete: () => {
        // this.imageName = 
        this.inventoryForm.patchValue({
          Name: this.inventoryList.Name,
          Category: this.inventoryList.Category,
          Price: this.inventoryList.Price,
          Quantity: this.inventoryList.Quantity,
          Unit: this.inventoryList.Unit,
          ExpiryDate: this.inventoryList.ExpiryDate,
          Threshold: this.inventoryList.Threshold,
        })
      }
    })
  }

  onCancel() {
    this.dialogRef.close();
  }
}
