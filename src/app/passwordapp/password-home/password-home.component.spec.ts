import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordHomeComponent } from './password-home.component';

describe('PasswordHomeComponent', () => {
  let component: PasswordHomeComponent;
  let fixture: ComponentFixture<PasswordHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
