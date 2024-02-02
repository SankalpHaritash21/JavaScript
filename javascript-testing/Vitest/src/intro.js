// Lesson: Writing your first tests
export function max(a, b) {
  // if (a > b) return a;
  // else if (b > a) return b;
  // return a;

  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function Avg(x) {
  if (x.length === 0) return NaN;

  const sum = x.reduce((sum, current) => sum + current, 0);
  return sum / x.length;
}

export function fact(x) {
  if (x < 0) return undefined;
  if (x == 1 || x == 0) return 1;

  return x * fact(x - 1);
}
