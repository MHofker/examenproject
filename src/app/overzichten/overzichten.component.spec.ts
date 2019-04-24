import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtenComponent } from './overzichten.component';

describe('OverzichtenComponent', () => {
  let component: OverzichtenComponent;
  let fixture: ComponentFixture<OverzichtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverzichtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
