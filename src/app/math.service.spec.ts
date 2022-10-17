import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should return 0 if first number is NaN', () => {
    expect(service.calculate(NaN, 1)).toBe(0);
  });

  it('should return 0 if second number is NaN', () => {
    expect(service.calculate(NaN, 1)).toBe(0);
  });

  it('should return addition first and second number is valid', () => {
    expect(service.calculate(1, 1)).toBe(2);
    expect(service.calculate(4, 4)).toBe(8);
    expect(service.calculate(-4, 4)).toBe(0);
    expect(service.calculate(-4, -4)).toBe(-8);
  });
});
