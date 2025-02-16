function square(x) {
  return x*x;
}
function sum_of_squares(x, y) {
  return square(x) + square(y);
}
// function application
function f(a) {
  return sum_of_squares(a+1, a*2)
}
console.log(f(5))

function abs(x) {
  return x>=0 ? x : 
    x===0 ? 0 :-x ;
}