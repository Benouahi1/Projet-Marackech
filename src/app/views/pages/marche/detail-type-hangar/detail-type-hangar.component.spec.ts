import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTypeHangarComponent } from './detail-type-hangar.component';

describe('DetailTypeHangarComponent', () => {
  let component: DetailTypeHangarComponent;
  let fixture: ComponentFixture<DetailTypeHangarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTypeHangarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTypeHangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
