import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormEmailComponent } from './auth-form-email.component';
import { provideRouter } from '@angular/router';

describe('AuthFormEmailComponent', () => {
  let component: AuthFormEmailComponent;
  let fixture: ComponentFixture<AuthFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormEmailComponent,NoopAnimationsModule],
      providers:[provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button when control is valid', () => {
    const button:HTMLButtonElement = fixture.nativeElement.querySelector('button')
    expect(button.disabled).toBe(true)

    component.control.setValue('user@teste.com')
    fixture.detectChanges()

    expect(button.disabled).toBe(false)
  })
it('should display required error message', () => {
  const error:HTMLElement = fixture.nativeElement.querySelector('[data-testid="error-required"]')
  component.control.markAsTouched();
  fixture.detectChanges()
  expect(error).toBeTruthy()

})
it('should display email error message', () => {

  const input:HTMLInputElement = fixture.nativeElement.querySelector('input')
  input.value ='user'
  input.dispatchEvent(new Event('input'))
 
  component.control.markAsTouched();
  fixture.detectChanges()
  const error:HTMLElement = fixture.nativeElement.querySelector('[data-testid="error-email"]')
  expect(error).toBeTruthy()
})
});
