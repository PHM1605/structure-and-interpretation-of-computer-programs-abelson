function sum_of_squares_of_two_max(a, b, c) {
  // sort in descending order
  const sorted_numbers = [a,b,c].sort((x, y) => y-x)
  return sorted_numbers[0]**2 + sorted_numbers[1]**2;
}

console.log(sum_of_squares_of_two_max(3,2,6))