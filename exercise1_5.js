// Test whether an interpreter is using 1/"applicative-order evaluation" (i.e. substitute value asap) or 2/"normal-order evaluation" (i.e. substitute value only at the end)
function p() {
  return p();
}

function test(x, y) {
  return x===0 ? 0 : y;
}

console.log("Result: ", test(0, p()))
// Answer: 2/ will be stucked in an infinite loop of trying to find p(); while 1/ will returns 0 immediately, (... : y;) term isn't even called
// My machine is using 2/