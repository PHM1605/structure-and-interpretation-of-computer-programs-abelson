function dec(a) {
  return --a;
}

function inc(a) {
  return ++a;
}

// This is recursive, as plus(4,5) -> inc(plus(3,5)) -> inc(plus(2,5)) -> inc(plus(1,5)) -> inc(plus(0,5)) -> inc(5)=6 -> inc(6)=7 -> ... ->inc(8)=9
// Each step still has inc(...) waiting to be calculated.
function plus_1(a, b) {
  return a===0 ? b : inc(plus_1(dec(a), b));
}
console.log(plus_1(4,5))

// This is iterative, as plus(4,5) -> plus(3,6) -> plus(2,7) -> plus(1,8) -> plus(0,9)
// Return once depending on parameter's state at the end.
function plus_2(a, b) {
  return a===0 ? b : plus_2(dec(a), inc(b))
}
console.log(plus_2(4,5))