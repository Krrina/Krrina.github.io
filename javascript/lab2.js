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