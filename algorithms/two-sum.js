let demo = [2 , 7, 11, 15, 7, 7];

function twoSum(arr, target) {
 let hm = {};
 for (let i=0;i < arr.length; i+=1) {
  let temp = arr[i];
  if (!hm[temp]) {
   hm[temp] = 0;
  }
  hm[temp] += 1;
 }
 return hm;
}

console.log(twoSum(demo, 9));