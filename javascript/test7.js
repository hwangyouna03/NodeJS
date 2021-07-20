//add라는 함수를 만들고 3, 5를 넘겨서 더한 합을 출력해보기
// function add(a, b){
//     return a+b;
// }
// console.log(add(3, 5));

//add()함수를 익명함수로 만들기 <--이것을 많이 씀
//const도 let도 상관 없음
const add = function(x, y){
    return x+y;
}
console.log(add(3,5));

//익명함수로 만들기
//1부터 m까지 더한 합 출력
const sum = function(n,m){
    for(let i = n; i <=m; i++){
        return 1+m;
    }
}
console.log(sum(1,10));

//2. n을 넘겨서 짝수인지 홀수인지 판단하여 출력
const num = function(n){
    if(n%2==0){
        console.log('짝수');
    }else if(n%2==1){
        console.log('홀수');
    }
}
num(7);
//3. person 객체를 만들고 name:kim, age:30, add:x,y더한 값 리턴
const person={
    name:'kim',
    age:30,
    add:function(x,y){
        return x+y;
    }
}
person.add(3, 5); //객체 안에 함수가 들어갈 수 있다.

//4. person2 객체를 만들고 list:객체 삽입(kim, 30 / lee, 28 / park,25)
//show: 함수(console.log(hi hello)) person2 함수 호출
//3, 4번은 객체에 넣을 수 있는 요소: 객체 삽입 가능, 함수도 가능
const person2= {
    list:{kim:30, lee:28, park:35},
    show:function(){
        console.log('hi hello');
    }
}
person2.show();
person2['show']();
//객체 안에 객체와 함수 삽입 가능