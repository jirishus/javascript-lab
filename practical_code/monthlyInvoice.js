/*
Generate a monthly invoice report

create a function that groups tenant payments by month and returns a summary of the total collected each month

*/

const payments = [
  { tenant: 'Alice', amount: 1200, paidAt: '2025-06-01' },
  { tenant: 'Bob', amount: 950, paidAt: '2025-06-03' },
  { tenant: 'Alice', amount: 1200, paidAt: '2025-05-01' },
];

function generateMonthlyInvoice(payments) {
  const report = {};

  for (const payment of payments) {
    const month = payment.paidAt.slice(0,7);
    if (!report[month]) {
      report[month] = 0;
    }
    report[month] += payment.amount;
  }

  return report;
}