const number=+prompt("Type a number from 0 to 3","");
switch(number){
    case 0:
        alert("You typed 0");
        break;
    case 1:
        alert("You typed 1");
        break;
    case 2:
    case 3:
        alert("You typed 2 or maybe 3...");
        break;
    default:
        alert("I said from 0 to 3, what did you typed man??? Are you seriois??");
    
}