import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePlusButtonComponent } from './invoice-plus-button.component';

describe('InvoicePlusButtonComponent', () => {
  let component: InvoicePlusButtonComponent;
  let fixture: ComponentFixture<InvoicePlusButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePlusButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePlusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
