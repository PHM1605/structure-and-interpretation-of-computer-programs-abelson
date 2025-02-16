// To illustrate function expression is compound expression
// in this case: the return (xxx); xxx is the compound function expression
function plus(a, b) {
  return a+b;
}
function minus(a, b) {
  return a-b;
}
function a_plus_abs_b(a, b) {
  return (b>=0 ? plus : minus)(a,b);
}

console.log(a_plus_abs_b(2,-3))