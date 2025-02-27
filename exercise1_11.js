// f(n)=n if n<3; f(n)=f(n-1)+2*f(n-2)+3*f(n-3) if n>=3
// Result: 0,1,2,4,11,25...
// recursive method
function f(n) {
  return n<3 
    ? n
    : f(n-1)+2*f(n-2)+3*f(n-3)
}
console.log("f(n) with recursive method: ", f(5))

// iterative method
function f2(n) {
  return f_iter(2, 1, 0, n);
}

function f_iter(c, b, a, n) {
  return n<3
      ? c 
      : f_iter(c+2*b+3*a, c, b, n-1)
}
console.log("f(n) with iterative method: ", f2(5))
