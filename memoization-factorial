function memoize(func) {
  var cache = {};
  return function () {
    var key = JSON.stringify(arguments);
    
    if (cache[key]) {    
      return cache[key];
    } 
    else {
      var val = func.apply(this, arguments);    
      cache[key] = val;
      return val;
    }
  };  
}

var factorial = memoize(function(num) {
  console.log('working for factorial(' + num + ')');
  if(num === 1) { return 1 };
  return num * factorial(num - 1);
});

// first call
console.log(factorial(3));
console.log(factorial(3));
console.log(factorial(4));
