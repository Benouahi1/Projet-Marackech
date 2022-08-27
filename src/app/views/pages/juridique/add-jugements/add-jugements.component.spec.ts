import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJugementsComponent } from './add-jugements.component';

describe('AddJugementsComponent', () => {
  let component: AddJugementsComponent;
  let fixture: ComponentFixture<AddJugementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJugementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJugementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
