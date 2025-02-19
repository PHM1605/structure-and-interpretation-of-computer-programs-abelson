// Fibonacci sequence
// Method 1: recursive
function fib_1(n) {
    return n===0
        ? 0
        : n===1
        ? 1
        : fib_1(n-1) + fib_1(n-2)
}
console.log("Fibonacci of 6 is (tree recursive method): ", fib_1(6));

function fib_2(n) {
    return fib_iter(1, 0, n);
}
function fib_iter(a, b, count) {
    return count === 0 
        ? b
        : fib_iter(a+b, a, count-1);
}
console.log("Fibonacci of 6 is (linear iteration method): ", fib_2(6));