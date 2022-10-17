import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  calculate(first: number, second: number) {
    if (isNaN(first) || isNaN(second)) {
      return 0;
    }
    return first + second;
  }
}
