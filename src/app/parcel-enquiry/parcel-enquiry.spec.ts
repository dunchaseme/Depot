import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelEnquiryComponent } from './parcel-enquiry.component';

describe('ParcelEnquiryComponent', () => {
  let component: ParcelEnquiryComponent;
  let fixture: ComponentFixture<ParcelEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
