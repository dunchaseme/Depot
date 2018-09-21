import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCollectorComponent } from './confirm-collector.component';

describe('ConfirmCollectorComponent', () => {
  let component: ConfirmCollectorComponent;
  let fixture: ComponentFixture<ConfirmCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
