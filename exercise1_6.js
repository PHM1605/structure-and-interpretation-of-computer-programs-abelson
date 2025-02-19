// Problem: can we use "conditional-function" instead of "conditional-expression a?b:c"?
function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}
console.log(conditional(2===3, 0, 5))
console.log(conditional(1===1, 0, 5))

function sqrt_iter(guess, x) {
    console.log("New guess is: ", guess)
    return conditional(is_good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x));
}

function average(x, y) {
    return (x+y)/2;
}

function improve(guess, x) {
    return average(guess, x/guess);
}

function is_good_enough(guess, x) {
    return Math.abs(square(guess) - x) < 0.001;
}

function square(x) {
    return x*x;
}

function sqrt(x) {
    return sqrt_iter(1, x);
}

console.log("Square root of 2 is: ", sqrt(2))
// Answer: No, the recursion never stops. conditional(...) is only being evaluated at the end (due to normal-order-evaluation of the interpreter)