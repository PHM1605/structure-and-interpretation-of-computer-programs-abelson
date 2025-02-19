// // Fibonacci sequence
// // Method 1: recursive
// function fib_1(n) {
//     return n===0
//         ? 0
//         : n===1
//         ? 1
//         : fib_1(n-1) + fib_1(n-2)
// }
// console.log("Fibonacci of 6 is (tree recursive method): ", fib_1(6));

// function fib_2(n) {
//     return fib_iter(1, 0, n);
// }
// function fib_iter(a, b, count) {
//     return count === 0 
//         ? b
//         : fib_iter(a+b, a, count-1);
// }
// console.log("Fibonacci of 6 is (linear iteration method): ", fib_2(6));

// Coin change: cần thối lại 1$, có 5 loại xu (50c, 25c, 10c, 5c, 1c), ta có bao nhiêu cách thối?
function count_change(amount) {
    return cc(amount, 5); // 5 loại tiền
}

function cc(amount, kinds_of_coins) {
    return amount===0
        ? 1
        : amount < 0 || kinds_of_coins===0
        ? 0
        : cc(amount, kinds_of_coins-1) + cc(amount-first_denomination(kinds_of_coins), kinds_of_coins) // số cách mà dùng "4 loại tiền trừ loại to nhất", cộng số cách "đã thối đồng tiền to nhất rồi"
}

// có 5 loại tiền 10c, 5c, 1c (sắp xếp theo thứ tự từ to tới nhỏ), bốc loại to nhất để thối trước => lượng còn lại là amount-10
function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 1
        : kinds_of_coins === 2 ? 5
        : kinds_of_coins === 3 ? 10
        : kinds_of_coins === 4 ? 25
        : kinds_of_coins === 5 ? 50
        : 0;
}
console.log("Số cách thối cho 1$ (100c): ", count_change(100))