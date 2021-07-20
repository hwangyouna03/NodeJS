var sum = 0;
for(var i=1; i<=10; i++){
    sum+=i;
}
console.log("sum", sum); //55
console.log("i", i); //11
console.log("=======================");

function foo(){
    var sum = 0;
    for(var i=1; i <=10; i++){
        sum+=i; //sum:55, i:11
    }
}
    foo();
    //함수에서 벗어나니까 error 남
    console.log("sum", sum); //error
    console.log("i",i); //error

let sum = 0;
for(let i=1; i <=10; i++){
    sum+=i; //sum:55, i:11
}   
console.log("sum", sum);
console.log("i",i); //error