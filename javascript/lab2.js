"use strict";

function pow(x, n) {
    /*return x**n;*/
    if (n==0){ return 1
    } else if (n>0){
        for(let i=1; i<n; i++){
           x*=x
        }
        return x
    }else return 1 / pow(x, -n);
  }

  function sumTo(n) {
    if (n == 1) {
      return 1;
    } else {
      return n + sumTo(n-1);
    }
  }

  function factorial(n) {
    if (n === 0 || n === 1) {
      return BigInt(1);
    } else {
      return BigInt(n) * factorial(n - 1);
    }
  }

  function fib(n) {
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

  function compare(x) {
    return function(y) {
      if(y > x) {
        return true;
      } else if(y < x) {
        return false;
      } else {
        return null;
      }
    }
  }

  function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
  }