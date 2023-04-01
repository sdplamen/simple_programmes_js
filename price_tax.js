const prices = [20.50, 22.25, 21.75];
const taxRates = [1.15, 1.20, 1.10];

const total = prices.reduce(function(prev, curr, index) {
 return prev + (curr * taxRates[index]);
});
console.log(total);
