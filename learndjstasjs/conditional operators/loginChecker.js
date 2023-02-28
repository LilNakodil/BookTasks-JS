"use strict"
let login=prompt("Who is there?","");
function checker(loginn){
    if (loginn==="Admin"){
        let password=prompt("Type your password","");
        if (password==="Im the boss"){
            alert("Hello,boss!");
        }
        else if(password===""||password===null){
            alert("Denied");
        }
        else{
            alert("Incorrect password");
        }
    }
    else if(loginn==="" || loginn===null){
        alert("Denied");
    }
    else
    {
        alert("Unknown user");
    }
}
checker(login);