
let start = '2025-05-20T14:00';
let end = '2025-06-10T14:00';
let end2 = '2025-06-10T17:00';
let today = '2025-06-13';

// get days
// const diffMS = Date.parse(today) - Date.parse(start);
// const diffDays = diffMS / (1000 * 60 * 60 * 24);

// console.log(diffDays);

// get hours
const diffMS = Date.parse(end2) - Date.parse(end);
const diffHours = diffMS / (1000 * 60 * 60);

console.log(diffHours);