import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelQrComponent } from './parcel-qr.component';

describe('ParcelQrComponent', () => {
  let component: ParcelQrComponent;
  let fixture: ComponentFixture<ParcelQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
