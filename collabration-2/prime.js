function isPrime (num){
    let count =0;
    for (let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    };
    if(count==2){
        return "It is a Prime Number";
    }
    else{
        return "It is not a Prime Number";
    }
}
console.log(isPrime(11));