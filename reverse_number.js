function reverse(array) {
  const reversed = [];
  for (let i = array.length - 1; i > -1; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}
