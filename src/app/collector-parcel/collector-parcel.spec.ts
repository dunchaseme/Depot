import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorParcelComponent } from './collector-parcel.component';

describe('CollectorParcelComponent', () => {
  let component: CollectorParcelComponent;
  let fixture: ComponentFixture<CollectorParcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorParcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
