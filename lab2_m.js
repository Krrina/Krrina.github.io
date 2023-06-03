"use strict";
export function fib(n) {
    if (n === 0) {
      return BigInt(0);
    } else if (n === 1) {
      return BigInt(1);
    } else {
      let a = BigInt(0);
      let b = BigInt(1);
      let c;
      for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
      }
      return c;
    }
  }