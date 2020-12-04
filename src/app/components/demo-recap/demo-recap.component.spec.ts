import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRecapComponent } from './demo-recap.component';

describe('DemoRecapComponent', () => {
  let component: DemoRecapComponent;
  let fixture: ComponentFixture<DemoRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
