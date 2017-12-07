import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceBookLoginComponent } from './face-book-login.component';

describe('FaceBookLoginComponent', () => {
  let component: FaceBookLoginComponent;
  let fixture: ComponentFixture<FaceBookLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceBookLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceBookLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
