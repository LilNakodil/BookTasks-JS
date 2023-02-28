"use strict"
let styles=["Jazz","Blues"];
styles.push("Rock n Roll");
let midlen=Math.floor(styles.length/2);
styles[midlen]="Classic";
console.log(styles);
console.log(styles.pop());
console.log( styles.shift() );
styles.unshift("Рэп", "Регги");
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
function getMaxSum(arr) {
    let maxSum = 0; 
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
    return maxSum;
}