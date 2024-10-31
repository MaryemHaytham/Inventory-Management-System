import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private _ToastrService: ToastrService) {}

  error(error: HttpErrorResponse): void {
    this._ToastrService.error(error.error.message, 'Error')
  }

  success(successMessage: string): void {
    this._ToastrService.success(successMessage, 'Success');
  }

  info(infoMessage: string): void {
    this._ToastrService.info(infoMessage, 'Heads up');
  }
  mouseEvent(
    e: MouseEvent,
    classOne: string,
    classTwo: string,
    callback: () => void
  ) {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains(classOne) &&
      !target.classList.contains(classTwo)
    ) {
      callback();
    }
  }

  keyEvent(e: KeyboardEvent, key: string, callback: () => void) {
    if (e.key === key) {
      callback();
    }
  }
}
