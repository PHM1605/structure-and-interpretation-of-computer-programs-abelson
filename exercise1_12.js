// Pascal's triangle
// n is the line index
function pascal(row, col) {
    return row<=1 || col==0 || col==row
        ? 1
        : pascal(row-1, col-1) + pascal(row-1, col)
}

const num_rows = 5
let res = ""
for (let row=0; row<num_rows; row++) {
    for (let col=0; col<=row; col++) {
        res += `${pascal(row, col)} `
    }
    res += "\n"
}

console.log(`Pascal of ${num_rows} is: \n`, res)