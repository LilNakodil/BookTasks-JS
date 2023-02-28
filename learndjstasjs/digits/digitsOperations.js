let a=Number(prompt("Type first",""));
let b=Number(prompt("Type second",""));
console.log(a+b);
console.log("Or");
let c = +prompt("Type first", "");
let d = +prompt("Type second", "");
console.log(c+d);
function readNumb(){
    let numb=prompt("Type a number","");
    while(true){
        if(numb===null||numb===""){
            return null;
        }
        if(numb==Number(numb)){
            return numb;
        }
    }
}
function random(min, max) {
    return min + Math.random() * (max - min);
  }
  function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }