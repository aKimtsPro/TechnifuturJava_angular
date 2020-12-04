import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoRecapComponent } from './exo-recap.component';

describe('ExoRecapComponent', () => {
  let component: ExoRecapComponent;
  let fixture: ComponentFixture<ExoRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
