//콜백함수를 5번 호출하기
function callTimes(callback){
    for(var i=0; i<5; i++){
        callback();
    }
}
const callTimes2=(callback)=>{
    for(var i=0; i<5; i++){
        callback();
    }
}
callTimes2();

let testB=()=>{
    console.log('testB()함수입니다.')
}
callTimes(testB);

console.log('---------------------');
function add(a, b, cd){
    d=a+b;
    cd(b);
}
// var k=(result)=>{
//     console.log(result);
// }
// add(10, 20,k);

add(10, 20,(result)=>{
    console.log(result);
})