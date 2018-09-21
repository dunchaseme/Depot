import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerQrComponent } from './buyer-qr.component';

describe('BuyerQrComponent', () => {
  let component: BuyerQrComponent;
  let fixture: ComponentFixture<BuyerQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
