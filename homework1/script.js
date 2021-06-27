console.log('Задача 1')

function curr(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}
  
  function sum(a, b, c) {
    return a + b + c;
  }

  function mult(a, b, c) {
    return a * b * c;
  }

  function div(a, b, c) {
    return a / b / c;
  }

  function sub(a, b, c) {
    return a - b - c;
  }
  
let carriedSum = curr(sum);
console.log(carriedSum(1)(2)(3));

let carriedMult = curr(mult);
console.log(carriedMult(4)(5)(6)); 

let carriedDiv = curr(div);
console.log(carriedDiv(7)(8)(9));

let carriedSub = curr(sub);
console.log(carriedSub(10)(11)(12));
    

