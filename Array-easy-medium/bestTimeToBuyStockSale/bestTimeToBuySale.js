// you have given array of integers and you want to find the maximum profit you can make by buying and selling a stock on different days
//       // Check if the current element is not equal to val

function maxProfit(prices) {
  let minPrice = Infinity; // Initialize minPrice to a very high value
  let maxProfit = 0; // Initialize maxProfit to 0

  for (const price of prices) {
    if (price < minPrice) {
      // Update minPrice if the current price is lower
      minPrice = price;
    } else {
      // Calculate profit if the current price is higher than minPrice
      const profit = price - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit; // Update maxProfit if the current profit is higher
      }
    }
  }

  return maxProfit; // Return the maximum profit found
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5 (Buy at 1 and sell at 6)
// Time Complexity: O(n)
// Space Complexity: O(1)
// This function finds the best time to buy and sell stock to maximize profit.
// It iterates through the prices, keeping track of the minimum price seen so far and calculating the maximum profit possible at each step.
