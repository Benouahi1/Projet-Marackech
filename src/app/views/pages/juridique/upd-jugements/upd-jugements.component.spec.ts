import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdJugementsComponent } from './upd-jugements.component';

describe('UpdJugementsComponent', () => {
  let component: UpdJugementsComponent;
  let fixture: ComponentFixture<UpdJugementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdJugementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdJugementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
