console.log('app init');

var items = [8, 12, 33, 6, 10, 22];

function kthSmallest(arr, pos) {
  // track smallest and second smallest
  let min = Number.MAX_VALUE;
  let min2 = Number.MAX_VALUE;

  for (let i=0;i<arr.length;i++) {
    if (arr[i] < min) {
      min2 = min;
      min = arr[i];
    } else if (arr[i] < min2 && arr[i] !== min) {
      min2 = arr[i];
    }
  }

  return { min: min, min2:min2 };
}

const result = kthSmallest(items, 1);
console.log(result);