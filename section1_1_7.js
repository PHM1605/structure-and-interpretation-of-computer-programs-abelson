function average(x, y) {
    return (x + y) / 2;
}

function sqrt(x) {
    function is_good_enough(guess) {
        return Math.abs(guess**2 - x) < 0.001;
    }
    function improve(guess) {
        return average(guess, x/guess);
    }
    function sqrt_iter(guess) {
        return is_good_enough(guess) ? guess : sqrt_iter(improve(guess))
    }
    return sqrt_iter(1);
}

console.log("Square root of 2: ", sqrt(2))
