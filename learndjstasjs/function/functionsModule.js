"use strict"
function checkAgeVer1(age){
    return (age > 18) ? true : confirm('Did your parents allow it?');

}
function checkAgeVer2(age){
    return (age > 18) || confirm('Did your parents allow it?');
}
function min(a,b){
    return (a > b) ? a : b;
}
function pow(x,n){
    let start=x;
    if(n<1){
        alert("Your grade was kinda small, turn it to 1");
        n=1;
    }
    for(let i=1;i<n;i++){
        x=x*start;
    }
    return x;
}
function display(){
    let number=prompt("Type your number","");
    let grade=prompt("And grade","");
    let result=pow(number,grade);
    alert(result);
}
display();
