import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHtmlComponent } from './login-html.component';

describe('LoginHtmlComponent', () => {
  let component: LoginHtmlComponent;
  let fixture: ComponentFixture<LoginHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
