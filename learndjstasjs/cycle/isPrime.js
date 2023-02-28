
function isPrime(n){

    for (let i = 2; i <= n; i++) {
        let flag=1;
        for (let j = 2; (j <= i/2)&&(flag==1); j=j+1) {
            if (i%j==0) {
            flag=0
            }
        }
        if (flag==1) {alert(i);}
    }
}

let number=Number(prompt("Type a range for finding prime numbers",0));
isPrime(number);