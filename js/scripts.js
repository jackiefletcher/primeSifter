var arrayUpTo = function(number) {
  var array = [];
  for (var index = 2; index <= number ; index += 1) {
    array.push(index);
  }
  return array;
};


var primeSift = function(number) {
  var array = arrayUpTo(number);
  var primes = [];

  for (var index = 2; index <= number; index += 1) {
    array.forEach(function(number, idx) {
      if ((number > index) && (number % index === 0)) {
        delete array[idx];
      }
    });
  }

  array.forEach(function(number) {
    if (number !== undefined) {
      primes.push(number);
    }
  });

  return primes;

};
