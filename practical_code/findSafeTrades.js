// Find save trades (trades that haven't been marked as risky on the same day or day before the trade)
const trades = [
  { symbol: 'AAPL', date: '2025-06-13' },
  { symbol: 'TSLA', date: '2025-06-14' },
  { symbol: 'NVDA', date: '2025-06-15' },
  { symbol: 'TSLA', date: '2025-06-15' }
];

const alerts = [
  { symbol: 'TSLA', date: '2025-06-14' },
  { symbol: 'NVDA', date: '2025-06-14' }
];

/**
 * 
 * @param {Array} trades 
 * @param {Array} alerts 
 */
function findSafeTrades(trades, alerts) {
  const safeTrades = trades.filter((trade) => {
    const isRisky = alerts.some((alert) => {
      // if tickers don't match, proceed to next stock ticker
      if (alert.symbol !== trade.symbol) return false;

      const tradeDate = new Date(trade.date);
      const alertDate = new Date(alert.date);
      const diffDays = (tradeDate - alertDate) / (1000 * 60 * 60 * 24);

      return diffDays === 0 || diffDays === 1;
    });
    // we negate and return the safe trades
    return !isRisky;
  });
}


