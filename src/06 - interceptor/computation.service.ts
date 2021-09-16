import { Injectable } from '@nestjs/common';

@Injectable()
export class ComputationService {
  public add(first: number, second: number) {
    return first + second;
  }

  public fibonacci(n: number): number {
    if (n < 2) {
      return n;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }
}
