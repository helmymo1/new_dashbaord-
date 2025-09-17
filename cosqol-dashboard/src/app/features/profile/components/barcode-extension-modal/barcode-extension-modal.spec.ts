import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeExtensionModal } from './barcode-extension-modal';

describe('BarcodeExtensionModal', () => {
  let component: BarcodeExtensionModal;
  let fixture: ComponentFixture<BarcodeExtensionModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarcodeExtensionModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcodeExtensionModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
