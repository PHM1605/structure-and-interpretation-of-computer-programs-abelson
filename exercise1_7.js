function improve(guess, x) {
    return 1/2*(guess + x/guess);
}

// Method 1: checking the difference between guess**2 and radicant
function sqrt_1(x) {
    return sqrt_iter_1(1, x);
}
function sqrt_iter_1(guess, x) {
    return is_good_enough_1(guess, x) ? guess : sqrt_iter_1(improve(guess, x), x);
}
function is_good_enough_1(guess, x) {
    return Math.abs((guess*guess) - x) < 0.001;
}
console.log("Square root of 0.0001 (should be 0.01) with method 1: ", sqrt_1(0.0001)) // result is 0.03, which is wrong due to precision limitation

// Method2: checking the difference between current guess and next guess
function sqrt_2(x) {
    return sqrt_iter_2(1, 0, x);
}
function sqrt_iter_2(guess, previous_guess, x) {
    return is_good_enough_2(guess, previous_guess, x) ? guess : sqrt_iter_2(improve(guess, x), guess, x);
}
function is_good_enough_2(guess, previous_guess, x) {
    return Math.abs((guess-previous_guess) / guess) < 0.001;
}
console.log("Square root of 0.0001 (should be 0.01) with method 2: ", sqrt_2(0.0001)) // result is 0.01, which is correct