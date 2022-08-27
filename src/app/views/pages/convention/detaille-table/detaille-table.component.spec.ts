import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleTableComponent } from './detaille-table.component';

describe('DetailleTableComponent', () => {
  let component: DetailleTableComponent;
  let fixture: ComponentFixture<DetailleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
