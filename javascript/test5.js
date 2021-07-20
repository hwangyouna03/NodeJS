//1. 기본 생성
const user={
    kim:10,
    lee:7,
    park:25
}
console.log(user.kim);

//2. new 연산자 이용한 생성
const user1 = new Object(); //객체 생성
//= const user={};와 똑같은 코드
//{}은 객체를 생성하겠다. 선언한 의미
//객체 이름.키=값, 객체이름[키]=값;
user.kim = 10;
user.lee=25;
user['park']=9;

//3. 프로토타입을 이용한 생성(자바의 클래스와 거의 비슷한 개념)
//프로토 타입: 함수..(자바의 생성자함수)
function Person(name, age){
    this.name=name;
    this.age=age;
}
Person.prototype.walk=function(){ //객체이름.prototype.메서드이름
    console.log("걷는다.");
}

let person1 = new Person("kim", 30);
let person2 = new Person("lee", 20);
console.log(person1.name);
console.log(person2.name);
person1.walk();
console.log('---------------------------');

//예제- score, kor 100 / eng 80 / math 90
//sum1(): 총 점수 구하기
//국어, 영어, 수학, 총점 출력

