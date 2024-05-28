/** find HCF (GCD) Greatest common divisor */

/**The idea of this algorithm is, the GCD of two numbers doesn’t change if the smaller number is subtracted from the bigger number.
 * This is the Euclidean algorithm by subtraction. It is a process of repeat subtraction,
 * carrying the result forward each time until the result is equal to any one number being subtracted. */

function gcd(value1, value2) {
  if (value1 == 0) return value2;
  if (value2 == 0) return value1;

  if (value2 == value1) return value1;

  if (value1 > value2) {
    return gcd(value1 - value2, value2);
  }

  if (value1 < value2) {
    return gcd(value1, value2 - value1);
  }
}

console.log(gcd(10, 80));

console.log(gcd(20, 28));
