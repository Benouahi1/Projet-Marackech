import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugementsComponent } from './jugements.component';

describe('JugementsComponent', () => {
  let component: JugementsComponent;
  let fixture: ComponentFixture<JugementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
