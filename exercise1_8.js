// Newton's method for cube root
function cube_root(x) {
    return cube_root_iter(1, x)
}

function cube_root_iter(guess, x) {
    return is_good_enough(guess, x) ? guess : cube_root_iter(improve(guess, x), x)
}

function improve(guess, x) { 
    return (x/guess**2+2*guess)/3
}

function is_good_enough(guess, x) {
    return Math.abs(guess**3-x) < 0.001
}
console.log("Cube root of 8 is: ", cube_root(8))