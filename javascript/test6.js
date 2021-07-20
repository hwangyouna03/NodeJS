//user배열에 3개의 객체 들어가게 하기
name: kim
age:30

name:lee
age:25

name:park
age:27

user =[['kim', 30], ['lee', 25], ['park', 27]];

//2. name:kang, age:35를 맨 뒤에 추가하고 배열의 길이 출력
user.push('kang',35);
console.log(user.length);

//3. 맨 뒤의 데이터를 빼내고 배열의 길이 출력
user.pop();
console.log(user.length);
//4. 맨 앞에 name:ko, age:40 추가하고 배열의 길이 출력
user.unshift('ko', 40);
console.log(user.length);
//5. 맨 앞의 데이터를 빼내고 배열의 길이 출력
user.shift();
console.log(user.length);
//6. 2번째 데이터 삭제
user.delete(1);
//7. forEach 이용해서 값 출력