"use strict"
function sign(numb) {
    if (numb>0){
        alert("I think it`s positive number?");
    }
    else if(numb<0){
        alert("Oh, it seems like you have a negative number, dont you?");
    }
    else
    {
        alert("Just a zero");
    }
}
let UserNumb=Number(prompt("Type your number",0));
sign(UserNumb);