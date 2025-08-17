var coinChange = function(coins, amount) {
    // Add validation
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
};

const input = [1,2,5];

const r = coinChange(input, 5);

console.log(r);