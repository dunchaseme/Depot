import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorListingComponent } from './collector-listing.component';

describe('CollectorListingComponent', () => {
  let component: CollectorListingComponent;
  let fixture: ComponentFixture<CollectorListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
