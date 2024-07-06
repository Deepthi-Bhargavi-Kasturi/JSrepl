const arrayLike = {
  length: 3,
  "zero": 6,
  "one":7,
  "two": 4
};
console.log(arrayLike);
//console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
console.log(Array.prototype.splice.call(arrayLike, 0,2));
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
