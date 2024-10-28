import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPopupComponent } from './dynamic-popup.component';

describe('DynamicPopupComponent', () => {
  let component: DynamicPopupComponent;
  let fixture: ComponentFixture<DynamicPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicPopupComponent]
    });
    fixture = TestBed.createComponent(DynamicPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
