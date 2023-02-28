"use strict"
function filterRange(arr, a, b) {
    // добавлены скобки вокруг выражения для улучшения читабельности
    return arr.filter(item => (a <= item && item <= b));
  }
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // удалить, если за пределами интервала
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
}
function InverseBubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] < arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
}
function copySorted(arr) {
    return arr.slice().sort();
}
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
console.log(names);
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = users1.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
  
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };
let arr = [ vasya2, petya2, masha2 ];
sortByAge(arr);
console.log(arr[0].name);
console.log(arr[1].name);
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
  