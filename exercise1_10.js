// Ackermann function
function Ackermann(x, y) {
  return y===0 
  ? 0
  : x===0
  ? 2*y
  : y===1
  ? 2
  : Ackermann(x-1, Ackermann(x, y-1))
}

// A(1,10) -> A(0, A(1,9)) -> A(0, A(1,8)) -> A(0, A(1,7)) -> ... -> A(0, A(1,2)) -> A(0, A(1,1)) -> A(0,2)=4=A(1,1) -> A(0,4)=8=A(1,2) -> ...
console.log(Ackermann(1, 10)) // 1024
console.log(Ackermann(2, 4)) // 65536
console.log(Ackermann(3, 3)) // 65536

// A(0,n) -> 2n
function f(n) {
  return Ackermann(0,n);
}
console.log("2*n is: ", 2*4, ", and Ackermann(0,4) is: ", Ackermann(0,4));

// A(1,2) -> A(0, A(1,1))=A(0,2)=4
// A(1,3) -> A(0, A(1,2)) -> A(0, A(1,1)) -> A(0,2)=A(1,2)=4 -> A(0,4)=8=A(1,3) 
// => A(1,n) = 2^n
function g(n) {
  return Ackermann(1,n);
}
console.log("2^4 is: ", 2**4, ", and Ackermann(1,4) is: ", Ackermann(1,4));

// A(2,2) = A(1, A(2,1)) = A(1, 2) = 2^2 (see g(n) above)
// A(2,3) = A(1, A(2,2)) -> A(1, A(2,1)) = A(1,2) = 2^2=4 -> A(1,4) = 2^2^2
// => A(2,n) = 2^2^2^2.... (n times)
function h(n) {
  return Ackermann(2,n);
}
console.log("2^2^2^2 is: ", 2**2**2**2, ", and Ackermann(2,4) is: ", Ackermann(2,4)); 

function k(n) {
  return 5*n*n;
}
console.log("5*(4^2) is: ", 5*(4**2), ", and k(4) is: ", k(4)); 