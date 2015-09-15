/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

var num = 600851475143;
var prime = 0;

for(var i = 0; i < 1000; i++) {
  if(num % i === 0) {
    prime += i;
  }
}

console.log(prime);
