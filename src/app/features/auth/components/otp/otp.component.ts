import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicPopupComponent } from 'src/app/shared/components/dynamic-popup/dynamic-popup.component';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent {
  otpForm: FormGroup = new FormGroup({
    digit1: new FormControl(null, Validators.required),
    digit2: new FormControl(null, Validators.required),
    digit3: new FormControl(null, Validators.required),
    digit4: new FormControl(null, Validators.required),
  });

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  @ViewChild('popupContainer', { read: ViewContainerRef, static: true })
  popupContainer!: ViewContainerRef;

  private _ComponentFactoryResolver = inject(ComponentFactoryResolver);

  autoFocusNext(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value && this.otpInputs) {
      const inputsArray = Array.from(this.otpInputs);
      if (index < inputsArray.length - 1) {
        inputsArray[index + 1].nativeElement.focus();
      }
    }
  }

  onSubmit(otpFormData: FormGroup) {
    if (otpFormData.valid) {
      console.log(otpFormData.value);
      const componentFactory =
        this._ComponentFactoryResolver.resolveComponentFactory(
          DynamicPopupComponent
        );

      this.popupContainer.clear();
      const componentRef = this.popupContainer.createComponent(componentFactory);
      componentRef.instance.close.subscribe(() => this.popupContainer.clear());
      componentRef.setInput('valueToBeVisible', 'otp')
    }
  }
}
