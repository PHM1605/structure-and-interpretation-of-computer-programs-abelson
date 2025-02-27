function f2(n) {
    return f_iter(2, 1, 0, n);
}

function f_iter(c, b, a, n) {
    return n<3
        ? c 
        : f_iter(c+2*b+3*a, c, b, n-1)
}
console.log(f2(5))