import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCollectorComponent } from './search-collector.component';

describe('SearchCollectorComponent', () => {
  let component: SearchCollectorComponent;
  let fixture: ComponentFixture<SearchCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
