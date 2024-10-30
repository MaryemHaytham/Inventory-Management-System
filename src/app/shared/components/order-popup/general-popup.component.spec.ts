import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPopupComponent } from './general-popup.component';

describe('GeneralPopupComponent', () => {
  let component: GeneralPopupComponent;
  let fixture: ComponentFixture<GeneralPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralPopupComponent]
    });
    fixture = TestBed.createComponent(GeneralPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
