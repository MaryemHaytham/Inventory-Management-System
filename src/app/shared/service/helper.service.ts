import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}
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
