import { flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule],
    }).compileComponents();
  });

  it('should instantiate the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  describe('validations', () => {
    it('should disable button when first parameter field is invalid', () => {
      // arrange
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      const componentEl = fixture.debugElement.nativeElement;
      tick();

      // act
      component.firstNumber = -1;
      tick();

      // assert
      expect(componentEl.querySelector('button').disabled).toBeTruthy();
    });

    it('should disable button when second parameter field is invalid', () => {
      // arrange
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      const componentEl = fixture.debugElement.nativeElement;
      fixture.detectChanges();

      // act
      component.secondNumber = -1;
      fixture.detectChanges();

      // assert
      expect(componentEl.querySelector('button').disabled).toBeTruthy();
    });

    it('should enable button when both fields has valid value', () => {
      // arrange
      const fixture = TestBed.createComponent(AppComponent);
      const component = fixture.componentInstance;
      const componentEl = fixture.debugElement.nativeElement;
      fixture.detectChanges();

      // act
      component.firstNumber = 4;
      component.secondNumber = 4;
      fixture.detectChanges();

      // assert
      expect(componentEl.querySelector('button').disabled).toBeFalsy();
    });
  });

  it('should not display result if user does not click calculate button', () => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const componentEl = fixture.debugElement.nativeElement;

    // act
    component.firstNumber = 4;
    component.secondNumber = 4;
    fixture.detectChanges();

    // assert
    expect(componentEl.querySelector('b')).toBeNull();
  });

  it('should display output after user click calculate button', () => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const componentEl = fixture.debugElement.nativeElement;

    // act
    component.firstNumber = 4;
    component.secondNumber = 4;
    componentEl.querySelector('button').click();
    fixture.detectChanges();

    // assert
    const result = componentEl.querySelector('b');
    expect(result).toBeDefined();
    expect(result.textContent).toContain('Addition is - 8');
  });
});
