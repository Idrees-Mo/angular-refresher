import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingHomeComponent } from './typing-home.component';

describe('TypingHomeComponent', () => {
  let component: TypingHomeComponent;
  let fixture: ComponentFixture<TypingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
