import { Component } from '@angular/core';
import { MathService } from './math.service';

@Component({
  selector: 'ut-root',
  template: `
    <h1>Math Operation</h1>
    <hr>
    <form class="calculate" ngForm #form="ngForm" (ngSubmit)="calculate()">
      <input type="number" name="firstNumber" placeholder="First Parameter"
        [(ngModel)]="firstNumber" min="1" required />
      &nbsp;
      <input type="number" name="secondNumber" placeholder="Second Parameter"
        [(ngModel)]="secondNumber" min="1" required />
      &nbsp;
      <button type="submit" [disabled]="form.invalid">
        Calculate
      </button>
    </form>
    <b *ngIf="total > 0">
      Addition is - {{ total }}
    </b>
  `,
})
export class AppComponent {
  total = 0;
  firstNumber = 0;
  secondNumber = 0;

  constructor(
    private math: MathService,
  ) { }

  calculate() {
    this.total = this.math.calculate(this.firstNumber, this.secondNumber);
  }
}
