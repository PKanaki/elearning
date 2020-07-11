import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadvideosComponent } from './uploadvideos.component';

describe('UploadvideosComponent', () => {
  let component: UploadvideosComponent;
  let fixture: ComponentFixture<UploadvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
