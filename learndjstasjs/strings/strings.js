"use strict"
function firstToUp(str){
    let firstLetter = str[0].toUpperCase();
    let otherLetters = str.slice(1);
    return firstLetter+otherLetters;
}
function isSpam(str){
    let low=str.toLowerCase();
    return low.includes("viagra")||low.includes("xxx");
}
function truncate(str,maxlen){
    return (str.length > maxlen) ?
    str.slice(0, maxlen - 1) + '…' : str;

}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 22));
function extractCurrencyValue(str){
    return Number(str.slice(1));
}
let price=extractCurrencyValue("$210");
console.log(price+1);