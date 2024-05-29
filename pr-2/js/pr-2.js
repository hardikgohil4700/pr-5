let arr = [30, 50, 50];
let sum = 0;
let i
for ( i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("sum of loop:",sum);

let array = [30, 50, 50];
let all = 0;
array.forEach((el) => all += el);
console.log("sum of foreach loop.:",all);
