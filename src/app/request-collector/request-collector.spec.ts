import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCollectorComponent } from './request-collector.component';

describe('RequestCollectorComponent', () => {
  let component: RequestCollectorComponent;
  let fixture: ComponentFixture<RequestCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
