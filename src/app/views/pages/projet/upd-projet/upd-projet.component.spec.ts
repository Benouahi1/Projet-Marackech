import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdProjetComponent } from './upd-projet.component';

describe('UpdProjetComponent', () => {
  let component: UpdProjetComponent;
  let fixture: ComponentFixture<UpdProjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdProjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
