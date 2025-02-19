// Method 1 to compute factorial: decreasing order
function factorial_1(n) {
    return n===1 ? 1 : n*factorial_1(n-1);
}
console.log(factorial_1(6))

// Method 2 to compute factorial: increasing order
function factorial_2(n) {
    return fact_iter(1, 1, n);
}
function fact_iter(product, counter, max_count) {
    return counter > max_count 
        ? product 
        : fact_iter(counter*product, counter+1, max_count)
}
console.log(factorial_2(6))