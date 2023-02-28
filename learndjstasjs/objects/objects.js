"use strict"
let user={};
user.name="John";
user.surname='Smith';
user.name="Pete";
function isEmpty(obj){
    let properties=0;
    for(let key in obj){
        properties++;
    }
    if(properties>0){
        return false;
    }
    else{
        return true;
    }
}
console.log(isEmpty(user));
let boomer={};
console.log(isEmpty(boomer));
function summSalar(salaries){
    let sum=0;
    for(let key in salaries){
        sum+=salaries[key];
    }
    return sum;
}
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
console.log(summSalar(salaries));
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
